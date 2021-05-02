import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import ListItem from '../../components/ListItem';

import { Container } from './styles';
import api from '../../services/api';

export default function Landing() {

  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    api.get(`/companies/`)
      .then(res => {
        setCompanies(res.data)
        console.log(res.data);
      });
  }, []);

  return (
    <Container>
      <Header />
      <ListItem itens={companies} />
    </Container>

  )
}
