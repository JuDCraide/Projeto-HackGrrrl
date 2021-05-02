import React from 'react';
import Header from '../../components/Header';
import ListItem from '../../components/ListItem';

import { Container } from './styles';

export default function Landing() {

  const companies=[
    {id: 1, name:'Marca 1', score:2190},
    {id: 2, name:'Marca 2', score:-3343},
    {id: 3, name:'Marca 3', score:23242},
    {id: 4, name:'Marca 4', score:2190},
    {id: 5, name:'Marca 5', score:-3343},
    {id: 6, name:'Marca 6', score:23242}
  ];

  return (
    <Container>
      <Header/>
      <ListItem itens={companies}/>
    </Container>

  )
}
