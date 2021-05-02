import styled from 'styled-components';

export const ItemContainer = styled.div`
  background-color: #fff;
  height: 120px;
  width:100%;
  display: flex;
  align-items: center;
  justify-content:space-between;
  padding: 30px;
  border-radius:10px;

  div{
    display: flex;

    div {
      padding-left: 20px;
      display:flex;
      flex-direction:column;
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
