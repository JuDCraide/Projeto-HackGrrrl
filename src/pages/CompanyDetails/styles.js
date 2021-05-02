import styled from 'styled-components';

 '../../assets/emily.jpeg';

export const Container = styled.div`
    flex: 1;
    display: flex;
    align-items: flex-start;
    justify-content: space-evenly;
    flex-direction: column;

    > div{
      margin: auto;
      padding: 20px;
      width: 100%;
      max-width: 900px;
    }

    h3{
      font-size: 48px;
      padding: 24px 0 8px;
      font-weight:700;
    }
    h4{
      font-size: 24px;
      font-weight:400;
      padding-bottom: 32px;
    }

    p{
      color: #595959;
      font-size: 18px;
      line-height:24px;
      font-weight: 300;
    }

`;
