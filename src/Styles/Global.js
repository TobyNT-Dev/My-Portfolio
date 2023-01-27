import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

::-webkit-scrollbar {
    width: 8px;
    background-color:  ${(props) => props.theme.colors.background};
}
::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.secondary};
}
::-webkit-scrollbar-thumb {
    border-radius: 4px;
}

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
    font-family: 'Cabin', sans-serif;
}
#root {
    width: 100%;
    min-height: 100%;
    display: grid;
    grid-template-rows: auto 1fr auto;
}
`