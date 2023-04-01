//Curso de Engenharia de Software - UniEVANGÉLICA
//Disciplina de Programação Web
//Dev's: Alexandre Oliveira, Douglas Leonel de Almeida, Douglas Gabriel, Sebastião Oliveira Neto, Thiago Silva, Luiz Filipe, Elias Everson
//DATA: 29/03/2023

// Preenche a tabela com os dados dos alimentos cadastrados
// Armazenar referências aos elementos HTML relevantes
const formulario = document.getElementById("formulario");
const tabela = document.getElementById("tabela");

// Armazenar os alimentos cadastrados
const alimentos = [
  { nome: "Arroz", validade: "30/06/2023", quantidade: "2 kg" },
  { nome: "Feijão", validade: "30/06/2023", quantidade: "1 kg" },
  { nome: "Macarrão", validade: "30/06/2023", quantidade: "500 g" }
];