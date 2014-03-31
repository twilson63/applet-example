// # app
//
// add dependencies 
// host should include pouchdb
// host should include angular
// require('angular/angular');


// main module info
angular.module('applet', [])
  .directive('applet', require('./directives/applet'));
