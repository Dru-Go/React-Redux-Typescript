import {createGlobalStyle} from 'styled-components';
import { primaryFont } from './typography'
import colors from './colors'
import { normalize} from 'polished'


export const GlobalStyle = createGlobalStyle`
${normalize()}
html {
    font-size: 16px;
    box-sizing: border-box;
}

*, *:before, *:after {
    box-sizing: inherit;
}

body {
    background-color: ${colors.primary_400};
    margin: 0;
    font-family: ${primaryFont};
}

`;