var fs = require('fs');
var path = require('path');

var nodeModules = 'node_modules';
var linkFrom = path.resolve(__dirname, '..', nodeModules);

const dirs = [
  '../01-entry-output',
  '../02-loader'
];

for(let dir of dirs) {
  var linkTo = path.join(__dirname, dir, nodeModules);
  if (!fs.existsSync(linkTo)) {
    fs.symlinkSync(linkFrom, linkTo);
  }
}
console.log('done install package!');
