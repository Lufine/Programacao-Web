/*
Curso de Engenharia de Software - UniEVANGÉLICA 
Disciplina de Programação Web 
Dev: Luiz Filipe Neuwirth - 2111287
DATA: 20/03/2023
*/

//A função countWords recebe uma string str como argumento.
function countWords(str) {

    //A primeira operação realizada é o método trim(), que remove os espaços em branco no início e no final da string.

    //Em seguida, a string é dividida em palavras utilizando a função split() e uma expressão regular /\s+/ que considera um ou mais espaços em branco como separador entre as palavras.
    
    //O resultado é um array contendo as palavras da string, que é acessado utilizando a propriedade length para obter o número total de palavras.

    //O valor retornado é o número de palavras contidas na string.
    return str.trim().split(/\s+/).length;
  }
  
  //Exemplo de uso:
  var phrase = "O rato roeu a roupa do rei de Roma";
  var wordCount = countWords(phrase);
  console.log(wordCount); // 9