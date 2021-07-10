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
	'new',
	'using',
	'class',
	'const',
	'let',
	'int',
	'float',
	'string',
	'public',
	'private',
	'static',
	'for',
	'while',
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
	if (token == '<br/>') return '<br/>';
	else {
		let span = '<span ';
		switch (GetTokenClassCode(token)) {
			case ClassCode.KWD:
				span += 'class="kwd">';
				break;
			case ClassCode.PUN:
				span += 'class="pun">';
				break;
			case ClassCode.TYP:
				span += 'class="typ">';
				break;
			case ClassCode.STR:
				span += 'class="str">';
				break;
			default:
				span += 'class="def">';
		}
		return span + token + ' </span>';
	}
};

var GetColoredCode = (code) => {
	let tokenList = code.replaceAll('\n', ' <br/> ').split(/\s+/);
	let codeContainer = '<div class="codeblock full-width">';
	let isStr = false;
	let prevStrStart = '#';
	let = str = '';
	for (let i = 0; i < tokenList.length; i++) {
		let token = tokenList[i];
		if (isStr || token.includes("'") || token.includes('"')) {
			if (token.includes(prevStrStart)) {
				codeContainer += "<span class='str'>" + str + ' ' + token + ' </span>';
				isStr = false;
				prevStrStart = '#';
				str = '';
			} else {
				str += token + ' ';
				prevStrStart = isStr ? prevStrStart : token;
				isStr = true;
			}
		} else codeContainer += GetTokenTag(token);
	}
	return codeContainer + '</div>';
};
var ColoredCode = (code, codeColorVersion = 1) => {
	switch (codeColorVersion) {
		case 1:
			return GetColoredCode(code);
		default:
			return GetColeredCode(code);
	}
};
