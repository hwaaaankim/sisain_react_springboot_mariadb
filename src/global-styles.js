import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*, *:before, *:after {
    box-sizing: border-box;
    color: ${({ color }) => (color === "white" ? "black" : "white")};
  }
  html, body{
    height: 100%;
    font-family: 'Noto Sans KR', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${({ color }) => color};
    font-size: 16px;
    margin:0;
}
`;
