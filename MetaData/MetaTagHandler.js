function SocialTags() {
	this.OgImage = _HomeCDNImagePath + '/' + Cseatoz.ImageSize('medium') + '/CSE.jpg';
	this.OgType = 'website';
	this.OgSiteName = 'cseatoz';
	this.TwSite = '@cseatoz';
	this.TwTitle;
	this.TwCreator = '@cseatoz';
	this.TwImage = _HomeCDNImagePath + '/' + Cseatoz.ImageSize('medium') + '/CSE.jpg';
	this.keywords = 'c#,java,python,machine learning,source'; //cseatoz,csea2z,interview,tips
}
const TagAttribute = {
	OgTitle: 'og:title', //assigned
	OgUrl: 'og:url', //assigned
	OgDescription: 'og:description', //assigned
	OgImage: 'og:image',
	OgType: 'og:type',
	OgSiteName: 'og:site_name',
	TwSite: 'twitter:site',
	TwTitle: 'twitter:title',
	TwDescription: 'twitter:description', //assigned
	TwCreator: 'twitter:creator',
	TwImage: 'twitter:image',
	keywords: 'keywords',
};
Object.freeze(TagAttribute);

SocialTags.prototype = {
	// arrow fun global this (window) normal fun local this
	addSocialTags: function () {
		try {
			this.addMetaTag('property', TagAttribute.OgImage, this.OgImage);
			this.addMetaTag('property', TagAttribute.OgType, this.OgType);
			this.addMetaTag('property', TagAttribute.OgSiteName, this.OgSiteName);
			this.addMetaTag('name', TagAttribute.keywords, this.keywords);
            this.addMetaTag('name', TagAttribute.TwSite, this.TwSite);
			this.addMetaTag('name', TagAttribute.TwTitle, document.querySelector("[property='og:title']").content);
            this.addMetaTag('name', TagAttribute.TwImage, this.TwImage);
			this.addMetaTag('name', TagAttribute.TwCreator, this.TwCreator);
			Cseatoz.infoLog('SOCIAL_TAG_ADDED');
			return this;
		} catch {
			Cseatoz.errorLog('ADDING_SOCIAL_TAG');
		}
	},
	addMetaTag: (propertyName, property, content) => {
		let tag = document.createElement('META');
		tag.setAttribute(propertyName, property);
		tag.content = content;
		document.getElementsByTagName('head')[0].appendChild(tag);
	},
};
