import React from 'react';
import Header from '../../components/Header';
import NewsList from '../../components/NewsList'

import { Container } from './styles';

export default function News() {

  const news=[
    {title:'News 1', link:'http://globo.com', text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula quam at orci semper auctor. Pellentesque laoreet enim vitae vehicula viverra. Nulla tincidunt molestie tellus sit amet viverra. Nulla rutrum nec eros vitae finibus. Nunc sit amet luctus ante, sed malesuada elit. Vestibulum vitae ante eget diam dictum efficitur in tristique leo. Aliquam vel quam at eros bibendum bibendum. Aliquam erat volutpat. Aenean vulputate semper nisi, in dictum dui commodo eget. Aenean ut ante id nibh vulputate semper non ut diam.'},
    {title:'News 2', link:'http://globo.com', text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula quam at orci semper auctor. Pellentesque laoreet enim vitae vehicula viverra. Nulla tincidunt molestie tellus sit amet viverra. Nulla rutrum nec eros vitae finibus. Nunc sit amet luctus ante, sed malesuada elit. Vestibulum vitae ante eget diam dictum efficitur in tristique leo. Aliquam vel quam at eros bibendum bibendum. Aliquam erat volutpat. Aenean vulputate semper nisi, in dictum dui commodo eget. Aenean ut ante id nibh vulputate semper non ut diam.'},
    {title:'News 3', link:'http://globo.com', text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula quam at orci semper auctor. Pellentesque laoreet enim vitae vehicula viverra. Nulla tincidunt molestie tellus sit amet viverra. Nulla rutrum nec eros vitae finibus. Nunc sit amet luctus ante, sed malesuada elit. Vestibulum vitae ante eget diam dictum efficitur in tristique leo. Aliquam vel quam at eros bibendum bibendum. Aliquam erat volutpat. Aenean vulputate semper nisi, in dictum dui commodo eget. Aenean ut ante id nibh vulputate semper non ut diam.'},
    {title:'News 4', link:'http://globo.com', text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula quam at orci semper auctor. Pellentesque laoreet enim vitae vehicula viverra. Nulla tincidunt molestie tellus sit amet viverra. Nulla rutrum nec eros vitae finibus. Nunc sit amet luctus ante, sed malesuada elit. Vestibulum vitae ante eget diam dictum efficitur in tristique leo. Aliquam vel quam at eros bibendum bibendum. Aliquam erat volutpat. Aenean vulputate semper nisi, in dictum dui commodo eget. Aenean ut ante id nibh vulputate semper non ut diam.'},
    {title:'News 5', link:'http://globo.com', text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula quam at orci semper auctor. Pellentesque laoreet enim vitae vehicula viverra. Nulla tincidunt molestie tellus sit amet viverra. Nulla rutrum nec eros vitae finibus. Nunc sit amet luctus ante, sed malesuada elit. Vestibulum vitae ante eget diam dictum efficitur in tristique leo. Aliquam vel quam at eros bibendum bibendum. Aliquam erat volutpat. Aenean vulputate semper nisi, in dictum dui commodo eget. Aenean ut ante id nibh vulputate semper non ut diam.'},
  ]

  return (
    <Container>
      <Header/>
      <NewsList itens={news}/>
    </Container>

  )
}
