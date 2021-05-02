import React from 'react';
import { NavLink } from 'react-router-dom';

import { Container } from './styles';

function Header() {
  return <Container>
    <div>
      <h1>Propaganda mulheres</h1>

      <ul>
        <li>
          <NavLink activeStyle={{
            fontWeight: 700,
            textDecoration: "underline"
          }} to="/landing">Empresas</NavLink>
        </li>
        <li>
          <NavLink
            activeStyle={{
              fontWeight: 700,
              textDecoration: "underline"
            }}
            to="/news"
          >Notícias</NavLink>
        </li>
        <li>
          <NavLink
            activeStyle={{
              fontWeight: 700,
              textDecoration: "underline"
            }}
            to="/about"
          >Sobre</NavLink>
        </li>
      </ul>
    </div>
  </Container>;
};

export default Header;
