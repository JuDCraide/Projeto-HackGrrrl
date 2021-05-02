import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';

import { Container } from './styles';
import api from '../../services/api';

export default function About(props) {

  const [company, setCompany] = useState([]);

  const id = props.match.params.id;

  useEffect(() => {
    api.get(`/companies/${id}`)
      .then(res => {
        setCompany(res.data)
      });
  }, []);

  return (
    <Container>
      <Header />
      <div>
        <h3>{company.name}</h3>
        <h4>{company.score}</h4>

        <p>{company.details}</p>

      </div>
    </Container>

  )
}
