import styled from 'styled-components';

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
    font-size: 24px;
    padding: 24px 0 8px;
  }

  p{
    color: #595959;
    font-size: 18px;
    font-weight: 300;
    line-height: 28px;
  }

  form{
    padding-top: 20px;
  }

  form label, legend{
    display: block;
    font-size: 18px;
    margin-bottom: 10px;
    color: #595959;
    font-size: 18px;
    font-weight: 300;
  }

  input, textarea{
    display: block;
    margin-bottom: 20px;
    padding: 16px 25px;
    width: 100%;
    border-radius: 10px;
    border: 1px solid #212121;
    resize: vertical;
  }

  .checkbox{
    margin: 20px 0;
  }

  button {
    width: 40%;
    padding: 15px 0;
    background:#212121;
    color:#FFF;
    border-radius: 10px;
    font-weight: bold;
    font-size: 18px;
    border: none;
    transition: 1s;
    cursor: pointer;
  }

  button:hover{
    opacity: 0.95;
  }
`;
