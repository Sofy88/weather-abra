import React from 'react';
import styled from "styled-components"
import "./App.css";


interface Props {

}
const StyledDiv = styled.div<Props>`
  ${props=> {console.log(props);return "";}}
  width: 500px;
  height: 500px;
  background-color: ${({theme}) => theme.primary};
`

const App: React.FC= () => {
  return  <>
  <StyledDiv></StyledDiv>
  </>;
};

export default App;
