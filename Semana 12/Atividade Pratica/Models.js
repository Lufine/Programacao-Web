/*
Curso de Engenharia de Software - UniEVANGÉLICA 
Disciplina de Programação Web 
Dev: Luiz Filipe Neuwirth
DATA: 19/05/2023 
*/

class Jogador {
    constructor(id, nome, equipeId) {
      this.id = id;
      this.nome = nome;
      this.equipeId = equipeId;
    }
  }
  
  class Equipe {
    constructor(id, nome, jogadoresIds) {
      this.id = id;
      this.nome = nome;
      this.jogadoresIds = jogadoresIds;
    }
  }
  
  // Exemplo de uso dos modelos
  const jogadores = [
    new Jogador(1, "Aspas", 1),
    new Jogador(2, "Sacy", 2),
    new Jogador(3, "Less", 1),
    new Jogador(4, "Pancada", 2),
  ];
  
  const equipes = [
    new Equipe(1, "Loud", [1, 3]),
    new Equipe(2, "Sentinels", [2, 4]),
  ];
  
  function findById(id) {
    const jogador = jogadores.find((jogador) => jogador.id === id);
    if (jogador) {
      const equipe = equipes.find((equipe) => equipe.id === jogador.equipeId);
      const jogadoresDaEquipe = jogadores.filter(
        (jogador) => jogador.equipeId === equipe.id
      );
  
      return {
        jogador,
        equipe,
        jogadoresDaEquipe,
      };
    }
    return null;
  }
  
  // Exemplo de uso do findById
  const jogadorEncontrado = findById(2);
  console.log(jogadorEncontrado);
  