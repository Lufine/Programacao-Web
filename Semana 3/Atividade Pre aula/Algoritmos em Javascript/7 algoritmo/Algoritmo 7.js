/*
Curso de Engenharia de Software - UniEVANGÉLICA 
Disciplina de Programação Web 
Dev: Luiz Filipe Neuwirth - 2111287
DATA: 20/03/2023
*/

//Função que calcula a média de um array de números
function calcularMedia(nums) {
    //Verifica se o array está vazio
    if (nums.length === 0) {
      return null; // Retorna null se o array estiver vazio
    }
    //Soma todos os números do array
    let soma = 0;
    for (let i = 0; i < nums.length; i++) {
      soma += nums[i];
    }
    //Divide a soma pelo número de elementos do array para calcular a média
    const media = soma / nums.length;
    return media; // Retorna a média
  }
  
  //Exemplo de uso:
  const numeros = [5, 10, 15, 20];
  const media = calcularMedia(numeros);
  console.log(media); // Imprime: 12.5