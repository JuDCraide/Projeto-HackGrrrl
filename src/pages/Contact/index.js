import React from 'react';
import Header from '../../components/Header';

import { Container } from './styles';

export default function About() {
  return (
    <Container>
      <Header />
      <div>
        <h3>Contact</h3>
        <p>Se você é uma empresa que deseja receber o selo, entre em contato para negociar uma consultoria de marketing inclusivo.</p>
        <form>
          <label for="nome">Nome e Sobrenome</label>
          <input type="text" id="nome" required placeholder="Seu Nome Completo" />

          <label for="email">Email</label>
          <input type="email" id="email" required placeholder="seuemail@dominio.com" />

          <label for="mensagem">Mensagem</label>
          <textarea cols="70" rows="10" id="mensagem" required placeholder="Mensagem"></textarea>

          <button type="submit">Enviar</button>

        </form>
      </div>
    </Container>
  )
}
