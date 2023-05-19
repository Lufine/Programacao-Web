class Jogador {
    constructor(nome) {
      this.nome = nome;
      this.equipe = null;
      this.competicoes = [];
    }
  
    ingressarEquipe(equipe) {
      this.equipe = equipe;
      equipe.adicionarJogador(this);
    }
  
    participarCompeticao(competicao) {
      this.competicoes.push(competicao);
      competicao.adicionarParticipante(this);
    }
  }
  
  class Equipe {
    constructor(nome) {
      this.nome = nome;
      this.jogadores = [];
      this.competicoes = [];
      this.patrocinadores = [];
    }
  
    adicionarJogador(jogador) {
      this.jogadores.push(jogador);
      jogador.equipe = this;
    }
  
    participarCompeticao(competicao) {
      this.competicoes.push(competicao);
      competicao.adicionarParticipante(this);
    }
  
    adicionarPatrocinador(patrocinador) {
      this.patrocinadores.push(patrocinador);
      patrocinador.apoiarEquipe(this);
    }
  }
  
  class Competicao {
    constructor(nome, data) {
      this.nome = nome;
      this.data = data;
      this.participantes = [];
      this.patrocinador = null;
    }
  
    adicionarParticipante(participante) {
      this.participantes.push(participante);
    }
  
    definirPatrocinador(patrocinador) {
      this.patrocinador = patrocinador;
      patrocinador.associarCompeticao(this);
    }
  }
  
  class Patrocinador {
    constructor(nome) {
      this.nome = nome;
      this.equipeApoiadas = [];
      this.competicaoAssociada = null;
    }
  
    apoiarEquipe(equipe) {
      this.equipeApoiadas.push(equipe);
    }
  
    associarCompeticao(competicao) {
      this.competicaoAssociada = competicao;
    }
  }
  