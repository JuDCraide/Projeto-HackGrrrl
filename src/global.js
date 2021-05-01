import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }
    body {
        background-color: #f3f3f3;
        -webkit-font-font-smoothing: antialiased;
    }
    body,
    input,
    button,
    textarea {
        font-family: 'Roboto', Arial, sans-serif;
        font-size: 16px;
        color: #212121;
    }

    button {
        cursor: pointer;
    }
`;
