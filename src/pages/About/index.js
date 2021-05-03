import React from 'react';
import Header from '../../components/Header';

import { Container, QuemSomos } from './styles';

export default function About() {
  return (
    <Container>
      <Header />
      <div>
        <h3> Objetivo e Motivações</h3>
        <p>
          Mesmo com todos os avanços em pleno século XXI, a sociedade continua sendo em sua maior parte machista. Tendo em vista o desafio "Ética e Marketing para o público feminino", resolvemos abordar a questão de como as mulheres, antes de comprar algum produto ou serviço, podem saber se a empresa/marca por trás do mesmo tem uma boa representatividade de mulheres em propagandas. Portanto, temos como propósito trazer informações relacionadas as propagandas das marcas (se têm diversidade, inclusão ou se são sexistas, machistas, objetificam a mulher...) e como é o engajamento delas em prol das causas femininas.
        </p>
        <p>
          Nosso objetivo é prover, para as mulheres, de maneira simplificada, uma plataforma que reúna empresas/marcas e suas respectivas reputações com propagandas relacionadas a mulheres, além de notícias que corroborem com as avaliações.
        </p>
        <p>
          Uma das principais inspirações para o desenvolvimento da nossa solução foi o site https://modalivre.org.br/. Uma plataforma de funcionamento semelhante, que incentiva o consumidor a comprar roupas de maneira consciente ao avalia marcas quanto ao emprego de trabalho escravo em suas produções e suas ações para evitar que isso aconteça.
        </p>

        <h3> Que tecnologias vocês usaram no hackathon?</h3>
        <p>Para esse hackathon desenvolvemos 3 aplicações integradas para resolver o problema proposto.
Optamos por separar bem as funções entre os 3:</p>
        <ul>
          <li>
            <p>
              Frontend utilizando javascript com ReactJS para desenvolver as interfaces com as usuárias.
            </p>
          </li>
          <li>
            <p>
              Backend, utilizando javascript com NodeJS e uma base de dados não relacional MongoDB, para armazenar e prover os dados sobre as empresas e notícias.
          </p>
          </li>
        <li>
          <p>
            Web Crawler, utilizando python para obter e analisar dados de sites de notícias
          </p>
        </li>
        </ul>

      <h3> Por que vocês escolheram essas tecnologias?</h3>
      <p>
        No frontend e backend utilizamos as tecnologias anteriormente citadas por já serem de conhecimento prévio de algumas integrantes da equipe. Já para o crawler foi escolhido o python pois pareceu a opção com a menor curva de aprendizado para atingir o objetivo proposto para ele.
        </p>

      <h3> Qual foi a maior desafio (da parte de desenvolvimento) durante o hackathon? Como vocês resolveram?</h3>
      <p>
        Houveram algumas complicações relacionadas ao desenvolvimento do Crawler. Localizar a posição correta das tags e dos links foi um desafio, pois para cada site existe uma estrutura diferente. Para resolver esse desafio foi necessário uma análise detalhada do código de cada página, para assim, localizar corretamente as partes necessárias. Além disso, o curto tempo para desenvolver tamanha solução foi restritívo tendo que nos limitar a fazer um MVP.
        </p>

      <h3> Qual foi o maior aprendizado (ou uma parte do código que vocês achem massa e estão orgulhosas)?</h3>
      <p>
        Ficamos orgulhosas de aprender a desenvolver um crawler, pois não tínhamos experiência, e com a qualidade em geral da solução entregue.
        </p>

      <h3> Se vocês fossem participar de um hackathon semana que vem, fariam algo de diferente com relação às escolhas das tecnologias utilizadas?</h3>
      <p>Não, pois acreditamos que as tecnologias nos proporcionaram um grande aprendizado, além de entregar uma boa solução.</p>

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
    </Container >

  )
}
