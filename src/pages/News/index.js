import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import NewsList from '../../components/NewsList'

import { Container } from './styles';
import api from '../../services/api';

export default function News() {

  const [news, setNews] = useState([]);

  useEffect(() => {
    api.get(`/news/`)
      .then(res => {
        setNews(res.data)
        console.log(res.data);
      });
  }, []);

  return (
    <Container>
      <Header/>
      <NewsList itens={news}/>
    </Container>

  )
}
