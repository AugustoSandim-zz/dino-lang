const fs      = require('fs');
const dino    = require('./code_exec.js');
const verif   = require('./code_verification.js');
const path    = require('path');
let code;

require.extensions['.dino'] = (module, filename) => {
  module.exports = fs.readFileSync(filename, 'utf8');
};

let readModuleFile = (path, callback) => {

  try {
    var filename = require.resolve(path);

    fs.readFile(filename, 'utf8', callback);
  } catch (e) {
    callback(e);
  }
}

readModuleFile('./code.dino', (err, words) => {
  code = words.toString();

  dino(code);
});


