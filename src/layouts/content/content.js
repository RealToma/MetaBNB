import React from "react";
import { Box } from '@material-ui/core';
import styled from "styled-components";
import Navbar from "../navbar/navbar";
import IMG_BACK_HOUSE from "../../assets/back_house.png"
import IMG_BACK_MAP from "../../assets/back_map.png"
import IMG_LOGO from "../../assets/logo01.png"
import IMG_KITCHEN from "../../assets/LIVING & KITCHEN.png"
import IMG_ROOM from "../../assets/LIVING ROOM.png"
import IMG_OUTDOOR from "../../assets/OUT DOOR AREA.png"
import { MdOutlineAccountBalanceWallet } from "react-icons/md"

const Content = () => {
    return (
        <StyledComponent>
            <Back01Component>
                <HeaderBar>
                    <LogoPart01>
                        <Box display={"flex"}>
                            <img src={IMG_LOGO} width={"33px"} height={"24px"} alt='' />
                        </Box>
                        <LogoText display={"flex"}>
                            metabnb
                        </LogoText>
                    </LogoPart01>
                    <PageLink>
                        <EachLink>Mint NFT PASS</EachLink>
                        <EachLink>How to </EachLink>
                        <EachLink>Location</EachLink>
                        <EachLink>ROADMAP</EachLink>
                        <EachLink>FAQ</EachLink>
                        <EachLink>TEAM</EachLink>
                    </PageLink>
                    <ConnectWallet01>
                        <WalletBox01>
                            <MdOutlineAccountBalanceWallet fontSize={"1.6rem"} />
                        </WalletBox01>
                    </ConnectWallet01>
                </HeaderBar>
                <NFTCollectionPart01>
                    <HeadText01>NFT Collection</HeadText01>
                    <ContentText01>A limited NFT collection that acts as a membership to access Metabnb Villa, a travel community for digital nomads.
                        <span style={{ fontWeight: '500', textTransform: 'none' }}>
                            &nbsp;After you purchase the metabnb - Genesis NFT you will receive a metabnb PFP as an airdrop. This PFP NFT gives you access to all benefits mentioned below.
                        </span>
                    </ContentText01>
                    <ButtonBox01>
                        <MintNFTPassBTN>Mint NFT Pass</MintNFTPassBTN>
                        <ReserverBTN>Reserve Property</ReserverBTN>
                    </ButtonBox01>
                </NFTCollectionPart01>
                <NFTCollectionPart01>
                    <HeadText02>HOW TO</HeadText02>
                    <ContentText02>Owning a METABNB NFT gives you access to multiple experiences including:</ContentText02>
                    <ContentText03>* Receive 1 airdrop per year redeemable for 3 nights in the METABNB Villa - starting 2022 until 2027. Aleatory night stays airdrops afterwards ​</ContentText03>
                    <ContentText03>​* Night Stays NFTs are accumulative and can be sold in many NFT marketplaces</ContentText03>
                    <ContentText03>* Get a 10% discount for life staying in the METABNB Villa - BALi, Pererenan, Pantai Lima or other METABNB verified Villa​</ContentText03>
                    <ContentText03>​* Get invited to exclusive surf trips with the METABNB community</ContentText03>
                    <ContentText03>* Free use of 2 surfboards when you stay in the METABNB VILLA​</ContentText03>
                    <ContentText03>* Family & friends benefits ​​</ContentText03>
                    <ContentText03>* Ongoing airdrops and more to comes​</ContentText03>
                </NFTCollectionPart01>
            </Back01Component>
            <Back02Component>
                <HeadText03>Location</HeadText03>
                <PicPart01>
                    <Pic01>
                        <img src={IMG_KITCHEN} width={'152px'} height={"152px"} style={{borderRadius:'100%'}} alt="" />
                    </Pic01>
                    <Line01></Line01>
                    <Position01>
                        <Circle01></Circle01>
                        <PositionText01>Pantai Lima</PositionText01> 
                    </Position01>
                    <Pic02>
                        <img src={IMG_ROOM} width={'168px'} height={"168px"} style={{borderRadius:'100%'}} alt="" />
                    </Pic02>
                    <Pic03>
                        <img src={IMG_OUTDOOR} width={'244px'} height={"244px"} style={{borderRadius:'100%'}} alt="" />
                    </Pic03>
                </PicPart01>
            </Back02Component>
            <FAQPart01></FAQPart01>
        </StyledComponent>
    );
}

