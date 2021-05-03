import React from 'react';
import { FaChevronRight, FaTrophy, FaTimes } from 'react-icons/fa';

import { ItemContainer, ListContainer } from './styles';

function Item({ item }) {
  return <ItemContainer to={`companies/${item._id}`}>
    <div>
      {item.score > 4 ?
        <FaTrophy size={48} /> :
        <FaTimes size={48} />
      }
      <div>
        <strong>{item.name}</strong>
        <span>{item.score} pontos</span>
      </div>
    </div>
    <FaChevronRight size={18} />
  </ItemContainer>;
};

function ListItem({ itens = [] }) {
  console.log(itens);
  return <ListContainer>
    {itens.map(item => (
      <Item key={item._id} item={item} />
    ))}
  </ListContainer>
}

export default ListItem;
