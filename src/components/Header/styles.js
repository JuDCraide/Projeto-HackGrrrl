import styled from 'styled-components';

export const Container = styled.header`
  background-color: #fff;
  height: 120px;
  width:100%;
  display: flex;
  align-items: center;
  justify-content:center;


  div{
    height:100%;
    width:100%;
    max-width:900px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 0 36px;
  }

  h1{
    flex:3;
    text-align: center;
    min-width: max-content;
  }

  ul{
    display:flex;
    flex:4;
    justify-content:space-around;
  }

  li{
    list-style-type:none;
    padding: 0px 10px;
    a{
      color: inherit;
      text-decoration: none;
      }
  }
`;
