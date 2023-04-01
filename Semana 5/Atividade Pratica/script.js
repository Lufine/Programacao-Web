import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Menu</h1>
      <ul>
        <li>
          <Link to="/about">Sobre</Link>
        </li>
        <li>
          <Link to="/form">Formulário</Link>
        </li>
        <li>
          <Link to="/tables">Tabelas</Link>
        </li>
        <li>
          <Link to="/arenas">Arenas</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
