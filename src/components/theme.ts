import 'styled-components'
// ______________________________________________________
//
export const theme = {
  colors: {
    red: '#f00',
    green: '#0f0',
    blue: '#00f'
  },
  layout: {
    width: 960
  }
} as const
// ______________________________________________________
//
type AppTheme = typeof theme
// ______________________________________________________
//
declare module 'styled-components' {
  interface DefaultTheme extends AppTheme {}
}
