import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    html, body {
        margin: 0px !important;
    }

    h1, h2, h3, p, a {
        font-family: 'Armata', sans-serif;
        color: black;
    }

    a:link {
        text-decoration: none !important; 
        -webkit-text-decoration-line: none !important;
    }

    a:hover { 
        text-decoration: none !important;
        -webkit-text-decoration-line: none !important;
    }

    a:active { 
        text-decoration: none !important; 
        -webkit-text-decoration-line: none !important;
    }

    a:visited { 
        text-decoration: none !important; 
        -webkit-text-decoration-line: none !important;
    }
`
