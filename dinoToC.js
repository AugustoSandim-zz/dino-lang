/**********************************************************************
* 
* dinoToC.js: recebe um código em DINO e retorna o mesmo traduzido
* para C.
*
***********************************************************************/
module.exports = function (dinoCode) {
    // A tradução é feita com um simples replace no código DINO com o seu respectivo valor
    //em C, a regex (?=(?:[^"]|"[^"]*")*$) evita que sejam substituido os valores dentro
    //de aspas.
    var code = dinoCode;

    if (code == null) return "";

    //Traduzindo a MAIN
    code = code.replace(/(INIFIO)(?=(?:[^"]|"[^"]*")*$)/g, 'int main (void) {'); 
    //Traduzindo o END
    code = code.replace(/(FIM)(?=(?:[^"]|"[^"]*")*$)/g, '}');
    //Traduzindo printf
    code = code.replace(/(INVOCAR[\?]?)(?=(?:[^"]|"[^"]*")*$)/g, 'printf');
    //Traduzindo scanf
    code = code.replace(/(FHOW ME THE MONEY[\?]?)(?=(?:[^"]|"[^"]*")*$)/g, 'scanf');
    //Traduzindo if
    code = code.replace(/(SERA[\?]?)(?=(?:[^"]|"[^"]*")*$)(.*)/g, 'if $2 {');
    //Traduzindo else
    code = code.replace(/(ELF)(?=(?:[^"]|"[^"]*")*$)/g, '} else {');
    //Traduzindo else if
    code = code.replace(/(FEL FIF[\?]?)(?=(?:[^"]|"[^"]*")*$)(.*)/g, '} else if $2 {');
    //Traduzindo while
    code = code.replace(/(VAI TENTANDO)(?=(?:[^"]|"[^"]*")*$)(.*)/g, 'while $2 {');
    //Traduzindo for
    code = code.replace(/(MANDA VE)(?=(?:[^"]|"[^"]*")*$)(.*)/g, 'for $2 {');
    //Traduzindo declaração de função
    code = code.replace(/(BOFA[ \t]*\()(?=(?:[^"]|"[^"]*")*$)(.*)(\))/g, '$2 {');
    //Traduzindo retorno da função
    code = code.replace(/(BORA CUMPAD[EI])(?=(?:[^"]|"[^"]*")*$)/g, 'return');
    //Traduzindo chamada de função
    code = code.replace(/(FAZ FAI)(?=(?:[^"]|"[^"]*")*$)/g, ' ');
    //Traduzindo parada no código
    code = code.replace(/(FARA COM IFFO)(?=(?:[^"]|"[^"]*")*$)/g, 'break');
    //Traduzindo continuar o código
    code = code.replace(/(FARTIU)(?=(?:[^"]|"[^"]*")*$)/g, 'continue');

    //Traduzindo os tipos de dados
    code = code.replace(/(FAR)(?=(?:[^"]|"[^"]*")*$)/g, 'char');
    code = code.replace(/(INF)(?=(?:[^"]|"[^"]*")*$)/g, 'int');
    code = code.replace(/(FHORT)(?=(?:[^"]|"[^"]*")*$)/g, 'short');
    code = code.replace(/(FONG)(?=(?:[^"]|"[^"]*")*$)/g, 'long');
    code = code.replace(/(DOUFLE)(?=(?:[^"]|"[^"]*")*$)/g, 'double');
    code = code.replace(/(FLOAF)(?=(?:[^"]|"[^"]*")*$)/g, 'float');
    code = code.replace(/(UNFIGNEF)(?=(?:[^"]|"[^"]*")*$)/g, 'unsigned');

    //Colocando as bibliotecas
    code = "#include <stdio.h>\n#include <math.h>\n\n" + code;

    return code;
}
