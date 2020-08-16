'use strict';

const
  async = require('async'),
  file = require('file'),
  request = require('request'),
  rdfParser = require('./lib/rdf-parser.js'),

  work = async.queue(function(path, done){
    rdfParser(path, function(err, doc){
      request({
        method: 'PUT',
        url: 'http://localhost:5984/books/' + doc._id,
        json: doc,
        auth: {
          user: 'admin',
          password: 'admin'
        }
      }, function(err, res, body){
        if (err) {
          throw Error(err);
        }
        console.log(res.statusCode, body);
        done();
      });
    });
  }, 100);

console.log('begining directory walk');

file.walk(__dirname + '/cache', function(err, dirPath, dirs, files){
  files.forEach(function(path){
    work.push(path);
  });
});
