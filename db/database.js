'use strict';

var pg = require('pg');


var conString = 'YOUR  DATABASE URL'
var client = new pg.Client(conString);
client.connect(function (err) {
  if (err) {
    console.log("not connected")

  } else{

    console.log("Database is connected successfully !");
  }

});

module.exports = client;


