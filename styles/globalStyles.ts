import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    html, body {
        margin: 0px !important;
    }

    h1, h2, h3, p {
        font-family: 'Ubuntu', sans-serif;
    }

    a:link {
        text-decoration: none !important; 
    }
    a:hover { 
        text-decoration: none !important;
    }
    a:active { 
        text-decoration: none !important; 
    }
    a:visited { 
        text-decoration: none !important; 
    }
`
