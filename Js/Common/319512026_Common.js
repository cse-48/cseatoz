class Cseatoz {
	constructor() {}
	static addEvent(element, eventType, listener, useCapture = false) {
		element.addEventListener(eventType, listener, useCapture);
	}
	static DomainValidation() {
		if (document.URL.indexOf('cseatoz.blogspot') > 0) {
			return true;
		}
		return false;
	}
	static consoleLog(log = '') {
		console.log(log);
	}
	static errorLog(log = '') {
		console.log('ERROR : ' + log);
	}
	static warnLog(log = '') {
		console.log('WARN : ' + log);
	}
	static infoLog(log = '') {
		console.log('INFO : ' + log);
	}
	static ImageSize(size) {
		switch (size) {
			case 'small':
				return '400';
			case 'medium':
				return '768';
			case 'large':
				return '1200';
			default:
				return '768';
		}
	}
}
