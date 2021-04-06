import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    /* box-sizing: border-box; */
    /* Helvetica font is paid */
    font-family: 'Roboto', sans-serif;
}
html, body{
    overflow-x: hidden;
    background-color: #509995;
}
`;

export default GlobalStyle;
