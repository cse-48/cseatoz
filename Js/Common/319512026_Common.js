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
}
