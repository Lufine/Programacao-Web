/*
Curso de Engenharia de Software - UniEVANGÉLICA 
Disciplina de Programação Web 
Dev: Luiz Filipe Neuwirth - 2111287
DATA: 20/03/2023
*/

//Esta é a declaração da função que recebe um parâmetro num que representa o número limite para a série de Fibonacci.
function fibonacci(num) {

    //A variável a é inicializada com o valor 0, que é o primeiro número da série de Fibonacci.
    var a = 0;

    //A variável b é inicializada com o valor 1, que é o segundo número da série de Fibonacci.
    var b = 1;

    //A variável result é inicializada com um array vazio, que irá armazenar os números da série de Fibonacci.
    var result = [];

    //Este laço while irá executar enquanto a variável a for menor ou igual ao número limite fornecido pelo usuário.
    while (a <= num) {

      //Adiciona o valor de a ao array result.
      result.push(a);

      //A variável temp é inicializada com o valor de a.
      var temp = a;

      //A variável a agora recebe o valor de b, que é a soma dos dois números anteriores da série.
      a = b;

      //A variável b agora recebe a soma de temp (que é o valor anterior de a) e b.
      b = temp + b;
    }

    //Retorna o array result que contém a série de Fibonacci até o número limite especificado.
    return result;
  }
  
  //Exemplo de uso:

  //Chama a função fibonacci passando o número 20 como limite para a série de Fibonacci.
  var fibonacciSeries = fibonacci(20);

  //Exibe no console o resultado da função, que é um array contendo a série de Fibonacci até o número 20.
  console.log(fibonacciSeries); // [0, 1, 1, 2, 3, 5, 8, 13]