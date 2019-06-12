
require('./otherFile.js');

Parse.Cloud.define('codeCove1', (request, response) => {
	response.success(1);
});

Parse.Cloud.define('codeCove2', (request, response) => {
	response.success(2);
});

Parse.Cloud.define('challenge', (request, response) => {
	response.success('everest');
});

Parse.Cloud.define('selfChallenge', (request, response) => {
	return Parse.Promise.as()
		.then(() => {
			return Parse.Cloud.run('challenge');
		})
		.then(result => {
			response.success(result);
		});
});

Parse.Cloud.define('pwd', (request, response) => {
	const testFolder = './cloud';
	const fs = require('fs');

	const all = fs.readdirSync(testFolder);

	response.success(all);
});

Parse.Cloud.define('pwd-node', (request, response) => {
	const testFolder = './cloud/node_modules';
	const fs = require('fs');

	const all = fs.readdirSync(testFolder);

	response.success(all);
});

Parse.Cloud.define('mainHasWhitespace', (request, response) => {
	const PCString = require('@panda-clouds/string');

	response.success(PCString.hasWhitespace('ya> <here'));
});

Parse.Cloud.define('mainDoesntHasWhitespace', (request, response) => {
	const PCString = require('@panda-clouds/string');

	response.success(PCString.hasWhitespace('no'));
});
