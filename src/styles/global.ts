import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*,
*:before,
*:after {
  box-sizing: inherit;
  font-family: "Montserrat", sans-serif;
  font-weight: normal;
  font-style: normal;
}
body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
ol,
ul {
  margin: 0;
  padding: 0;
}
ol,
ul {
  list-style: none;
}

`;
