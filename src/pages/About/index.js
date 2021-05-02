import React from 'react';
import Header from '../../components/Header';

import { Container, QuemSomos } from './styles';

export default function About() {
  return (
    <Container>
      <Header />
      <div>
        <h3> Objetivo e Motivações</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula quam at orci semper auctor. </p>
        <h3> Que tecnologias vocês usaram no hackathon?</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula quam at orci semper auctor. </p>
        <h3> Por que vocês escolheram essas tecnologias?</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula quam at orci semper auctor. </p>
        <h3> Qual foi a maior desafio (da parte de desenvolvimento) durante o hackathon? Como vocês resolveram?</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula quam at orci semper auctor. </p>
        <h3> Qual foi o maior aprendizado (ou uma parte do código que vocês achem massa e estão orgulhosas)?</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula quam at orci semper auctor. </p>
        <h3> Se vocês fossem participar de um hackathon semana que vem, fariam algo de diferente com relação às escolhas das tecnologias utilizadas?</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula quam at orci semper auctor. </p>

        <QuemSomos>
          <h3>Quem somos</h3>
          <p >
            Conheça a comunidade por trás da iniciativa
          </p>
          <div>
            <div>
              <div id="ana"></div>
              <h4>Ana Alves</h4>
              <p>Desenvolvedora</p>
            </div>
            <div>
              <div id="bruna"></div>
              <h4>Bruna Romero</h4>
              <p>Design UX</p>
            </div>
            <div>
              <div id="camila"></div>
              <h4>Camila Garrucho</h4>
              <p>Marketing</p>
            </div>
            <div>
              <div id="emily"></div>
              <h4>Emilly Santos</h4>
              <p>Marketing</p>
            </div>
            <div>
              <div id="julia"></div>
              <h4>Júlia D. Craide</h4>
              <p>Desenvolvedora</p>
            </div>
          </div>
        </QuemSomos>
      </div>
    </Container>

  )
}
