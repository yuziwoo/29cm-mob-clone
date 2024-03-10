import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  appearance: none;

  // Device Setting
  -webkit-text-size-adjust: none;
  -webkit-tap-highlight-color: transparent;
}

* {
  line-height: ${theme.lineHeight.BASIC};
  font-weight: 400;
}

html, body {
  min-height: 100%;
}

body {
  font-family: ${theme.fontFamily.INTER};
  color: ${theme.color.BLACK};
  width: 100%;
  overflow-x: hidden;
  word-break: keep-all;
  overflow-wrap: break-word;
}

ol, ul, li {
  list-style: none;
}

table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td {
  border-collapse: collapse;
  border-spacing: 0;
  border: 0;
  outline: 0;
  background: transparent;
  vretical-align: center
}

a,
a:link,
a:hover,
a:active,
a:visited {
  color: inherit;
  text-decoration: none;
}

input,
select,
textarea,
button {
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  font-family: inherit;
  font-size: inherit;
  vertical-align: middle;
  border-radius: 0;
}

input:disabled,
button:disabled {
  cursor: not-allowed;
}

caption {
  visibility: hidden;
  width: 0;
  height: 0;
  font-size: 0;
  line-height: 0;
}

figure {
  line-height: 0;
}

blockquote,
q {
  quotes: none;
}

blockquote:after,
blockquote:before,
q:after,
q:before {
  content: '';
  content: none;
}

img {
  user-select: none;
  -webkit-user-drag: none;
}

.hidden {
  position: absolute;
  overflow: hidden;
  width: 1px;
  height: 1px;
  margin: 0;
  padding: 0;
  border: 0;
  white-space: nowrap;
  clip: rect(1px, 1px, 1px, 1px);
  -webkit-clip-path: inset(50%);
  clip-path: inset(50%);
}

*::selection {
  background-color: ${theme.color.SELECTION_BG};
  color: white; ${theme.color.SELECTION_COLOR};
}

:root {
  font-size: ${theme.size.PRIMARY_FONT_SIZE};
}

@media screen and (max-width: ${theme.size.MAX_WIDTH}) {
  :root {
    font-size: ${theme.size.VIEWPORT_FONT_SIZE};
  }
}

`;

export default GlobalStyle;
