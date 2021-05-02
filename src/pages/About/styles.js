import styled from 'styled-components';

import Julia from '../../assets/julia.jpeg';
import Ana from '../../assets/ana.jpeg';
import Bruna from '../../assets/bruna.jpeg';
import Camila from '../../assets/camila.jpeg';
import Emily from '../../assets/emily.jpeg';

export const Container = styled.div`
    flex: 1;
    display: flex;
    align-items: flex-start;
    justify-content: space-evenly;
    flex-direction: column;

    > div{
      margin: 20px auto;
      width: 100%;
      max-width: 900px;
    }


    h3{
      font-size: 24px;
      padding: 24px 0 8px;
    }

    p{
      color: #595959;
      font-size: 18px;
      font-weight: 300;
    }

`;

export const QuemSomos = styled.section`
  div {
    padding-top:12px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  div div {
  display: flex;
  flex-direction: column;
  margin: 8px 16px;
}

  div div div {
  height: 200px;
  width: 200px;
  margin: 0 auto;
  border-radius: 50%;

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

#julia {
  background-image: url(${Julia});
}
#ana {
  background-image: url(${Ana});
}
#bruna {
  background-image: url(${Bruna});
}
#camila {
  background-image: url(${Camila});
}
#emily {
  background-image: url(${Emily});
}

@media screen and (max-width: 950px) {
  div div div{
    height: 100px;
    width: 100px;
  }
}


h4{
  font-size: 20px;
  margin: 8px 0;
  text-align:center;
}

div div p{
  text-align:center;
}


`;
