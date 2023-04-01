/*
Curso de Engenharia de Software - UniEVANGÉLICA</h1>
Disciplina de Programação Web
DATA: 17/03/2023
Dev: Luiz Filipe - 2111287
*/

import React from 'react';
import Navbar from './Navbar';

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  );
}

export default Layout;
