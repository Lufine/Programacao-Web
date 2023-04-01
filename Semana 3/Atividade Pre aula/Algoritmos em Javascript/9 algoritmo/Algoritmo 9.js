/*
Curso de Engenharia de Software - UniEVANGÉLICA 
Disciplina de Programação Web 
Dev: Luiz Filipe Neuwirth - 2111287
DATA: 20/03/2023
*/

//A função sumMatrix recebe uma matriz como parâmetro.
function sumMatrix(matrix) {

    //A variável sum é iniciada com o valor 0, que é o valor da soma inicial.
    var sum = 0;

    //A primeira instrução do laço for externo é a declaração da variável i e sua inicialização com o valor 0.

    //O laço for externo percorre cada linha da matriz.

    //A primeira instrução do laço for interno é a declaração da variável j e sua inicialização com o valor 0.
    for (var i = 0; i < matrix.length; i++) {

    //Quando todos os elementos da linha atual são percorridos, o laço interno é encerrado e o laço externo passa para a próxima linha da matriz.

    //O laço externo continua até que todas as linhas da matriz sejam percorridas.
      for (var j = 0; j < matrix[i].length; j++) {

        //Após percorrer toda a matriz e somar todos os seus elementos, o valor total da soma é retornado pela função sumMatrix.

        //Um exemplo de uso é dado, em que é criada uma matriz e a função sumMatrix é chamada com essa matriz como parâmetro. O resultado é impresso no console.
        sum += matrix[i][j];
      }
    }
    return sum;
  }
  
  //Exemplo de uso:
  var matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
  var totalSum = sumMatrix(matrix);
  console.log(totalSum); // 45
  

//Propriedades:

  // - O algoritmo utiliza laços for para percorrer cada elemento da matriz.
  // - A variável sum é utilizada para armazenar o valor da soma de todos os elementos da matriz.
  // - A função sumMatrix retorna a soma total dos elementos da matriz.