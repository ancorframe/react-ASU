import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box; /* gives padding and border from inside */
   scroll-behavior: smooth;
}
body {
  margin: 0;
  padding: 0;
  font-family: 'Overpass Mono','Nunito Sans';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family:'Overpass Mono','Nunito Sans', source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

p,
h1,
h2,
h3,
h4,
h5 {
  margin: 0;
  padding: 0;
}
`;
