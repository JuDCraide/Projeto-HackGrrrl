import React from 'react';

import { ItemContainer, ListContainer } from './styles';

function Item({ item }) {
  return <ItemContainer>
    <div>
      Selo
      <div>
        <strong>{item.name}</strong>
        <span>{item.score} pontos</span>
      </div>
    </div>
    {'>'}
  </ItemContainer>;
};

function ListItem({ itens = [] }) {
  console.log(itens);
  return <ListContainer>
    {itens.map(item => (
      <Item key={item.name} item={item} />
    ))}
  </ListContainer>
}

export default ListItem;
