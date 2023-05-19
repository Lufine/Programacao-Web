/*
Curso de Engenharia de Software - UniEVANGÉLICA 
Disciplina de Programação Web 
Dev: Luiz Filipe Neuwirth
DATA: 19/05/2023 
*/

// Criando instâncias das entidades
const jogador1 = new Jogador("Aspas");
const jogador2 = new Jogador("Sacy");

const equipe1 = new Equipe("Loud");
const equipe2 = new Equipe("Sentinels");

const competicao1 = new Competicao("Valorant Champions Tour: Liga das Américas", "2023-06-01");
const competicao2 = new Competicao("Valorant Champions", "2023-07-01");

const patrocinador1 = new Patrocinador("Fusion");
const patrocinador2 = new Patrocinador("Heineken");

// Estabelecendo relacionamentos
jogador1.ingressarEquipe(equipe1);
jogador2.ingressarEquipe(equipe2);

equipe1.participarCompeticao(competicao1);
equipe2.participarCompeticao(competicao1);
equipe2.participarCompeticao(competicao2);

equipe1.adicionarPatrocinador(patrocinador1);
equipe2.adicionarPatrocinador(patrocinador1);
competicao1.definirPatrocinador(patrocinador2);

// Exemplo de uso
console.log(jogador1.equipe.nome); // Saída: "Loud"
console.log(equipe1.jogadores.length); // Saída: 1
console.log(competicao1.participantes.length); // Saída: 2
console.log(equipe2.patrocinadores[0].nome); // Saída: "Fusion"
console.log(patrocinador2.competicaoAssociada.nome); // Saída: "Valorant Champions Tour: Liga das Américas"
