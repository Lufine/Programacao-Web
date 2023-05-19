/*
Curso de Engenharia de Software - UniEVANGÉLICA 
Disciplina de Programação Web 
Dev: Luiz Filipe Neuwirth
DATA: 19/05/2023 
*/

class Jogador {
    constructor(nome, equipe) {
      this.id = this.gerarId();
      this.nome = nome;
      this.equipe = equipe;
    }
  
    gerarId() {
      // Lógica para gerar um ID único, por exemplo:
      return Math.random().toString(36).substr(2, 9);
    }
  }
  