const StyledComponent = styled(Box)`
    display: flex;
    width: 100%;
    flex-direction: column;
`
const Back01Component = styled(Box)`
    display: flex;
    width: 100%;
    align-items: center;
    flex-direction: column;
    background-color: white;
    background-image: url(${IMG_BACK_HOUSE});
    background-size: 100% auto;
    background-repeat: no-repeat;

`
const Back02Component = styled(Box)`
    display: flex;
    width: 100%;
    height: 850px;
    align-items: center;
    flex-direction: column;
    background-color: white;
    background-image: url(${IMG_BACK_MAP});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
`

const HeaderBar = styled(Box)`
    display: flex;
    width: 90%;
    align-items: center;
    font-family: 'Titillium Web', sans-serif;
    margin-top: 30px;
`

const LogoPart01 = styled(Box)`
    display: flex;
    align-items: center;
    flex:1;   
`
const LogoText = styled(Box)`
    display: flex;
    font-style: normal;
    font-weight: 400;
    font-size: 19.4948px;
    line-height: 30px;
    color: #2B2361;
    margin-left: 5px;
`
const ConnectWallet01 = styled(Box)`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: flex-end;
`

const PageLink = styled(Box)`
    display: flex;
    flex: 2;
    align-items: center;
    justify-content: center;

`
const EachLink = styled(Box)`
    display: flex;
    flex: 1;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    align-items: center;
    color: #2B2361;
    font-family: 'Titillium Web';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 21px;
    display: flex;
    align-items: center;
    text-align: center;
    text-transform: uppercase;
    text-decoration: underline 0.15em rgba(255,255,255,0);
    transition: text-decoration-color 500ms;
    &:hover{
        text-decoration-color: #2B2361;
        cursor: pointer;
        color: #2B2361;
        /* border-bottom: 1px solid rgb(249,205,128); */
    }
`
const WalletBox01 = styled(Box)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 43px;
    background: #000000;
    border-radius: 6px;
    color: white;
    &:hover{
        cursor: pointer;
        transition: .5s;
        background-color: #2B2361;
        /* box-shadow: 1px 1px 1px rgb(255 255 255 / 30%); */
    }
`
const NFTCollectionPart01 = styled(Box)`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    margin-top: 200px;
    margin-bottom: 200px;
