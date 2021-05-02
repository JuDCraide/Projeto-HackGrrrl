import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';

import { Container } from './styles';
import api from '../../services/api';

export default function About() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  async function handleSend(e){
    e.preventDefault();

   await api.post(`/contacts/`, {
      name, email, message
    });
  }

  return (
    <Container>
      <Header />
      <div>
        <h3>Contact</h3>
        <p>Se você é uma empresa que deseja receber o selo, entre em contato para negociar uma consultoria de marketing inclusivo.</p>
        <form>
          <label htmlFor="nome">Nome da Empresa</label>
          <input type="text" value={name} onChange={e => setName(e.target.value)} id="nome" required placeholder="Seu Nome Completo" />

          <label htmlFor="email">Email</label>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} id="email" required placeholder="seuemail@dominio.com" />

          <label htmlFor="mensagem">Mensagem</label>
          <textarea cols="70" rows="10" value={message} onChange={e => setMessage(e.target.value)} id="mensagem" required placeholder="Mensagem"></textarea>

          <button type="submit" onClick={e => handleSend(e)} >Enviar</button>

        </form>
      </div>
    </Container>
  )
}
