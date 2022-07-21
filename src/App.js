import React from "react";
import styled from "styled-components";
import { Box } from '@material-ui/core';
import Content from "./layouts/content/content";
import Footer from "./layouts/footer";



function App() {
  return (
    <>
      <StyledComponent>
        <Content />
        <Footer />
      </StyledComponent>
    </>
  );
}

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: white;
  flex-direction: column;
`
export default App;
