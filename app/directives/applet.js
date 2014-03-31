// # applet directive
//
// Description of what the directive does
//
// ## Usage example
//
//
var fs = require('fs');
module.exports = function(/* dependency injection */) {
  return {
    // element or attribute
    restrict: 'EA',
    // replace html with directive template
    replace: true,
    // isolated scope?
    scope: {},
    // template
    template: fs.readFileSync(__dirname + '/../templates/applet.html', 'utf-8'),
    // controller
    controller: require('../controllers/applet.js')
  }
}
