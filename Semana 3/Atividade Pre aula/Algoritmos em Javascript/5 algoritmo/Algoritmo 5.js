/*
Curso de Engenharia de Software - UniEVANGÉLICA 
Disciplina de Programação Web 
Dev: Luiz Filipe Neuwirth - 2111287
DATA: 20/03/2023
*/

//A função reverseString recebe uma string str como argumento.
function reverseString(str) {

    //A variável reversed é inicializada como uma string vazia. Essa variável será usada para construir a string invertida.
    var reversed = "";

    //O loop for começa no final da string str (str.length - 1) e continua até o início (0). A cada iteração, o caractere correspondente é adicionado à variável reversed.
    for (var i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }

    //Após o loop, a string reversed é retornada. Isso é equivalente à string str, mas invertida.
    return reversed;
  }
  
  //Exemplo de uso:
  var str = "Olá, mundo!";
  var reversedStr = reverseString(str);
  console.log(reversedStr); // "!odnum ,álO"