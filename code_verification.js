/**********************************************************************
* 
* code_verification.js: recebe um código em DINO e verifica se o código
* pode ser executado ou nao.
*
***********************************************************************/
module.exports = function (dinoCode) {
    return dinoCode.match(/((#.*include.*)|(system)|(popen)|(fopen)|(fgets)|(execl))/g);
}
