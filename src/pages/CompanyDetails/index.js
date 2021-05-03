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
        <h4>{company.score} nota média</h4>

        <p>{company.details}</p>

        <ul>
          <li>
            <strong>Campanhas direcionadas para mulheres:</strong>
            <span>{company.campanhas_direcionadas}</span>
          </li>
          <li>
            <strong>Inclusão de diferentes corpos de mulheres:</strong>
            <span>{company.inclusao_corpos}</span>
          </li>
          <li>
            <strong>Inclusão racial de mulheres:</strong>
            <span>{company.inclusao_racial}</span>
          </li>
          <li>
            <strong>Marcas que apoiam causas sociais de inclusão de gênero:</strong>
            <span>{company.inclusao_genero}</span>
          </li>
          <li>
            <strong>Inclusão de mulheres com idades avançadas:</strong>
            <span>{company.inclusao_idade}</span>
          </li>
          <li>
            <strong>Posicionamento da marca nas questões de gênero:</strong>
            <span>{company.posicionamento}</span>
          </li>
        </ul>

      </div>
    </Container>

  )
}