`
const HeadText01 = styled(Box)`
    display: flex;
    width: 50%;
    justify-content: center;
    font-family: 'Zen Tokyo Zoo';
    font-style: normal;
    font-weight: 400;
    font-size: 108px;
    /* line-height: 101px;  */
    text-align: center;
    text-transform: uppercase;
    background: linear-gradient(269.73deg, #6D5DE0 34.58%, #B24EB4 45.18%, #E7428E 56.14%, #DF3966 67.45%, #D9383B 78.76%, #EC865B 90.07%, #FCC978 102.44%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    /* text-fill-color: transparent; */
`
const HeadText02 = styled(Box)`
    display: flex;
    /* width: 100%; */
    justify-content: center;
    font-family: 'Zen Tokyo Zoo';
    font-style: normal;
    font-weight: 400;
    font-size: 108px;
    /* line-height: 101px; */
/* identical to box height, or 94% */
    text-transform: uppercase;
    background: linear-gradient(269.73deg, #6D5DE0 34.58%, #B24EB4 45.18%, #E7428E 56.14%, #DF3966 67.45%, #D9383B 78.76%, #EC865B 90.07%, #FCC978 102.44%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    /* text-fill-color: transparent; */
`
const HeadText03 = styled(Box)`
    font-family: 'Zen Tokyo Zoo';
    font-style: normal;
    font-weight: 400;
    font-size: 198px;
    /* line-height: 101px; */
    /* identical to box height, or 51% */

    text-align: center;
    text-transform: uppercase;

    background: linear-gradient(269.73deg, #6D5DE0 34.58%, #B24EB4 45.18%, #E7428E 56.14%, #DF3966 67.45%, #D9383B 78.76%, #EC865B 90.07%, #FCC978 102.44%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    /* text-fill-color: transparent; */
`

const ContentText01 = styled(Box)`
    /* display: flex; */
    width: 35%;
    justify-content: center;
    font-family: 'Titillium Web';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 27px;
    text-transform: uppercase;
    color: #2B2361;
    margin-top: 70px;
`
const ButtonBox01 = styled(Box)`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    font-family: 'Titillium Web';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 21px;
    display: flex;
    align-items: center;
    text-align: center;
    margin-top: 70px;
`
const MintNFTPassBTN = styled(Box)`
    display: flex;
    width: 210px;
    height: 40px;
    justify-content: center;
    align-items: center;
    background: #000000;
    border: 1px solid black;
    border-radius: 6px;
    color: white;
    text-transform: uppercase;
    cursor: pointer;
    &:hover{
        transition: .5s;
        background-color: #2B2361;
        border: 1px solid #2B2361;
    }
    margin-right: 10px;
`
const ReserverBTN = styled(Box)`
    display: flex;
    width: 210px;
    height: 40px;
    justify-content: center;
    align-items: center;
    background: white;
    border: 1px solid #2B2361;
    border-radius: 6px;
    color: #2B2361;
    text-transform: uppercase;
    cursor: pointer;
    &:hover{
        transition: .5s;
        color: black;
        border: 1px solid black;
    } 
    margin-left: 10px;
`
const ContentText02 = styled(Box)`
    display: flex;
    width: 35%;
    font-family: 'Titillium Web';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    text-transform: uppercase;
    color: #2B2361;
    margin-top: 70px;
`
const ContentText03 = styled(Box)`
    display: flex;
    width: 35%;
    font-family: 'Titillium Web';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 27px;
    text-transform: uppercase;
    color: #2B2361;
    margin-top: 50px;
`
const PicPart01 = styled(Box)`
    display: flex;
    position: absolute;
    /* justify-content: center; */
    align-items: center;
    left: 35%;
    top: 45%;
`
const Pic01 = styled(Box)`
    display: flex;
    border-radius: 100%;
`

const Pic02 = styled(Box)`
    display: flex;
    border-radius: 100%;
    position: absolute;
    left: -200px;
    top: -80px;
`
const Pic03 = styled(Box)`
    display: flex;
    border-radius: 100%;
    position: absolute;
    left: -200px;
    bottom: -200px;
`

const Line01 = styled(Box)`
    display: flex;
    width: 170px;
    height: 2px;
    background-color: #6E5EE1;
    margin-left: 20px;
`
const Position01 = styled(Box)`
    display: flex;
    position: relative;
    width: 28px;
    height: 28px;
    border: 1px solid rgba(227, 61, 119, 0.3);
    border-radius: 100%;
    justify-content: center;
    align-items: center;
    margin-left: 20px;
`
const Circle01 = styled(Box)`
    display: flex;
    background: #E33D77;
    border-radius: 100%;
    width: 18px;
    height: 18px;
`
const PositionText01 = styled(Box)`
    display: flex;
    position: absolute;
    white-space: nowrap;
    bottom: -30px;
    font-family: 'Titillium Web';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 27px;
    /* text-align: center; */
    text-transform: uppercase;
    color: #858585;

`
const FAQPart01 = styled(Box)`
    display: flex;
    width: 100%;
    align-items: center;
    flex-direction: column;
    background-color: white;
`


const Statistics = styled(Box)`
    display: grid;
    grid-template-columns: auto auto auto;
    width: 80%;
    height: 200px;
    margin-top: 50px;
    border-radius: 10px;
    background-color: rgb(32,38,46);
    @media (max-width: 700px) {
        transition: 0.5s;
        grid-template-columns: auto auto;
    }
    @media (max-width: 500px) {
        transition: 0.5s;
        grid-template-columns: auto;
        height: 320px;
    }
`

export default Content;
