/**********************************************************************
* 
* code_exec.js: recebe um código em DINO, uma entrada padrão e um valor
* de resposta, cria o arquivo .c equivalente ao código DINO, compila e
* o executa.
*
***********************************************************************/
var crypto = require('crypto');

// Cria um valor hexadecimal com tamanho len
function randomValueHex (len) {
    return crypto.randomBytes(Math.ceil(len/2))
        .toString('hex')
        .slice(0,len);
};


module.exports = function (hCode) {
    const fs   = require('fs');
    const comp = require('./compiler.js');
    const code = require('./dinoToC.js')(hCode);

    var rName = randomValueHex(15).toString();
  
    // Escrevendo a stdin
    fs.writeFile(rName + ".txt", function (error) {
        
        fs.writeFile(rName + ".c", code, function (err) {
           
            // compila e executa
            process.nextTick(function () {
                comp(rName);
            });
        });
    });
};
