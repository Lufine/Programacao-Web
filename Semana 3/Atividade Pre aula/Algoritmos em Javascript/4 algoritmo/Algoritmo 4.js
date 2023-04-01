/*
Curso de Engenharia de Software - UniEVANGÉLICA 
Disciplina de Programação Web 
Dev: Luiz Filipe Neuwirth - 2111287
DATA: 20/03/2023
*/

function isPrime(num) {
    //Se o número for menor ou igual a 1, não é primo
    if (num <= 1) {
      return false;
    }
    
    //Percorre os números de 2 até a metade do número, verificando se é divisível
    for (let i = 2; i <= num / 2; i++) {
      if (num % i === 0) {
        // Se for divisível, não é primo
        return false;
      }
    }
    
    //Se não encontrou nenhum divisor, o número é primo
    return true;
  }
  
  //Exemplo de uso:
  const number = 17;
  if (isPrime(number)) {
    console.log(`${number} é primo`);
  } else {
    console.log(`${number} não é primo`);
  }