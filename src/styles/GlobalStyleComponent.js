import { createGlobalStyle } from '@nfront/global-styles';

const GlobalStyleComponent = createGlobalStyle`
  body {
      margin: 0;
      background-color: black;
      font-display: block;
  }

  * {
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    user-drag: none;
    box-sizing: border-box;
  }

  *:before, *:after {
    box-sizing: inherit;
  }
`;

export default GlobalStyleComponent;