import React from 'react';
import Header from '../../components/Header';
import ListItem from '../../components/ListItem';

import { Container } from './styles';

export default function Landing() {

  const companies=[{name:'Marca 1', score:2190},{name:'Marca 2', score:-3343},{name:'Marca 3', score:23242}]

  return (
    <Container>
      <Header/>
      <ListItem itens={companies}/>
    </Container>

  )
}
