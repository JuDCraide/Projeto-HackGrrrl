import styled from 'styled-components';
import {Link} from 'react-router-dom'

export const ItemContainer = styled(Link)`
  background-color: #fff;
  height: 120px;
  width:100%;
  display: flex;
  align-items: center;
  justify-content:space-between;
  padding: 30px;
  border-radius:10px;
  color: inherit;
  text-decoration: none;

  div{
    display: flex;
    flex: 1;
    align-items:flex-start;
    justify-content:center;

    svg{
      width:50px;
    }

    div {
      padding-left: 70px;
      display:flex;
      flex-direction:column;
    }
    svg + div {
      padding-left: 20px;
    }

  }

  strong{
    font-size: 24px;
    padding-bottom: 8px;
  }


  & + & {
    margin-top:20px;
  }
`;

export const ListContainer = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  max-width: 900px;
  margin: auto;
  padding: 20px 0;
`;
