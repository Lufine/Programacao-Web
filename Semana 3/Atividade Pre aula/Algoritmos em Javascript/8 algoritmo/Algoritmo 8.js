/*
Curso de Engenharia de Software - UniEVANGÉLICA 
Disciplina de Programação Web 
Dev: Luiz Filipe Neuwirth - 2111287
DATA: 20/03/2023
*/

function encontrarPalavraMaisLonga(str) {
    //Dividir a string em um array de palavras
    const words = str.split(' ');
    //Inicializar a palavra mais longa como a primeira palavra do array
    let longestWord = words[0];
  
    //Iterar sobre o array de palavras
    for (let i = 1; i < words.length; i++) {
      //Verificar se a palavra atual é mais longa que a palavra mais longa atual
      if (words[i].length > longestWord.length) {
        //Se sim, atualizar a palavra mais longa
        longestWord = words[i];
      }
    }
  
    //Retornar a palavra mais longa encontrada
    return longestWord;
  }
  
  //Exemplo de uso:
  const str = "O algoritmo que encontra a palavra mais longa em uma string fornecida pelo usuário.";
  const longestWord = encontrarPalavraMaisLonga(str);
  console.log(longestWord); // "encontra"