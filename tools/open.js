
var args = process.argv.slice(2);
var path = require('path');
var spawn = require('child_process').spawn;

var filename = args[0];
var fullpath = path.resolve(process.cwd(), filename);
// can i just open devtool for the tab open by this module
// flag --auto-open-devtools-for-tabs

if (process.platform === 'darwin') {
  let macRun = spawn('open', ['-a', 'Google Chrome', fullpath]);
  macRun.stderr.on('data', (data) => {
    alertTips();
  });
} else if (process.platform === 'win32') {
  // in windows
} else if (process.platform === 'linux') {
  // in linux
} else {
  alertTips();
}

function alertTips () {
  console.log(`please open your browser and visit ${path.resolve(execPath, filename)}`);
}
