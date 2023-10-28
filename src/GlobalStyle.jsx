import { createGlobalStyle } from "styled-components";
import DefaultTheme from "./components/DefaultTheme";

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: "Raleway", serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  --section-background-color: linear-gradient(
    to top left,
    #131941,
    #0e314a,
    #131941,
    #0e314a

  );
  background-image:  var(--section-background-color);
  //background-image: linear-gradient(to left, rgb(27 20 41), rgb(20 15 35));
}  
/* 
#1E2761,
    #153247,
    #1E2761,
    #153247 */

html {

  --imp-text-color: ${DefaultTheme.colors.textColor};
}

.purple {
  color: var(--imp-text-color) !important;
}

button:focus {
  box-shadow: none !important;
}


/*Scrollbar   */

::-webkit-scrollbar {
  width: 7px;
}

/* Track */
::-webkit-scrollbar-track {
  background: rgb(7, 9, 49);
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgba(178, 121, 216, 0.959);
  border-radius: 12px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgba(222, 130, 235, 0.911);
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

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

/* .App-link {
  color: #61dafb;
} */

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}




`;
