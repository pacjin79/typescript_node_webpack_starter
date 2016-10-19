import * as _ from 'lodash';
import fs = require('fs');
import ch = require('child_process');

console.log("lodash play ground");

_.times(3, () => {
    console.log("inside times loop");
})

fs.readFile('/Users/leojin/Development/react_projects/opsie_admin_electron/package.json', (err, data) => {
    if (err) throw err;
    console.log(data.toString());
})

const ls = ch.spawn('ls', ['-lh']);

ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
  console.log(`stderr: ${data}`);
});

ls.on('close', (code:string) => {
  console.log(`child process exited with code ${code}`);
});
