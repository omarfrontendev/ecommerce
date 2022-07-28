import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
body {
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.color}
}
.orders__page,
.ecommerce__charts,
.earning__box,
.earning,
.theme_settings,
.sidebar > div {
  background-color: ${({ theme }) => theme.sideBGK}
}
.E-line__chart-text p,
.earning__amount p,
.earning__content span,
.theme__header button svg,
.theme-box,
.theme-box > p,
.sidebar .close__btn svg,
.sidebar__header .logo {
  color: ${({ theme }) => theme.color}
}
.user__button p,
.earning__box > p,
.earning__content p,
.sidebar__menu p {
  color: ${({ theme }) => theme.gray__color}
}
.right__chart-header p,
.left__chart > p,
.sidebar__links a {
  color: ${({ theme }) => theme.links__color}
}
`

export  const lightTheme = {
  body: '#bbeaf012',
  color: '#000',
  sideBGK: '#FFF',
  gray__color: '#afafaf',
  links__color: '#666'
};

export const darkTheme = {
  body: '#23272c',
  color: '#FFF',
  sideBGK: '#33373E',
  gray__color: '#afafaf',
  links__color: '#c5c5c5',
};