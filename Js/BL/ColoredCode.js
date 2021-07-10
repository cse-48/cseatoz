const ClassCode = {
	KWD: 1,
	PUN: 2,
	TYP: 3,
	STR: 4,
	DEF: 5,
};
Object.freeze(ClassCode);
const _keyword = [
	'void',
	'const',
	'let',
	'int',
	'float',
	'string',
	'public',
	'private',
	'static',
	'for',
	'if',
	'else',
	'namespace',
	'interface',
];

var GetTokenClassCode = (token) => {
	if (_keyword.includes(token)) {
		return ClassCode.KWD;
	} else if (token.match(/{|}|\(|\)|;|:/g)?.length > 0) return ClassCode.PUN;
	else {
		return ClassCode.DEF;
	}
};
var GetTokenTag = (token) => {
	if (token == '<br/>') return document.createElement('BR');
	else {
		let span = document.createElement('SPAN');
		span.innerHTML = token;
		switch (GetTokenClassCode(token)) {
			case ClassCode.KWD:
				span.className = 'kwd';
				break;
			case ClassCode.PUN:
				span.className = 'pun';
				break;
			case ClassCode.TYP:
				span.className = 'typ';
				break;
			case ClassCode.STR:
				span.className = 'kwd';
				break;
			default:
				span.className = 'def';
		}
		return span;
	}
};

var GetColoredCode = (code) => {
	let tokenList = code.replaceAll('\n', ' <br/> ').split(/\s+/);
	let codeContainer = document.createElement('DIV');
	for (let i = 0; i < tokenList.length; i++) {
		codeContainer.appendChild(GetTokenTag(tokenList[i]));
	}
	return codeContainer;
};
var ColoredCode = (code, codeColorVersion = 1) => {
	switch (codeColorVersion) {
		case 1:
			return GetColoredCode(code);
		default:
			return GetColeredCode(code);
	}
};
