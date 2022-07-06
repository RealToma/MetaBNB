import React from "react";
import styled from "styled-components";
import { Box } from '@material-ui/core';

import Content from "./layouts/content/content";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";

function getLibrary(provider) {
  const library = new Web3Provider(provider);
  library.pollingInterval = 8000;
  return library;
}

function App() {
  return (
    <>
      <Web3ReactProvider getLibrary={getLibrary}>
        <StyledComponent>

          <Content />
        </StyledComponent>
      </Web3ReactProvider>
    </>
  );
}

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: white;
`
export default App;
