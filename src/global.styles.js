import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

body{
    background-color: rgb(244, 244, 244);

    font-family: 'Open Sans Condensed';
    padding: 20px 40px;

    @media screen and (max-width: 800px) {
        padding: 10px;
    }
}

a{
    text-decoration: none;
    color: black;
}
* {
    box-sizing: border-box;
}

`;
