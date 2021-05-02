import React from 'react';
import { NavLink } from 'react-router-dom';

import { Container } from './styles';
import Logo from '../../assets/adas.svg';

function Header() {
  return <Container>
    <div>
      <h1>Ada's Girls</h1>
      <img src={Logo} />

      <ul>
        <li>
          <NavLink activeStyle={{
            fontWeight: 700,
            textDecoration: "underline"
          }} to="/companies">Empresas</NavLink>
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
        <li>
          <NavLink
            activeStyle={{
              fontWeight: 700,
              textDecoration: "underline"
            }}
            to="/contact"
          >Contato</NavLink>
        </li>
      </ul>
    </div>
  </Container>;
};

export default Header;
