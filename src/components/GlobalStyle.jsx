import { createGlobalStyle } from "styled-components";
import DefaultTheme from "./DefaultTheme";

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: "Raleway", serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-image: linear-gradient(
    to top left,
    #1E2761,
    #153247,
    #1E2761,
    #153247 
  );
}  

.textColor {
  color: ${DefaultTheme.colors.teal};
}

/*Scrollbar   */

::-webkit-scrollbar {
  width: 7px;
}

/* Track */
::-webkit-scrollbar-track {
  background: ${DefaultTheme.colors.SchiavaBlue};
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: ${DefaultTheme.colors.teal};
  border-radius: 12px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: ${DefaultTheme.colors.teal};
  border-radius: 12px;
}
.App {
  text-align: center;
}

.App-logo {
  height: 40vmin;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}



@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
`;
