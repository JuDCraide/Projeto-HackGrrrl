import React from 'react';
import {FaChevronRight} from 'react-icons/fa';

import { ItemContainer, ListContainer } from './styles';

function NewsItem({ item }) {
  return <ItemContainer  target="_blank" href={item.link}>
    <div>
      <div>
        <strong>{item.title}</strong>
        <span>{item.text} pontos</span>
      </div>
    </div>
    <FaChevronRight size={18}/>
  </ItemContainer>;
};

function NewsList({ itens = [] }) {
  console.log(itens);
  return <ListContainer>
    {itens.map(item => (
      <NewsItem key={item._id} item={item} />
    ))}
  </ListContainer>
}

export default NewsList;
