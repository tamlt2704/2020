"use strict";

const
  zmq = require('zeromq'),
  filename = process.argv[2],

  // create request endpoint
  requester = zmq.socket('req');

//handle replies from responder
requester.on("message", function(data){
  let response = JSON.parse(data);
  console.log("Received response:", response);
});

requester.connect("tcp://127.0.0.1:5433");

// send request for content
for (let i = 1; i <= 5; i++) {
  console.log('sending request ' + i + ' for ' + filename);
  requester.send(JSON.stringify({
    path: filename
  }));
}
