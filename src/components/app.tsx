import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme'
import RedButton from './RedButton'
import GreenButton from './GreenButton'
import BlueButton from './BlueButton'
// ______________________________________________________
//
const Component: React.FC = () => (
  <ThemeProvider theme={theme}>
    <RedButton>RedButton</RedButton>
    <GreenButton>GreenButton</GreenButton>
    <BlueButton>BlueButton</BlueButton>
  </ThemeProvider>
)
// ______________________________________________________
//
export default Component
