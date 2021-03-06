var path = require('path');
var app = require(path.resolve (__dirname, '../server'));
var ds = app.dataSources["db-mysql"];

var models = ['User', 'AccessToken', 'ACL', 'RoleMapping', 
'Role','House','UserDevice','GpsDevice','GpsDeviceLocation',
'Region','RegionPoint','Bin','BinType','Report','ReportType'];

ds.automigrate(models, function(er) {
  if (er) throw er;
  console.log('Loopback tables [' + models + '] created in ', ds.adapter.name);
  ds.disconnect();
});
