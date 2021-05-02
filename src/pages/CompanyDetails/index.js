import React from 'react';
import Header from '../../components/Header';

import { Container, QuemSomos } from './styles';

export default function About() {

  const company = { name: 'Marca 1', score: 2190, details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula quam at orci semper auctor. Pellentesque laoreet enim vitae vehicula viverra. Nulla tincidunt molestie tellus sit amet viverra. Nulla rutrum nec eros vitae finibus. Nunc sit amet luctus ante, sed malesuada elit. Vestibulum vitae ante eget diam dictum efficitur in tristique leo. Aliquam vel quam at eros bibendum bibendum. Aliquam erat volutpat. Aenean vulputate semper nisi, in dictum dui commodo eget. Aenean ut ante id nibh vulputate semper non ut diam.  Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse egestas nisi non diam pretium egestas vel et mi. Nullam ac rhoncus mi, in faucibus quam. Donec vehicula nulla aliquet nisi accumsan scelerisque. Praesent aliquet semper tellus, et imperdiet nunc pharetra et. Praesent id posuere turpis. Nam ipsum quam, sollicitudin sit amet commodo et, cursus quis enim. Nulla vitae orci neque. Etiam commodo enim efficitur, tincidunt massa a, imperdiet risus. Nullam varius felis nisl, id bibendum ex maximus vitae.  Vivamus in eros varius, condimentum ante eget, ultrices magna. Sed sed diam est. Vestibulum quis fringilla nunc. Nunc quis mi quam. Vestibulum nec magna pellentesque, gravida velit ac, mollis erat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer tempor bibendum ante, eget vestibulum risus auctor vulputate. Nunc pellentesque justo id sapien ultricies tincidunt. Curabitur felis erat, tempor in ex in, luctus sollicitudin nibh. Quisque rutrum, diam ut bibendum cursus, metus felis porttitor sem, in vulputate nibh nibh in magna. Nullam commodo turpis id lacus mollis dapibus. Proin eget magna iaculis, commodo nunc id, maximus tortor. Nam viverra laoreet vulputate. Praesent rhoncus nibh sit amet ipsum accumsan molestie. Sed vel mi tempus, sagittis ligula a, rutrum arcu. Pellentesque sed leo lorem. Cras in est at tortor rutrum sagittis eget at arcu. Morbi aliquam sed lectus et porttitor. Mauris ut nunc urna. Aenean ullamcorper, diam a cursus iaculis, neque est tempor nibh, quis accumsan mi leo sit amet lectus. Nunc lacinia convallis tincidunt. Sed metus libero, consectetur in augue vitae, venenatis aliquet odio. Morbi egestas ligula libero, nec facilisis ex posuere et. Maecenas vel vestibulum tortor, ut sodales sem. Pellentesque quis sem ante. Suspendisse et orci eu orci tincidunt lobortis. Vestibulum auctor dapibus risus, non luctus ipsum condimentum at. Phasellus cursus, metus vel imperdiet sollicitudin, urna lorem pellentesque nisl, eu tristique magna libero ac tellus." }
  return (
    <Container>
      <Header />
      <div>
        <h3>{company.name}</h3>
        <h4>{company.score}</h4>

        <p>{company.details}</p>

      </div>
    </Container>

  )
}
