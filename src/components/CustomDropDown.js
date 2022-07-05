import { Box } from "@material-ui/core";
import React, { useState } from "react";
import styled from "styled-components";
import { FiPlus, FiMinus } from "react-icons/fi";

const CustomDropDown = ({ width, h_text, c_text }) => {
  const [flag_show, set_show] = useState(false);
  return (
    <Box display={"flex"} flexDirection={"column"} width={width} mt={'50px'}>
      <Box
        display={"flex"}
        width={"100%"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <HText>{h_text}</HText>
        <PlusBox
          onClick={() => {
            set_show(!flag_show);
          }}
        >
          {flag_show === false ? <FiPlus /> : <FiMinus color={"#6E5EE1"} />}
        </PlusBox>
      </Box>
      {flag_show === false ? <></> : <CText>{c_text}</CText>}
      <LineBox></LineBox>
    </Box>
  );
};

const HText = styled(Box)`
  display: flex;
  align-items: center;
  font-family: "Titillium Web";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 37px;
  display: flex;
  align-items: center;
  color: #000000;
`;

const CText = styled(Box)`
  display: flex;
  font-family: "Titillium Web";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  color: #2b2361;
  margin-top: 50px;
  transition: .5s;
`;

const PlusBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.8rem;
  font-weight: bold;
  color: #ee8b5e;
  cursor: pointer;
  /* &:hover{
        transition: .5s;
        transform: rotate(45deg);
    } */
`;

const LineBox = styled(Box)`
  display: flex;
  width: 100%;
  height: 1px;
  background: #d9d9d9;
  margin-top: 50px;
`;
export default CustomDropDown;