import React from "react";
import { Box } from '@material-ui/core';
import styled from "styled-components";
import LogoFooter from "../assets/logo_footer.png"

const Footer = () => {

    return (
        <StyledComponent>
            <FooterBox>
                <LeftPart>© 2022, Innovation Berlin</LeftPart>
                <CenterPart>CONTACT</CenterPart>
                <RightPart>
                    <img src={LogoFooter} alt="" />
                </RightPart>
            </FooterBox>
        </StyledComponent>
    );
}

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
    align-items: center;
    justify-content: center;
  color: white;
  background: #1A1E47;
  margin-top: 200px;
`
const FooterBox = styled(Box)`
    display: flex;
    flex-direction: row;
    width: 90%;
    height: 90px;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 700px) {
        transition: 0.5s;
        height: 280px;
        padding-top: 40px;
        padding-bottom: 40px;
        box-sizing: border-box;
        flex-direction: column-reverse;

  }
`

const LeftPart = styled(Box)`
    display: flex;
    align-items: center;
    font-family: 'Titillium Web';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 21px;
color: #FFFFFF;
text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
`
const CenterPart = styled(Box)`
    display: flex;
    padding:  10px  30px  10px 30px;
    justify-content: center;
    align-items: center;
    width: 120px;
    font-family: 'Titillium Web';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 24px;
text-align: center;
color: #FFFFFF;
border-radius: 50px;
border: 1px dashed #23CDB8;
`
const RightPart = styled(Box)`
    display: flex;
    align-items: center;
`
export default Footer;
