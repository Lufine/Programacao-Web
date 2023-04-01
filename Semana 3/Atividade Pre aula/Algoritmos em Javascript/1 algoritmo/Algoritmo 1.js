/*
Curso de Engenharia de Software - UniEVANGÉLICA 
Disciplina de Programação Web 
Dev: Luiz Filipe Neuwirth - 2111287
DATA: 20/03/2023 
*/

//Essa linha define uma função bubbleSort que recebe um array a ser ordenado como argumento.
function bubbleSort(array) {

    //Essa linha inicializa uma variável len com o comprimento do array.
    var len = array.length;

    //Essa linha declara uma variável swapped que será usada para verificar se houve alguma troca durante a última iteração do algoritmo.
    var swapped;

    //Essa linha começa um loop do-while que irá percorrer repetidamente o array até que esteja completamente ordenado.
    do {

      //Essa linha define a variável swapped como false, indicando que nenhuma troca foi feita na iteração atual.
      swapped = false;

      //Essa linha começa um loop for que percorre o array, comparando pares de elementos adjacentes.
      for (var i = 0; i < len - 1; i++) {

        //Essa linha verifica se o elemento atual é maior do que o próximo elemento. Se isso for verdade, eles serão trocados.
        if (array[i] > array[i + 1]) {

          //Essa linha armazena temporariamente o valor do elemento atual em uma variável temp.

          //Essa linha substitui o valor do elemento atual pelo valor do próximo elemento.
          var temp = array[i];

          //Essa linha substitui o valor do elemento atual pelo valor do próximo elemento.
          array[i] = array[i + 1];

          //Essa linha substitui o valor do próximo elemento pelo valor armazenado em temp, concluindo a troca.
          array[i + 1] = temp;

          //Essa linha define a variável swapped como true, indicando que uma troca foi feita na iteração atual.
          swapped = true;
        }
      }

      //Essa linha decrementa a variável len, pois o último elemento agora está na posição correta e não precisa mais ser verificado.
      len--;

    //Essa linha finaliza o loop do-while, que irá continuar até que não haja mais trocas a serem feitas no array.
    } while (swapped);

    //Essa linha retorna o array ordenado.
    return array;
  }
  
  //Exemplo de uso:
  var arr = [5, 3, 8, 4, 2];
  var sortedArr = bubbleSort(arr);
  console.log(sortedArr); // [2, 3, 4, 5, 8]