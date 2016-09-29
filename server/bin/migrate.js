var path = require('path');
var app = require(path.resolve (__dirname, '../server'));
var ds = app.dataSources["db-mysql"];

var models = ['GcmToken'];

ds.automigrate(models, function(er) {
  //if (er) throw er;
  console.log('Loopback tables [' + models + '] created in ', ds.adapter.name);
  ds.disconnect();
});
