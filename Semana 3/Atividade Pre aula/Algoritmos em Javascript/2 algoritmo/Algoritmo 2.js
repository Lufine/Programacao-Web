/*
Curso de Engenharia de Software - UniEVANGÉLICA 
Disciplina de Programação Web 
Dev: Luiz Filipe Neuwirth - 2111287
DATA: 20/03/2023
*/

function fatorial(n) {
    //O fatorial de 0 e 1 é 1.
    if (n === 0 || n === 1) {
      return 1;
    } else {
      //Inicializa o fatorial como o número n.
      var fatorial = n;
      //Loop que multiplica o fatorial pelos números menores que n.
      for (var i = n - 1; i >= 1; i--) {
        fatorial *= i;
      }
      //Retorna o fatorial calculado.
      return fatorial;
    }
  }
  
  //Exemplo de uso:
  var num = 5;
  var resultado = fatorial(num);
  console.log(resultado); // 120
  