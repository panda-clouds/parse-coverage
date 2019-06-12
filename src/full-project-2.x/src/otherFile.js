
Parse.Cloud.define('other', (request, response) => {
	response.success('file');
});

Parse.Cloud.define('sideHasWhitespace', (request, response) => {
	const PCString = require('@panda-clouds/string');

	response.success(PCString.hasWhitespace('ya> <here'));
});

Parse.Cloud.define('sideDoesntHasWhitespace', (request, response) => {
	const PCString = require('@panda-clouds/string');

	response.success(PCString.hasWhitespace('no'));
});
