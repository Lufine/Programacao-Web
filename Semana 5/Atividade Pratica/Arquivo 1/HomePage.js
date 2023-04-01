/*
Curso de Engenharia de Software - UniEVANGÉLICA</h1>
Disciplina de Programação Web
DATA: 17/03/2023
Dev: Luiz Filipe - 2111287
*/

import React from 'react';
import Layout from '../components/Layout';

function HomePage() {
  return (
    <Layout>
      <div className="jumbotron">
        <h1 className="display-4">Menu</h1>
      </div>
      <div className="container">
        <div className="title">
          <h2>E-Sports</h2>
        </div>
        <div className="geral">
          <p>Uma das principais tendências dos jogos digitais nos últimos anos são os eSports, competições de alto nível que atraem multidões para acompanhar partidas online e lotam estádios e arenas esportivas no Brasil e no mundo.</p>
          <p>E-Sports são competições disputadas em games eletrônicos em que os jogadores atuam como atletas profissionais de esportes tradicionais e são assistidos por uma audiência presencial e/ou online, através de diversas plataformas de stream online ou TV.</p>
          <p>Os gêneros de jogos mais comuns associados ao esporte eletrônico são os de estratégia em tempo real (RTS), tiro em primeira pessoa (FPS), luta, esportes simulados, cartas e arenas de batalha (MOBA). Franquias populares de esporte eletrônico incluem League of Legends, Dota 2, Counter-Strike: Global Offensive, Fortnite, Overwatch e Hearthstone.</p>
        </div>
      </div>
    </Layout>
  );
}

export default HomePage;
