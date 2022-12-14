import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
        padding: 20px 40px;
        font-family: 'Oepn Sans Condensed', sans-serif;

        @media screen and (max-width: 800px) {
            padding: 10px
        }
    }

    a {
        text-decoration: none;
        color: #000000;
    }

    * {
        box-sizing: border-box;
    }
`;
