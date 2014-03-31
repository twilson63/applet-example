var test = require('tap').test;
var applet = require('../../app/controllers/applet');

test('Hello World', function(t) {
  var scope = {};
  applet(scope);
  t.ok(scope.foo);
  t.equals(scope.foo, 'Hello World');
  t.end();
});

