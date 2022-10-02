import { createGlobalStyle, DefaultTheme, GlobalStyleComponent } from "styled-components"

const GlobalStyles: GlobalStyleComponent<{}, DefaultTheme> = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing:border-box;
        font-family: 'Open Sans', sans-serif; 
        font-size: 62.5%;
    },
    
    body{
        width: 100vw;
        height: 100vh;
        overflow-x: hidden;
    }
`

export default GlobalStyles;