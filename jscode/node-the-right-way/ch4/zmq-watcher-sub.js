"use strict";

const
  zmq = require('zeromq'),

  subscriber = zmq.socket('sub');

// subscribe to all messages
subscriber.subscribe("");

subscriber.on("message", function(data) {
  let
    message = JSON.parse(data),
    date = new Date(message.timestamp);
  console.log("File '" + message.file + "' changed at'" + date);
});

subscriber.connect("tcp://localhost:5432");
