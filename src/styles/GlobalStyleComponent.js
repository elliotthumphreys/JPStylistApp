import { createGlobalStyle } from '@nfront/global-styles';

const GlobalStyleComponent = createGlobalStyle`
  @font-face {
    font-family: 'August';
    src: local('August') url(../fonts/AugustSans-55Regular.otf) format('truetype');
  }

  body {
      margin: 0;
  }

  * {
    font-family: 'August', serif;
  }
`;

export default GlobalStyleComponent;