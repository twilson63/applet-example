var test = require('tap').test;
var applet = require('../../app/directives/applet');

test('Verify Directive Object', function(t) {
  var directive = applet();
  t.equals(directive.restrict, 'EA');
  t.end();
});
