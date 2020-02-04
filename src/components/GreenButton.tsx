import React from 'react'
import styled from 'styled-components'
// ______________________________________________________
//
type Props = {
  className?: string
}
// ______________________________________________________
//
const Component: React.FC<Props> = props => (
  <button className={props.className}>{props.children}</button>
)
// ______________________________________________________
//
const StyledComponent = styled(Component)`
  background-color: ${props => props.theme.colors.green};
`
// ______________________________________________________
//
export default StyledComponent
