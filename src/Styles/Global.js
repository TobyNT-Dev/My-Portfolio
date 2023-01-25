import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;

    //Midlertidige
    /* border: solid 1px grey; */
}
html, body {
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.onBackground};
}
#root {
    width: 100%;
    min-height: 100%;
    display: grid;
    grid-template-rows: auto 1fr auto;
}
`