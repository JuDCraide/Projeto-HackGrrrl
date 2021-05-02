import React from 'react';

import { ItemContainer, ListContainer } from './styles';

function NewsItem({ item }) {
  return <ItemContainer>
    <div>
      <div>
        <strong>{item.title}</strong>
        <span>{item.text} pontos</span>
      </div>
    </div>
    {'>'}
  </ItemContainer>;
};

function NewsList({ itens = [] }) {
  console.log(itens);
  return <ListContainer>
    {itens.map(item => (
      <NewsItem key={item.name} item={item} />
    ))}
  </ListContainer>
}

export default NewsList;
