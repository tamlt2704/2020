/**
 * http://usejsdoc.org/
 */
const
	request = require('request'),
	options = {
		method: process.argv[2] || 'GET',
		url: 'http://localhost:5984/' + (process.argv[3] || ''),
		auth: {
			user: 'admin',
			password: 'admin'
		}
	};
	
request(options, function(err, res, body){
	if (err) {
		throw Error(err)
	} else {
		console.log(res.statusCode, JSON.parse(body));
	}
});