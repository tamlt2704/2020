/**
 * http://usejsdoc.org/
 */
'use strict';

const
	fs = require('fs'),
	cheerio = require('cheerio');

var parser = function(filename, callback) {
	fs.readFile(filename, function(err, data){
		if (err) {return callback(err);}
		let
			$ = cheerio.load(data.toString()),
			collect = function(index, elem) {
				return $(elem).text();
			};
		var subjects = $('pgterms\\:agent pgterms\\:name');

		callback(null, {
			_id: $('pgterms\\:ebook').attr('rdf:about').replace('ebooks/', ''),
			title: $('dcterms\\:title').text(),
			authors: $('pgterms\\:agent pgterms\\:name').map(collect).get(),
			subjects: $('[rdf\\:resource$="/LCSH"]').siblings('rdf\\:value').map(collect).get()
		});
	});
}

module.exports = parser;

//parser("./cache/epub/132/pg132.rdf", console.log);
// node --harmony -e 'require("./lib/rdf-parser.js")("cache/epub/132/pg132.rdf", console.log)'

