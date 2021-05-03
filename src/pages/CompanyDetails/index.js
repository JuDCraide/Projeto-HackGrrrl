import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import { FaStar, FaRegStar } from 'react-icons/fa';

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
            {
              company.campanhas_direcionadas > 0 &&
              [...Array(company.campanhas_direcionadas)].map((e, i) =>
                <FaStar key={i} />
              )}
            {
              company.campanhas_direcionadas < 5 &&
              [...Array(5 - company.campanhas_direcionadas)].map((e, i) =>
                <FaRegStar key={i + 5} />
              )
            }
          </li>
          <li>
            <strong>Inclusão de diferentes corpos de mulheres:</strong>
            {
              company.inclusao_corpos > 0 &&
              [...Array(company.inclusao_corpos)].map((e, i) =>
                <FaStar key={i} />
              )
            }
            {
              company.inclusao_corpos < 5 &&
              [...Array(5 - company.inclusao_corpos)].map((e, i) =>
                <FaRegStar key={i + 5} />
              )
            }
          </li>
          <li>
            <strong>Inclusão racial de mulheres:</strong>
            {
              company.inclusao_racial > 0 &&
              [...Array(company.inclusao_racial)].map((e, i) =>
                <FaStar key={i} />
              )
            }
            {
              company.inclusao_racial < 5 &&
              [...Array(5 - company.inclusao_racial)].map((e, i) =>
                <FaRegStar key={i + 5} />
              )
            }
          </li>
          <li>
            <strong>Marcas que apoiam causas sociais de inclusão de gênero:</strong>

            {
              company.inclusao_genero > 0 &&
              [...Array(company.inclusao_genero)].map((e, i) =>
                <FaStar key={i} />
              )
            }
            {
              company.inclusao_genero < 5 &&
              [...Array(5 - company.inclusao_genero)].map((e, i) =>
                <FaRegStar key={i + 5} />
              )
            }
          </li>
          <li>
            <strong>Inclusão de mulheres com idades avançadas:</strong>

            {
              company.inclusao_idade > 0 &&
              [...Array(company.inclusao_idade)].map((e, i) =>
                <FaStar key={i} />
              )
            }
            {
              company.inclusao_idade < 5 &&
              [...Array(5 - company.inclusao_idade)].map((e, i) =>
                <FaRegStar key={i + 5} />
              )
            }
          </li>
          <li>
            <strong>Posicionamento da marca nas questões de gênero:</strong>
            {
              company.posicionamento > 0 &&
              [...Array(company.posicionamento)].map((e, i) =>
                <FaStar key={i} />
              )}
            {
              company.posicionamento < 5 &&
              [...Array(5 - company.posicionamento)].map((e, i) =>
                <FaRegStar key={i + 5} />
              )}
          </li>
        </ul>

      </div>
    </Container>

  )
}
