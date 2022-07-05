import React, { useEffect, useState } from "react";
import { Box, Modal } from '@material-ui/core';
import styled from "styled-components";
import { useWeb3React } from "@web3-react/core";
import { injected, walletConnect, trustWallet, binance_wallet } from "../../utils/connectors";
import { FaWallet, FaMoon } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import { GiArchBridge, GiMushroom } from 'react-icons/gi';
import { BiBook, BiMessageDetail } from 'react-icons/bi';
import { RiBug2Fill, RiMacbookLine, RiGovernmentLine } from 'react-icons/ri';
import { FaGithub, FaTwitter, FaDiscord, FaMedium } from 'react-icons/fa';
import Img_OlympusMark01 from "../../assets/olympus_mark01.png";

const Navbar = () => {
    const DESKTOP_CONNECTORS = {
        MetaMask: injected,
        WalletConnect: walletConnect,
        BinanceWallet: binance_wallet,
        TrustWallet: trustWallet,
    };
    const walletConnectors = DESKTOP_CONNECTORS;
    const { account, active, activate } = useWeb3React();
    const connect = async (currentConnector) => {
        try {
            await activate(walletConnectors[currentConnector]);
            window.localStorage.setItem("CurrentWalletConnect", currentConnector);
        }
        catch (e) {
            console.log(e);
        }
    }

    const set_account_addr = (addr) => {
        return addr.slice(0, 6) + "..." + addr.slice(-4);
    }
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        const currentWalletState = window.localStorage.getItem("CurrentWalletConnect");
        currentWalletState && activate(walletConnectors[currentWalletState]);
    }, [activate, walletConnectors])

    return (
        <StyledComponent>
            <ConnectWalletBtn onClick={() => {
                connect("MetaMask");
            }}>{active ? set_account_addr(account) : <><FaWallet /><Box display={"flex"} ml={"10px"}>Wallet</Box></>}</ConnectWalletBtn>
            <CustomBtn1>
                <FaMoon />
            </CustomBtn1>
            <CustomBtn1>
                <MdLanguage />
            </CustomBtn1>
            <CustomBtn2 onClick={() => {
                handleOpen();
            }}>
                <MdLanguage />
            </CustomBtn2>
            <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <ModalComponent>
                    <MarkImg>
                        <img src={Img_OlympusMark01} alt="" width={"60px"}></img>
                    </MarkImg>
                    <MarkLetter>
                        Olympus
                    </MarkLetter>
                    <TxtWalletAddress>{active === true ? account.slice(0, 6) + "..." + account.slice(-4) : "Connect Wallet"}</TxtWalletAddress>
                    <LinkList>
                        <EachLink onClick={()=>{
                            handleClose();
                        }}>
                            <RiMacbookLine fontSize={"1.5rem"} />
                            <EachLinkTxt >Wrap</EachLinkTxt>
                        </EachLink>
                        <EachLink onClick={()=>{
                            handleClose();
                        }}>
                            <GiArchBridge fontSize={"1.5rem"} />
                            <EachLinkTxt >Bridge</EachLinkTxt>
                        </EachLink>
                        <EachLink onClick={()=>{
                            handleClose();
                        }}>
                            <BiMessageDetail fontSize={"1.5rem"} />
                            <EachLinkTxt >Forum</EachLinkTxt>
                        </EachLink>
                        <EachLink onClick={()=>{
                            handleClose();
                        }}>
                            <RiGovernmentLine fontSize={"1.5rem"} />
                            <EachLinkTxt >Governance</EachLinkTxt>
                        </EachLink>
                        <EachLink onClick={()=>{
                            handleClose();
                        }}>
                            <BiBook fontSize={"1.5rem"} />
                            <EachLinkTxt >Docs</EachLinkTxt>
                        </EachLink>
                        <EachLink onClick={()=>{
                            handleClose();
                        }}>
                            <RiBug2Fill fontSize={"1.5rem"} />
                            <EachLinkTxt >Bug Bounty</EachLinkTxt>
                        </EachLink>
                        <EachLink onClick={()=>{
                            handleClose();
                        }}>
                            <GiMushroom fontSize={"1.5rem"} />
                            <EachLinkTxt >Grants</EachLinkTxt>
                        </EachLink>
                    </LinkList>
                    <ContactList>
                        <Box display={"flex"} width="80%" justifyContent={"space-between"}>
                            <ContactBox><FaGithub /></ContactBox>
                            <ContactBox><FaMedium /></ContactBox>
                            <ContactBox><FaTwitter /></ContactBox>
                            <ContactBox><FaDiscord /></ContactBox>
                        </Box>

                    </ContactList>
                </ModalComponent>
            </Modal>
        </StyledComponent>
    );
}

