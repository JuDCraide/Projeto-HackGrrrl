import styled from 'styled-components';

export const ItemContainer = styled.a`
  background-color: #fff;
  height: 140px;
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
    flex:1;

    div {
      padding-right: 20px;
      display:flex;
      flex-direction:column;
    }
  }

  strong{
    font-size: 24px;
    padding-bottom:8px;
  }

  span {
    font-size:18px;
    overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-line-clamp: 2;
   -webkit-box-orient: vertical;
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
  padding: 20px;
`;
