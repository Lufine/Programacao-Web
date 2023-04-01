/*
Curso de Engenharia de Software - UniEVANGÉLICA 
Disciplina de Programação Web 
Dev: Luiz Filipe Neuwirth - 2111287
DATA: 20/03/2023
*/

function fatorial(n) {
  // Caso base
  if (n == 0 || n == 1) {
    return 1;
  } else {
    // Caso recursivo
    return n * fatorial(n - 1);
  }
}

// Exemplo de uso
console.log(fatorial(5)); // Saída: 120

//Propriedades:

// - A função fatorial recebe um número n como entrada e retorna o fatorial deste número.
// - Na primeira linha da função, verificamos se o número n é igual a 0 ou 1, que são os casos base do algoritmo. O fatorial de 0 ou 1 é sempre 1, portanto retornamos 1 nestes casos.
// - Caso o número n não seja 0 ou 1, então entramos no caso recursivo.
// - O caso recursivo utiliza a definição matemática do fatorial, que é o produto de todos os números inteiros de 1 a n. Ou seja, multiplicamos o número n pelo fatorial do número n - 1.
// - Isso significa que a função fatorial é chamada novamente, com um argumento diferente. Esse é o passo recursivo do algoritmo.
// - A recursão continua até que atinjamos o caso base, quando o valor do fatorial é retornado.
// - Finalmente, um exemplo de uso da função é apresentado, chamando fatorial(5) e imprimindo o resultado no console. Neste caso, o resultado é 120 (o fatorial de 5).