const StyledComponent = styled(Box)`
    display: flex;
    position: relative;
    width: 100%;
    height: 80px;
    align-items: center;
    justify-content: flex-end;
    background-color: rgb(57,72,94);
`

const ConnectWalletBtn = styled(Box)`
    display: flex;
    width: 150px;
    height: 40px;
    justify-content: center;
    align-items: center;
    margin-right: 1%;
    font-size: 1.2rem;
    font-weight: 600;
    border-radius: 8px;
    border: none;
    background-color: rgb(34,37,46);
    color: white;
    transition: .3s;
    &:hover{
        cursor: pointer;
        color: rgb(249,205,128);
        box-shadow: 1px 1px 1px rgb(255 255 255 / 30%);
    }
`

const CustomBtn1 = styled(Box)`
    display: flex;
    width: 40px;
    height: 40px;
    justify-content: center;
    align-items: center;
    margin-right: 1%;
    font-size: 1.2rem;
    font-weight: 600;
    border-radius: 8px;
    border: none;
    background-color: rgb(34,37,46);
    color: white;
    transition: .3s;
    &:hover{
        cursor: pointer;
        color: rgb(249,205,128);
        box-shadow: 1px 1px 1px rgb(255 255 255 / 30%);
    }
`

const CustomBtn2 = styled(Box)`
    display: none;
    position: fixed;
    width: 40px;
    height: 40px;
    justify-content: center;
    align-items: center;
    left: 3%;
    font-size: 1.2rem;
    font-weight: 600;
    border-radius: 8px;
    border: none;
    background-color: rgb(34,37,46);
    color: white;
    transition: .3s;
    &:hover{
        cursor: pointer;
        color: rgb(249,205,128);
        box-shadow: 1px 1px 1px rgb(255 255 255 / 30%);
    }
    @media (max-width: 1000px) {
        display: flex;
    }
`

const ModalComponent = styled(Box)`
    display: flex;
    transition: 1s;
    position: fixed;
    width: 300px;
    outline: none;
    height: 100%;
    flex-direction: column;
    align-items: center ;
    background-color: rgb(40,45,58);
    @media (min-width: 1000px) {
        display: none;
    }
`
const MarkImg = styled(Box)`
    display: flex;
    justify-content: center;
    margin-top: 30px;
`

const MarkLetter = styled(Box)`
    display: flex;
    justify-content: content;
    margin-top: 10px;
    color: white;
    font-size: 2.5rem;
    font-weight: 600;
`
const TxtWalletAddress = styled(Box)`
    display: flex;
    justify-content: center;
    color: white;
    font-size: 1rem;
    margin-top: 5px;
`
const LinkList = styled(Box)`
    display: flex;
    width: 100%;
    flex-direction: column;
    color: white;
    margin-top: 30px;
`
const EachLink = styled(Box)`
    display: flex;
    margin-top: 15px;
    margin-bottom: 15px;
    margin-left: 30px;
    align-items: center;
    &:hover{
        cursor: pointer;
        color: rgb(249,205,128);
    }
`
const EachLinkTxt = styled(Box)`
    display: flex;
    margin-left: 15px;
    font-size: 1rem;
`

const ContactList = styled(Box)`
    display: flex;
    position: fixed;
    bottom: 15px;
    min-width: 300px;
    left: 0px;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    color: rgb(104,106,116);
`

const ContactBox = styled(Box)`
    display: flex;
    &:hover{
        cursor: pointer;
        color: rgb(249,205,128);
    }
`

export default Navbar;
