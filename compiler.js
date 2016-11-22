/**********************************************************************
* 
* compiler.js: compila o arquivo file e executa-o (se o retorno da execução
* for 0, retorna a stdout do arquivo, caso contrário, exibe erro de compi
* lação).
*
***********************************************************************/
module.exports = function (file) {
  const exec = require('child_process').exec;
  const fs   = require('fs');

  //compila com o gcc
  exec('gcc ' + file + '.c -o ' + file + ' -lm && timeout 2s ./' + file + ' < ' + file + '.txt', function (error, stdout, stderr) {

    if (error) {
      console.log ("ERROR: " + "DEU RUIM!! ERROUU DE COMPILAÇÃO");
    }

    else {
      // SAÍDA
      console.log (stdout);
    }
  })

  .on('close', function () {
    exec('rm ' + file + '*');
  });
};