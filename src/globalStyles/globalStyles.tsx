import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
:root {
  --PortGreen: rgb(73, 171, 48);
  --PortWhite: rgb(225, 225, 225);
  --PortWhiteMuted: rgb(198, 198, 198);
  --toastify-font-family: 'Abel';
  --toastify-text-color-dark: var(--PortWhiteMuted);
}

* {
  box-sizing: border-box;
}

html,
body {
  background-color: #2d3436;
  background-image: linear-gradient(315deg, #2d3436 0%, #000000 74%);
  background-repeat: no-repeat;
  background-attachment: fixed;
  width: 100%;
  margin: 0px;
  scrollbar-color: rgb(83, 83, 83) #f1f1f1;
  scrollbar-width: thin;
}

body {
  min-height: 100vh;
  position: relative;
}

::-webkit-scrollbar {
  width: 8px;
  transition: all 0.5s ease;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: rgb(83, 83, 83);
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}


/*TYPOGRAPHY*/
h1,
h2,
h3,
h4,
h5,
h6,
a {
  font-family: "Jura";
}

p {
  font-family: "Abel";
}

@media (min-width: 320px) {
  a {
    font-size: 1.1rem;
  }
  p {
    font-size: 1.1rem;
  }

  h1 {
    font-size: 1.7rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  h3 {
    font-size: 1.3rem;
  }

  h4 {
    font-size: 1.1rem;
  }

  h5 {
    font-size: 0.9rem;
  }

  h6 {
    font-size: 0.7rem;
  }
}

@media (min-width: 992px) {
  a {
    font-size: 1.3rem;
  }
  p {
    font-size: 1.2rem;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.8rem;
  }

  h3 {
    font-size: 1.6rem;
  }

  h4 {
    font-size: 1.4rem;
  }

  h5 {
    font-size: 1.2rem;
  }

  h6 {
    font-size: 1rem;
  }
}
`