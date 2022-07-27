import React, { useState, useRef, useEffect } from "react";
import { Box, Modal } from "@material-ui/core";
import styled from "styled-components";
// import Navbar from "../navbar/navbar";
import CustomDropDown from "../../components/CustomDropDown";
import IMG_BACK_HOUSE from "../../assets/back_house.png";
import IMG_BACK_MAP from "../../assets/image_back_map.svg";
import IMG_LOGO from "../../assets/logo01.png";
import IMG_CiIRCLE01 from "../../assets/cimage1.png";
import IMG_CiIRCLE02 from "../../assets/cimage2.png";
import IMG_CiIRCLE03 from "../../assets/cimage3.png";
// import IMG_ROADMAP from "../../assets/roadmap.png"
import TEXT_FAQ from "../../assets/data/faq_text.json";
import TEXT_ROADMAP from "../../assets/data/roadmap.json"
// import { GiArchBridge, GiMushroom } from "react-icons/gi";
// import { BiBook, BiMessageDetail } from "react-icons/bi";
// import { RiBug2Fill, RiMacbookLine, RiGovernmentLine } from "react-icons/ri";
import { FaGithub, FaTwitter, FaDiscord, FaMedium } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import IMGTeamseb from "../../assets/team/seb.png"
import IMGTeamexe from "../../assets/team/exe.png"
import IMGTeammad from "../../assets/team/mad.png"
import IMGTeamrob from "../../assets/team/rob.png"
import IMGTeamomac from "../../assets/team/omac.png"
import IMGTeajuliusb from "../../assets/team/julius.png"
import RoadmapBar from "../../assets/roadmapBar.svg"
import IMGPiece01 from "../../assets/piece/01.png";
import IMGPiece02 from "../../assets/piece/02.png";
import IMGPiece03 from "../../assets/piece/03.png";
import IMGPiece04 from "../../assets/piece/04.png";
import SimpleImageSlider from "react-simple-image-slider";
import IMG_SCROLLSIDEBAR from "../../assets/scrollSideBar.png"
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight, MdClose } from "react-icons/md"

const images = [
  IMGPiece04,
  IMGPiece04,
  IMGPiece04,
  IMGPiece04,
  IMGPiece04,
];

const Content = () => {
  const mintRef = useRef();
  const howtoRef = useRef()
  const locationRef = useRef()
  const roadmapRef = useRef()
  const faqRef = useRef()
  const teamRef = useRef()
  const galleryRef = useRef()

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [flagGallery, setFlagGallery] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollFlag, setScrollFlag] = useState(false);
  const [sideScrollFlag, setSideScrollFlag] = useState(false);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
    setScrollFlag(true);
    setSideScrollFlag(false)
  };


  useEffect(() => {
    if (scrollFlag === true) {
      setSideScrollFlag(false);
    }
    else {
      setInterval(() => {
        setSideScrollFlag(true);
      }, 5000);
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, []);

  return (
    <StyledComponent>
      {
        sideScrollFlag ? <SideScrollBar01>
          <img src={IMG_SCROLLSIDEBAR} width="100%" alt='' />
        </SideScrollBar01> : <></>
      }

      <Back01Component>
        {scrollPosition >= 50 ?
          <HeaderBarScroll>
            <HeaderBar>
              <LogoPart01 onClick={() => {
                window.scrollTo(0, 0);
              }}>
                <Box display={"flex"}>
                  <img src={IMG_LOGO} width={"33px"} height={"24px"} alt="" />
                </Box>
                <LogoText>METAVACATION</LogoText>
              </LogoPart01>
              <PageLink>
                <EachLink onClick={() => {
                  mintRef.current.scrollIntoView({ behavior: 'smooth' });
                }}>Mint NFT PASS</EachLink>
                <EachLink onClick={() => {
                  howtoRef.current.scrollIntoView({ behavior: 'smooth' });
                }}>How to </EachLink>
                <EachLink onClick={() => {
                  locationRef.current.scrollIntoView({ behavior: 'smooth' });
                }}>Location</EachLink>
                <EachLink onClick={() => {
                  roadmapRef.current.scrollIntoView({ behavior: 'smooth' });
                }}>ROADMAP</EachLink>
                <EachLink onClick={() => {
                  faqRef.current.scrollIntoView({ behavior: 'smooth' });
                }}>FAQ</EachLink>
                <EachLink onClick={() => {
                  teamRef.current.scrollIntoView({ behavior: 'smooth' });
                }}>TEAM</EachLink>
              </PageLink>
              <ConnectWallet01>
                <WalletBox01>
                  MINT NFT
                </WalletBox01>
                <WalletBox02>
                  Reserve Property
                </WalletBox02>
                <WalletBox03>
                  Reserve
                </WalletBox03>
                <CustomBtn2
                  onClick={() => {
                    handleOpen();
                  }}
                >
                  <MdMenu />
                </CustomBtn2>
              </ConnectWallet01>
            </HeaderBar>
          </HeaderBarScroll> :
          <HeaderBar>
            <LogoPart01 onClick={() => {
              window.scrollTo(0, 0);
            }}>
              <Box display={"flex"}>
                <img src={IMG_LOGO} width={"33px"} height={"24px"} alt="" />
              </Box>
              <LogoText>METAVACATION</LogoText>
            </LogoPart01>
            <PageLink>
              <EachLink onClick={() => {
                mintRef.current.scrollIntoView({ behavior: 'smooth' });
              }}>Mint NFT PASS</EachLink>
              <EachLink onClick={() => {
                howtoRef.current.scrollIntoView({ behavior: 'smooth' });
              }}>How to </EachLink>
              <EachLink onClick={() => {
                locationRef.current.scrollIntoView({ behavior: 'smooth' });
              }}>Location</EachLink>
              <EachLink onClick={() => {
                roadmapRef.current.scrollIntoView({ behavior: 'smooth' });
              }}>ROADMAP</EachLink>
              <EachLink onClick={() => {
                faqRef.current.scrollIntoView({ behavior: 'smooth' });
              }}>FAQ</EachLink>
              <EachLink onClick={() => {
                teamRef.current.scrollIntoView({ behavior: 'smooth' });
              }}>TEAM</EachLink>
            </PageLink>
            <ConnectWallet01>
              <WalletBox01>
                MINT NFT
              </WalletBox01>
              <WalletBox02>
                Reserve Property
              </WalletBox02>
              <WalletBox03>
                Reserve
              </WalletBox03>
              <CustomBtn2
                onClick={() => {
                  handleOpen();
                }}
              >
                <MdMenu />
              </CustomBtn2>
            </ConnectWallet01>
          </HeaderBar>
        }
        <NFTCollectionPart01 ref={mintRef} mt={'200px'} mb={'100px'}>
          <HeadText01>Bringing real life</HeadText01>
          <HeadText01>assets on to the</HeadText01>
          <HeadText01>blockchain</HeadText01>
          <ContentText01>
            A limited NFT collection that acts as a membership to access Metabnb Villas, a travel community for digital nomads.
            <span style={{ fontWeight: "500", textTransform: "none" }}>
              &nbsp;After you purchase the metabnb - Genesis NFT you will receive a metabnb PFP as an airdrop.
              This PFP NFT gives you access to all benefits mentioned below.
            </span>
          </ContentText01>
          {/* <ButtonBox01>
            <MintNFTPassBTN>Mint NFT Pass</MintNFTPassBTN>
            <ReserverBTN>Reserve Property</ReserverBTN>
          </ButtonBox01> */}
        </NFTCollectionPart01>
        <NFTCollectionPart01 ref={howtoRef} mt={'50px'} mb={'100px'}>
          <HeadText02>What do i get</HeadText02>
          <ContentText02>
            Owning a METABNB NFT gives you access to multiple experiences including:
          </ContentText02>
          <ContentText03>
            ■ Receive 1 airdrop per year redeemable for nights in the METABNB Villa - starting 2022 until 2027. Aleatory night stays airdrops afterwards
          </ContentText03>
          <ContentText03>
            ■ Night Stays NFTs are accumulative and can be sold in many NFT marketplaces
          </ContentText03>
          <ContentText03>
            ■ Get a 10% discount for life staying in the METABNB Villa - BALi, Pererenan, Pantai Lima or other METABNB verified VillaS
          </ContentText03>
          <ContentText03>
            ■ Get invited to exclusive surf trips with the METABNB community
          </ContentText03>
          <ContentText03>
            ■ Free use of 2 surfboards when you stay at assorted METABNB VILLAs
          </ContentText03>
          <ContentText03>
            ■ Free use of scooters while staying at villa
          </ContentText03>
          <ContentText03>
            ■ free aiprort pick up, upon availibility, discounted rental cars with driver
          </ContentText03>
          <ContentText03>
            ■ Family {'&'} friends benefits and discounts
          </ContentText03>
          <ContentText03>
            ■ Ongoing airdrops and more to come
          </ContentText03>
          <ContentText03>
            ■ discounts on assorted water activity, like jetski, wakeboard etc.
          </ContentText03>
        </NFTCollectionPart01>
      </Back01Component>
      <Back02Component ref={locationRef}>
        <Box display={"flex"} flex="1" alignItems={'center'} flexDirection={'column'}>
          <HeadText03>
            Location
          </HeadText03>
          <Box display={"flex"} width={'80%'} border={'1px dashed #26AAB8'}></Box>
          <LocationTxt01>Bali, Pererenan, Pantai Lima</LocationTxt01>

        </Box>
        <PicPart01>
          <Pic01>
            <img
              src={IMG_CiIRCLE01}
              width={"100%"}
              height={"100%"}
              style={{ borderRadius: "100%" }}
              alt=""
            />
          </Pic01>
          <Line01></Line01>
          <Position01>
            {/* <Circle01></Circle01> */}
            <PositionText01>Pantai Lima</PositionText01>
          </Position01>
          <Pic02>
            <img
              src={IMG_CiIRCLE02}
              width={"100%"}
              height={"100%"}
              style={{ borderRadius: "100%" }}
              alt=""
            />
          </Pic02>
          <Pic03>
            <img
              src={IMG_CiIRCLE03}
              width={"100%"}
              height={"100%"}
              style={{ borderRadius: "100%" }}
              alt=""
            />
          </Pic03>
        </PicPart01>
        {/* <Position01>
          <Circle01></Circle01>
          <PositionText01>Pantai Lima</PositionText01>
        </Position01> */}
      </Back02Component>
      <ImageShowPart01 ref={galleryRef}>
        <TopImagePart01>
          {flagGallery ? <FullGalleryBox>
            <img src={IMGPiece01} width={'100%'} height={'100%'} style={{
              backgroundPosition: 'center'
            }} alt="" />
            <LeftBtn01>
              <MdOutlineKeyboardArrowLeft />
            </LeftBtn01>
            <RightBtn01>
              <MdOutlineKeyboardArrowRight />
            </RightBtn01>
            <ExitBtn01 onClick={() => {
              galleryRef.current.scrollIntoView({ behavior: 'smooth' });
              setFlagGallery(false);
            }}>
              <MdClose />
            </ExitBtn01>
            <ImageShow01>
              <EachIamge01>
                <img src={IMGPiece01} width={'100%'} height={'100%'} style={{
                  borderTop: "4px solid black",
                  borderLeft:"2px solid black",
                  borderRight:"2px solid black"
                }} alt="" />
              </EachIamge01>
              <EachIamge01>
                <img src={IMGPiece01} width={'100%'} height={'100%'} style={{
                  borderTop: "4px solid black",
                  borderLeft:"2px solid black",
                  borderRight:"2px solid black"
                }} alt="" />
              </EachIamge01>
              <EachIamge01>
                <img src={IMGPiece01} width={'100%'} height={'100%'} style={{
                  borderTop: "4px solid black",
                  borderLeft:"2px solid black",
                  borderRight:"2px solid black"
                }} alt="" />
              </EachIamge01>
              <EachIamge01>
                <img src={IMGPiece01} width={'100%'} height={'100%'} style={{
                  borderTop: "4px solid black",
                  borderLeft:"2px solid black",
                  borderRight:"2px solid black"
                }} alt="" />
              </EachIamge01>
              <EachIamge01>
                <img src={IMGPiece01} width={'100%'} height={'100%'} style={{
                  borderTop: "4px solid black",
                  borderLeft:"2px solid black",
                  borderRight:"2px solid black"
                }} alt="" />
              </EachIamge01>
              <EachIamge01>
                <img src={IMGPiece01} width={'100%'} height={'100%'} style={{
                  borderTop: "4px solid black",
                  borderLeft:"2px solid black",
                  borderRight:"2px solid black"
                }} alt="" />
              </EachIamge01>
            </ImageShow01>
          </FullGalleryBox> :
            <>
              <LeftImagePart01 onClick={() => {
                setFlagGallery(true);
              }}>
                <img src={IMGPiece01} width={'100%'} alt="" />
              </LeftImagePart01>
              <RightImagePart01 onClick={() => {
                setFlagGallery(true);
              }}>
                <TopImagePart02>
                  <img src={IMGPiece02} width={'100%'} alt="" />
                </TopImagePart02>
                <DownImagePart02 onClick={() => {
                setFlagGallery(true);
              }}>
                  <img src={IMGPiece03} width={'100%'} alt="" />
                </DownImagePart02>
              </RightImagePart01>
            </>
          }

        </TopImagePart01>
        <DownImagePart01>
          <SimpleImageSlider
            width={"100%"}
            height={550}
            images={images}
            showBullets={true}
            showNavs={true}
          />
        </DownImagePart01>
        <DownImagePart03>
          <SimpleImageSlider
            width={"100%"}
            height={300}
            images={images}
            showBullets={true}
            showNavs={true}
          />
        </DownImagePart03>
      </ImageShowPart01>
      <RoadMapPart01 ref={roadmapRef}>
        {/* <RoadDesktop01></RoadDesktop01> */}
        <RoadDesktop>
          <HeadText02>Roadmap</HeadText02>
          <RoadPart02>
            <LeftRoadmap>
              {TEXT_ROADMAP.map((each, index) => {
                if (index === 1) {
                  return (
                    <EachRoad03 key={index} top={`${index * 165 - 20}px`}>
                      <Box display={"flex"} flexDirection={"column"} alignItems={"flex-end"} flex={"1"}>
                        <EachRoadHeader01>
                          <Box display={"flex"} color={each.color}>{each.headtxt}</Box>
                        </EachRoadHeader01>
                        {each.contentText.map((each1, index1) => {
                          return (
                            <EachRoadText2 key={index1}>{each1}</EachRoadText2>
                          )
                        })}
                      </Box>
                      <Box display={"flex"} width={"55px"} height={'50px'} alignItems={"center"} mr="10px" ml={'10px'}>
                        <Box display={"flex"} width={"55px"} height={'2px'} bgcolor={"white"} alignItems={"center"} borderBottom={'2px dashed #303FBA'}>
                        </Box>
                      </Box>
                    </EachRoad03>
                  )
                }
                else if (index === 3) {
                  return (
                    <EachRoad03 key={index} top={`${index * 165 + 5}px`}>
                      <Box display={"flex"} flexDirection={"column"} alignItems={"flex-end"} flex={"1"}>
                        <EachRoadHeader01>
                          <Box display={"flex"} color={each.color}>{each.headtxt}</Box>
                        </EachRoadHeader01>
                        {each.contentText.map((each1, index1) => {
                          return (
                            <EachRoadText2 key={index1}>{each1}</EachRoadText2>
                          )
                        })}
                      </Box>
                      <Box display={"flex"} width={"55px"} height={'50px'} alignItems={"center"} mr="10px" ml={'10px'}>
                        <Box display={"flex"} width={"55px"} height={'2px'} alignItems={"center"} borderBottom={'2px dashed #303FBA'}>
                        </Box>
                      </Box>
                    </EachRoad03>
                  )
                }
                return <></>
              })
              }
            </LeftRoadmap>
            <CenterRoadmap>
              <img src={RoadmapBar} alt="" />
            </CenterRoadmap>
            <RightRoadmap>
              {TEXT_ROADMAP.map((each, index) => {
                if (index % 2 === 0) {
                  return (
                    <EachRoad02 key={index} top={`${index * 165 - 10}px`}>
                      <Box display={"flex"} width={"55px"} height={'50px'} alignItems={"center"} mr="10px" ml={'10px'}>
                        <Box display={"flex"} width={"55px"} height={'2px'} alignItems={"center"} borderBottom={'2px dashed #303FBA'}>
                        </Box>
                      </Box>
                      <Box display={"flex"} flexDirection={"column"} alignItems={"flex-start"} flex={"1"}>
                        <EachRoadHeader>
                          <Box display={"flex"} color={each.color}>{each.headtxt}</Box>
                        </EachRoadHeader>
                        {each.contentText.map((each1, index1) => {
                          return (
                            <EachRoadText1 key={index1}>{each1}</EachRoadText1>
                          )
                        })}
                      </Box>
                    </EachRoad02>
                  )
                }
                return <></>
              })}
            </RightRoadmap>
          </RoadPart02>

          {/* {TEXT_ROADMAP.map((each, index) => {
            return (
              <EachRoad02 key={index}>
                <EachRoadHeader>
                  <Box display={"flex"} color={each.color}>{each.headtxt}</Box>
                </EachRoadHeader>
                {each.contentText.map((each1, index1) => {
                  return (
                    <EachRoadText key={index1}>{each1}</EachRoadText>
                  )
                })}

              </EachRoad02>
            )
          })} */}
        </RoadDesktop>
        <RoadMobile01>
          <HeadText04>
            <Box display={"flex"} justifyContent="center" alignItems={'center'}>RoadMap</Box>
          </HeadText04>
          {TEXT_ROADMAP.map((each, index) => {
            return (
              <EachRoad01 key={index}>
                <EachRoadHeader>
                  <Box display={"flex"} color={each.color}>{each.headtxt}</Box>
                </EachRoadHeader>
                {each.contentText.map((each1, index1) => {
                  return (
                    <EachRoadText key={index1}>{each1}</EachRoadText>
                  )
                })}

              </EachRoad01>
            )
          })}

        </RoadMobile01>
      </RoadMapPart01>
      <FAQPart01 ref={faqRef}>
        <HeadText02>FAQ</HeadText02>
        {TEXT_FAQ.map((each, index) => {
          return (
            <CustomDropDown
              key={index}
              width={"60%"}
              h_text={each.htext}
              c_text={each.ctext}
            />
          );
        })}
      </FAQPart01>
      <TeamPart01 ref={teamRef}>
        <HeadText02>TEAM</HeadText02>
        <TeamPart02>
          <EachPart01>
            <Circle02>
              <img src={IMGTeamseb} width={'100%'} height={"100%"} style={{ borderRadius: '100%' }} alt={""} />
            </Circle02>
            <TeamText01>SEB</TeamText01>
            <TeamText02>Is doing CEO stuff</TeamText02>
          </EachPart01>
          <EachPart01>
            <Circle02>
              <img src={IMGTeamexe} width={'100%'} height={"100%"} style={{ borderRadius: '100%' }} alt={""} />
            </Circle02>
            <TeamText01>exe</TeamText01>
            <TeamText02>Code or die</TeamText02>
          </EachPart01>
          <EachPart01>
            <Circle02>
              <img src={IMGTeammad} width={'100%'} height={"100%"} style={{ borderRadius: '100%' }} alt={""} />
            </Circle02>
            <TeamText01>mad</TeamText01>
            <TeamText02>If angels could fly</TeamText02>
          </EachPart01>
          <EachPart01>
            <Circle02>
              <img src={IMGTeamrob} width={'100%'} height={"100%"} style={{ borderRadius: '100%' }} alt={""} />
            </Circle02>
            <TeamText01>rob</TeamText01>
            <TeamText02>Community is king</TeamText02>
          </EachPart01>
          <EachPart01>
            <Circle02>
              <img src={IMGTeamomac} width={'100%'} height={"100%"} style={{ borderRadius: '100%' }} alt={""} />
            </Circle02>
            <TeamText01>omac</TeamText01>
            <TeamText02>Degen 4 life</TeamText02>
          </EachPart01>
          <EachPart01>
            <Circle02>
              <img src={IMGTeajuliusb} width={'100%'} height={"100%"} style={{ borderRadius: '100%' }} alt={""} />
            </Circle02>
            <TeamText01>Julius</TeamText01>
            <TeamText02>Big Poppa</TeamText02>
          </EachPart01>
        </TeamPart02>
      </TeamPart01>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalComponent>
          <MarkImg>
            <img src={IMG_LOGO} alt="" width={"60px"}></img>
          </MarkImg>
          <MarkLetter>metabnb</MarkLetter>
          {/* <TxtWalletAddress>{active === true ? account.slice(0, 6) + "..." + account.slice(-4) : "Connect Wallet"}</TxtWalletAddress> */}
          <LinkList>
            <EachLink01
              onClick={() => {
                mintRef.current.scrollIntoView({ behavior: 'smooth' });
                handleClose();
              }}
            >
              {/* <RiMacbookLine fontSize={"1.5rem"} /> */}
              <EachLink02Txt>Mint NFT PASS</EachLink02Txt>
            </EachLink01>
            <EachLink01
              onClick={() => {
                howtoRef.current.scrollIntoView({ behavior: 'smooth' });
                handleClose();
              }}
            >
              {/* <GiArchBridge fontSize={"1.5rem"} /> */}
              <EachLink02Txt>How to </EachLink02Txt>
            </EachLink01>
            <EachLink01
              onClick={() => {
                locationRef.current.scrollIntoView({ behavior: 'smooth' });
                handleClose();
              }}
            >
              <EachLink02Txt>Location</EachLink02Txt>
            </EachLink01>
            <EachLink01
              onClick={() => {
                roadmapRef.current.scrollIntoView({ behavior: 'smooth' });
                handleClose();
              }}
            >
              <EachLink02Txt>ROADMAP</EachLink02Txt>
            </EachLink01>
            <EachLink01
              onClick={() => {
                faqRef.current.scrollIntoView({ behavior: 'smooth' });
                handleClose();
              }}
            >
              <EachLink02Txt>FAQ</EachLink02Txt>
            </EachLink01>
            <EachLink01
              onClick={() => {
                teamRef.current.scrollIntoView({ behavior: 'smooth' });
                handleClose();
              }}
            >
              <EachLink02Txt>TEAM</EachLink02Txt>
            </EachLink01>
          </LinkList>
          <ContactList>
            <Box display={"flex"} width="80%" justifyContent={"space-between"}>
              <ContactBox>
                <FaGithub />
              </ContactBox>
              <ContactBox>
                <FaMedium />
              </ContactBox>
              <ContactBox>
                <FaTwitter />
              </ContactBox>
              <ContactBox>
                <FaDiscord />
              </ContactBox>
            </Box>
          </ContactList>
        </ModalComponent>
      </Modal>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  position: relative;
  width: 100%;
  flex-direction: column;
  color: white;
  align-items: center;
`;
const Back01Component = styled(Box)`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  background-color: white;
  background-image: url(${IMG_BACK_HOUSE});
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-position:0px 0px;
`;
const Back02Component = styled(Box)`
  display: flex;
  width: 100%;
  height: 850px;
  align-items: center;
  flex-direction: column;
  background-color: white;
  background-image: url(${IMG_BACK_MAP});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
`;

const HeaderBar = styled(Box)`
  display: flex;
  position: fixed;
  z-index: 100;
  width: 90%;
  height: 80px;
  align-items: center;
  font-family: "Titillium Web", sans-serif;

`;

const HeaderBarScroll = styled(Box)`
  display: flex;
  position: fixed;
  width: 100%;
  height: 80px;
  z-index: 150;
  top: 0px;
  align-items: center;
  justify-content: center;
  font-family: "Titillium Web", sans-serif;
  transition: 1s;
  background-color: rgba(255,255,255,1);

`
const LogoPart01 = styled(Box)`
  display: flex;
  align-items: center;
  flex: 0.7;
    cursor: pointer;
`;
const LogoText = styled(Box)`
  display: flex;
  font-family: 'Titillium Web';
font-style: normal;
font-weight: 600;
font-size: 19.4948px;
line-height: 30px;
/* identical to box height */

align-items: center;
  color: #444444;
  margin-left: 5px;
  @media (max-width: 500px) {
    transition: 0.5s;
    display: none;
  }
`;
const ConnectWallet01 = styled(Box)`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
`;

const PageLink = styled(Box)`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  @media (max-width: 1300px) {
    transition: 0.5s;
    flex: 3.5;
  }
  @media (max-width: 1200px) {
    transition: 0.5s;
    display: none;
  }
`;
const EachLink = styled(Box)`
  display: flex;
  /* padding-bottom: 5px; */
  /* flex: 1; */
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  font-family: 'Titillium Web';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 21px;
display: flex;
align-items: center;
text-align: center;
text-transform: uppercase;

/* Dark Black */

color: #444444;
  text-transform: uppercase;
  /* text-decoration: underline 0.15em rgba(255, 255, 255, 0);
  transition: text-decoration-color 500ms; */

  border-bottom: 1px dashed rgba(0,0,0, 0);
  cursor: pointer;
  &:hover {
    transition: .5s;
    border-bottom: 1px dashed #26AAB8;


  }
`;

const WalletBox01 = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 88px;
  height: 32px;
  background: #444444;
  border-radius: 56px;
  font-family: 'Titillium Web';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 21px;
align-items: center;
text-align: center;
text-transform: uppercase;
border: 1px solid #444444;
color: #22DAB9;
  &:hover {
    cursor: pointer;
    transition: 0.5s;
    background-color: #444444;
  }
`;

const WalletBox02 = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  width: 145px;
  height: 32px;
  /* background: white; */
  border: 1px dashed #444444;
  border-radius: 56px;
  font-family: 'Titillium Web';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 21px;
align-items: center;
text-align: center;
text-transform: uppercase;

color: #444444;
  &:hover {
    cursor: pointer;
    transition: 0.5s;
    background-color: #444444;
    color: white;
  }
  @media (max-width: 500px) {
    transition: 0.5s;
    display: none;
  }
`;

const WalletBox03 = styled(Box)`
  display: none;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  width: 88px;
  height: 32px;
  background: white;
  border: 1px solid #444444;
  border-radius: 20px;
  font-family: 'Titillium Web';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 21px;
align-items: center;
text-align: center;
text-transform: uppercase;

  color: #342361;
  &:hover {
    cursor: pointer;
    transition: 0.5s;
    background-color: #444444;
    color: white;
  }
  @media (max-width: 500px) {
    transition: 0.5s;
    display: flex;
  }
`;


const NFTCollectionPart01 = styled(Box)`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;

`;
const HeadText01 = styled(Box)`
  display: flex;
  justify-content: center;
  font-family: "Zen Tokyo Zoo";
  font-style: normal;
  font-weight: 400;
  font-size: 108px;
  text-align: center;
  text-transform: uppercase;
  

background: linear-gradient(271.82deg, rgba(40, 46, 183, 0.96) 12.47%, #21D9B8 92.58%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (max-width: 1300px) {
    transition: 0.5s;
    font-weight: 400;
    font-size: 85px;
  }
  @media (max-width: 1000px) {
    transition: 0.5s;
    font-weight: 400;
    font-size: 70px;
  }
  @media (max-width: 900px) {
    transition: 0.5s;
    font-weight: 400;
    font-size: 60px;
  }
  @media (max-width: 700px) {
    transition: 0.5s;
    font-weight: 400;
    font-size: 50px;
  }
  @media (max-width: 600px) {
    transition: 0.5s;
    font-weight: 400;
    font-size: 40px;
  }
  @media (max-width: 500px) {
    transition: 0.5s;
    font-weight: 400;
    font-size: 30px;
  }
  @media (max-width: 400px) {
    transition: 0.5s;
    font-weight: 400;
    font-size: 25px;
  }
`;
const HeadText02 = styled(Box)`
  display: flex;
  justify-content: center;
  font-family: "Zen Tokyo Zoo";
  font-style: normal;
  font-weight: 400;
  font-size: 108px;
  text-transform: uppercase;
background: linear-gradient(271.82deg, rgba(40, 46, 183, 0.96) 12.47%, #21D9B8 92.58%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  @media (max-width: 1300px) {
    transition: 0.5s;
    font-weight: 400;
    font-size: 85px;
  }
  @media (max-width: 1000px) {
    transition: 0.5s;
    font-weight: 400;
    font-size: 70px;
  }
  @media (max-width: 700px) {
    transition: 0.5s;
    font-weight: 400;
    font-size: 50px;
  }
  @media (max-width: 500px) {
    transition: 0.5s;
    font-weight: 400;
    font-size: 40px;
  }
`;

const HeadText03 = styled(Box)`
  display: flex;
  font-family: "Zen Tokyo Zoo";
  font-style: normal;
  font-weight: 400;
  font-size: 98px;
  text-align: center;
  text-transform: uppercase;
background: linear-gradient(271.82deg, rgba(40, 46, 183, 0.96) 12.47%, #21D9B8 92.58%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  @media (max-width: 1300px) {
    transition: 0.5s;
    font-size: 90px;
  }
  @media (max-width: 1000px) {
    transition: 0.5s;
    font-size: 80px;
  }
  @media (max-width: 700px) {
    transition: 0.5s;
    font-size: 70px;
  }
  @media (max-width: 500px) {
    transition: 0.5s;
    font-size: 50px;
  }
`;

const ContentText01 = styled(Box)`
  
  width: 35%;
  justify-content: center;
  font-family: "Titillium Web";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  text-transform: uppercase;
  color: #444444;
  margin-top: 70px;
  @media (max-width: 1300px) {
    transition: 0.5s;
    font-size: 16px;
  }
  @media (max-width: 1000px) {
    transition: 0.5s;
    font-size: 15px;
    width: 70%;
  }
  @media (max-width: 700px) {
    transition: 0.5s;
    font-size: 13px;
  }
  @media (max-width: 500px) {
    transition: 0.5s;
    font-size: 10px;
  }
`;
const ButtonBox01 = styled(Box)`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  font-family: "Titillium Web";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
  display: flex;
  align-items: center;
  text-align: center;
  margin-top: 70px;
`;
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
  &:hover {
    transition: 0.5s;
    background-color: #444444;
    border: 1px solid #444444;
  }
  margin-right: 10px;
  @media (max-width: 500px) {
    transition: 0.5s;
    width: 180px;
  }
  @media (max-width: 500px) {
    transition: 0.5s;
    width: 150px;
  }
  @media (max-width: 400px) {
    transition: 0.5s;
    width: 130px;
  }
`;
const ReserverBTN = styled(Box)`
  display: flex;
  width: 210px;
  height: 40px;
  justify-content: center;
  align-items: center;
  background: white;
  border: 1px solid #444444;
  border-radius: 6px;
  color: #444444;
  text-transform: uppercase;
  cursor: pointer;
  &:hover {
    transition: 0.5s;
    color: black;
    border: 1px solid black;
  }
  margin-left: 10px;
  @media (max-width: 700px) {
    transition: 0.5s;
    width: 180px;
  }
  @media (max-width: 500px) {
    transition: 0.5s;
    width: 150px;
  }
  @media (max-width: 400px) {
    transition: 0.5s;
    width: 130px;
  }
`;
const ContentText02 = styled(Box)`
  display: flex;
  width: 35%;
  font-family: "Titillium Web";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  text-transform: uppercase;
  color: #444444;
  margin-top: 70px;
  @media (max-width: 1300px) {
    transition: 0.5s;
    font-size: 16px;
  }
  @media (max-width: 1000px) {
    transition: 0.5s;
    font-size: 15px;
    width: 70%;
  }
  @media (max-width: 700px) {
    transition: 0.5s;
    font-size: 13px;
  }
  @media (max-width: 500px) {
    transition: 0.5s;
    font-size: 10px;
  }
`;
const ContentText03 = styled(Box)`
  display: flex;
  width: 35%;
  font-family: "Titillium Web";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  text-transform: uppercase;
  color: #444444;
  margin-top: 50px;
  @media (max-width: 1300px) {
    transition: 0.5s;
    font-size: 16px;
  }
  @media (max-width: 1000px) {
    transition: 0.5s;
    font-size: 15px;
    width: 70%;
  }
  @media (max-width: 700px) {
    transition: 0.5s;
    font-size: 13px;
  }
  @media (max-width: 500px) {
    transition: 0.5s;
    font-size: 10px;
  }
`;
const PicPart01 = styled(Box)`
    display: flex;
    position: absolute;
    align-items: center;
    left: 38%;
    top: 61%;
    @media (max-width: 1770px) {
        transition: 0.5s;
    left: 37%;
    top: 60%;
  }
    @media (max-width: 1670px) {
        transition: 0.5s;
        left: 35%;
    top: 58%;
  }
    @media (max-width: 1500px) {
        transition: 0.5s;
        left: 33%;
        top: 57%;
  }
  @media (max-width: 800px) {
        transition: 0.5s;
        left: 35%;
        top: 60%;
  }
  @media (max-width: 450px) {
        transition: 0.5s;
        left: 40%;
        top: 60%;
  }
`
const Pic01 = styled(Box)`
    display: flex;
    border-radius: 100%;
    width: 152px;
    height: 152px;
    @media (max-width: 800px) {
        transition: 0.5s;
        width: 100px;
        height: 100px;

  }
  @media (max-width: 450px) {
        transition: 0.5s;
        width: 70px;
        height: 70px;
        top: 100px;
  }
`

const Pic02 = styled(Box)`
    display: flex;
    border-radius: 100%;
    position: absolute;
    left: -320px;
    top: -150px;
    width: 280px;
    height: 280px;
    @media (max-width: 1200px) {
        transition: 0.5s;
        left: -230px;
         top: -100px;
        width: 200px;
        height: 200px;
  }
    @media (max-width: 800px) {
        transition: 0.5s;
        left: -130px;
         top: -40px;
        width: 110px;
        height: 110px;
  }
  @media (max-width: 450px) {
        transition: 0.5s;
        left: -120px;
    top: 0px;

  }
`
const Pic03 = styled(Box)`
    display: flex;
    border-radius: 100%;
    position: absolute;
    left: -250px;
    bottom: -400px;
    width: 400px;
    height: 400px;
    @media (max-width: 1200px) {
        transition: 0.5s;
        left: -230px;
         top: 120px;
        width: 300px;
        height: 300px;
  }
    @media (max-width: 800px) {
        transition: 0.5s;
        left: -140px;
    bottom: -160px;
        width: 180px;
        height: 180px;
  }
  @media (max-width: 450px) {
        transition: 0.5s;
        left: -80px;
    bottom: -80px;

  }
`

const Line01 = styled(Box)`
    display: flex;
    width: 170px;
    height: 1px;
    border-bottom: 1px dashed #77BCB5;
    /* background-color: #6E5EE1; */
    margin-left: 20px;
    @media (max-width: 1330px) {
        transition: 0.5s;
        width: 150px;
  }
  @media (max-width: 1200px) {
        transition: 0.5s;
        width: 120px;
  }
  @media (max-width: 1000px) {
        transition: 0.5s;
        width: 90px;
  }
  @media (max-width: 650px) {
        transition: 0.5s;
        width: 50px;
  }
  @media (max-width: 450px) {
        transition: 0.5s;
        display: none;
  }
`
const Position01 = styled(Box)`
    display: flex;
    position: relative;
    width: 28px;
    height: 28px;
    /* border: 1px solid rgba(227, 61, 119, 0.3); */
    border-radius: 100%;
    justify-content: center;
    align-items: center;
    margin-left: 20px;
`
// const Circle01 = styled(Box)`
//     display: flex;
//     background: #E33D77;
//     border-radius: 100%;
//     width: 18px;
//     height: 18px;
// `
const PositionText01 = styled(Box)`
    display: flex;
    position: absolute;
    white-space: nowrap;
    bottom: -40px;
    font-family: 'Titillium Web';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 27px;
    /* text-align: center; */
    text-transform: uppercase;
    color: #858585;
    @media (max-width: 450px) {
        transition: 0.5s;
        left: 0px;
  }
  @media (max-width: 350px) {
        transition: 0.5s;
        left: -20px;
  }
`
const RoadMapPart01 = styled(Box)`
    display: flex;
    width: 100%;
    background-color: white;
    margin-top: 200px;
    justify-content: center;
    
`

const RoadDesktop = styled(Box)`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  @media (max-width: 1000px) {
        transition: 0.5s;
        display: none;
  }
`
// const RoadDesktop01 = styled(Box)`
//   display: flex;
//   width: 60%;
//   height: 1100px;
//   background-image: url(${IMG_ROADMAP});
//   background-size: 100% 100%;
//   background-repeat: no-repeat;
//   @media (max-width: 1400px) {
//         transition: 0.5s;
//         height: 1000px;
//     }
//     @media (max-width: 1200px) {
//         transition: 0.5s;
//         height: 900px;
//     }
//     @media (max-width: 1000px) {
//         transition: 0.5s;
//         display: none;
//     }

// `
const RoadMobile01 = styled(Box)`
  display: none;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 1000px) {
        transition: 0.5s;
        display: flex;
  }
`
const RoadPart02 = styled(Box)`
  display: flex;
  width: 100%;
  height: 900px;
  align-items: center;
  margin-top: 50px;
`
const LeftRoadmap = styled(Box)`
  display: flex;
  flex: 1;
  position: relative;
  height: 100%;
  width: 100%;
  justify-content: flex-end;
`

const CenterRoadmap = styled(Box)`
  display: flex;
  width: 26px;
  height: 100%;
`
const RightRoadmap = styled(Box)`
  display: flex;
  flex: 1;
  position: relative;  
  height: 100%;
  width: 100%;

`

const EachRoad01 = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 50px;
  align-items: center;
`
const EachRoad02 = styled(Box)`
  display: flex;
  width: 100%;
  position: absolute;
`
const EachRoad03 = styled(Box)`
  display: flex;
  width: 100%;
  position: absolute;
  justify-content: flex-end;
`

const EachRoadHeader = styled(Box)`
  display: flex;
  width: 150px;
  height: 50px;
  background-color: white;
  border: 1px dashed #303FBA;
  border-radius: 0px 20px 20px 0px;
  align-items: center;
  justify-content: center;
  font-family: 'Titillium Web';
  font-style: normal;
  font-weight: 700;
  font-size: 31px;
  line-height: 30px;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  @media (max-width: 700px) {
    transition: 0.5s;
    font-size: 25px;
    width: 120px;
    height: 40px;
  }
  @media (max-width: 500px) {
    transition: 0.5s;
    font-size: 22px;
    width: 100px;
    height: 30px;
  }
`

const EachRoadHeader01 = styled(Box)`
  display: flex;
  width: 150px;
  height: 50px;
  background-color: white;
  border: 1px dashed #303FBA;
  border-radius: 20px 0px 0px 20px;
  align-items: center;
  justify-content: center;
  font-family: 'Titillium Web';
  font-style: normal;
  font-weight: 700;
  font-size: 31px;
  line-height: 30px;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  @media (max-width: 700px) {
    transition: 0.5s;
    font-size: 25px;
    width: 120px;
    height: 40px;
  }
  @media (max-width: 500px) {
    transition: 0.5s;
    font-size: 22px;
    width: 100px;
    height: 30px;
  }
`
const EachRoadText = styled(Box)`
  display: flex;
  width: 50%;
  justify-content: flex-start;
  align-items: center;
  font-family: 'Titillium Web';
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  line-height: 29px;
  text-align: start;
  color: #444444;
  margin-top: 10px;
  @media (max-width: 700px) {
    transition: 0.5s;
    font-size: 17px;
    width: 60%;
  }
  @media (max-width: 500px) {
    transition: 0.5s;
    font-size: 14px;
  }
`

const EachRoadText1 = styled(Box)`
  display: flex;
  width: 80%;
  justify-content: flex-start;
  align-items: center;
  font-family: 'Titillium Web';
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  line-height: 29px;
  text-align: start;
  color: #444444;
  margin-top: 10px;
  @media (max-width: 700px) {
    transition: 0.5s;
    font-size: 17px;
    width: 60%;
  }
  @media (max-width: 500px) {
    transition: 0.5s;
    font-size: 14px;
  }
`
const EachRoadText2 = styled(Box)`
  display: flex;
  width: 80%;
  justify-content: flex-end;
  align-items: center;
  font-family: 'Titillium Web';
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  line-height: 29px;
  text-align: end;
  color: #444444;
  margin-top: 10px;
  @media (max-width: 700px) {
    transition: 0.5s;
    font-size: 17px;
    width: 60%;
  }
  @media (max-width: 500px) {
    transition: 0.5s;
    font-size: 14px;
  }
`

const HeadText04 = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-family: "Zen Tokyo Zoo";
  font-style: normal;
  font-weight: 400;
  font-size: 108px;
  text-transform: uppercase;
  

background: linear-gradient(271.82deg, rgba(40, 46, 183, 0.96) 12.47%, #21D9B8 92.58%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 1300px) {
    transition: 0.5s;
    font-weight: 400;
    font-size: 85px;
  }
  @media (max-width: 1000px) {
    transition: 0.5s;
    font-weight: 400;
    font-size: 70px;
  }
  @media (max-width: 700px) {
    transition: 0.5s;
    font-weight: 400;
    font-size: 50px;
  }
  @media (max-width: 500px) {
    transition: 0.5s;
    font-weight: 400;
    font-size: 40px;
    flex-direction: column;
  }
`;

const FAQPart01 = styled(Box)`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  background-color: white;
  margin-top: 200px;
`;
const TeamPart01 = styled(Box)`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  background-color: white;
  margin-top: 200px;
  
`;

const TeamPart02 = styled(Box)`
  display: grid;
  grid-template-columns: auto auto auto auto auto auto;
  /* justify-content: center;
  align-items: center; */
  @media (max-width: 1000px) {
    transition: 0.5s;
    grid-template-columns: auto auto auto;
    grid-row-gap: 50px;
  }
  @media (max-width: 500px) {
    transition: 0.5s;
    grid-template-columns: auto auto;
    grid-row-gap: 50px;
  }
  margin-top: 150px;
`;
const EachPart01 = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 50px;
  margin-right: 50px;
  @media (max-width: 1400px) {
    transition: 0.5s;
    margin-left: 30px;
    margin-right: 30px
  }
  @media (max-width: 1200px) {
    transition: 0.5s;
    margin-left: 20px;
    margin-right: 20px
  }
  @media (max-width: 1000px) {
    transition: 0.5s;
    margin-left: 50px;
    margin-right: 50px
  }
  @media (max-width: 700px) {
    transition: 0.5s;
    margin-left: 20px;
    margin-right: 20px
  }
  @media (max-width: 500px) {
    transition: 0.5s;
    margin-left: 30px;
    margin-right: 30px
  }
  @media (max-width: 350px) {
    transition: 0.5s;
    margin-left: 10px;
    margin-right: 10px
  }
`;
const Circle02 = styled(Box)`
  display: flex;
  width: 100px;
  height: 100px;
  text-align: center;
  background: #d9d9d9;
  border-radius: 100%;
  justify-content: center;
  align-items: center;
`;
const TeamText01 = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Titillium Web';
font-style: normal;
font-weight: 700;
font-size: 23px;
line-height: 35px;
align-items: center;
text-align: center;
text-transform: uppercase;
color: #444444;
  margin-top: 30px;
`;
const TeamText02 = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Titillium Web';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 21px;
/* identical to box height */
align-items: center;
text-align: center;

color: #444444;
  margin-top: 10px;
`;

const ModalComponent = styled(Box)`
  display: flex;
  transition: 1s;
  position: fixed;
  width: 300px;
  outline: none;
  height: 100%;
  flex-direction: column;
  align-items: center;
  background-color: white;
  font-family: "Titillium Web", sans-serif;
  color: #444444;
  @media (min-width: 1000px) {
    display: none;
  }
`;
const MarkImg = styled(Box)`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

const MarkLetter = styled(Box)`
  display: flex;
  justify-content: content;
  margin-top: 10px;
  /* color: white; */
  font-size: 2.5rem;
  font-weight: 600;
`;
// const TxtWalletAddress = styled(Box)`
//   display: flex;
//   justify-content: center;
//   color: white;
//   font-size: 1rem;
//   margin-top: 5px;
// `;
const LinkList = styled(Box)`
  display: flex;
  width: 80%;
  flex-direction: column;
  /* color: white; */
  margin-top: 30px;
`;

const EachLink02Txt = styled(Box)`
  display: flex;
  margin-left: 15px;
  font-size: 1.3rem;
  /* font-weight: bold; */
`;

const ContactList = styled(Box)`
  display: flex;
  position: fixed;
  bottom: 15px;
  min-width: 300px;
  left: 0px;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  color: rgb(104, 106, 116);
`;

const ContactBox = styled(Box)`
  display: flex;
  &:hover {
    cursor: pointer;
    color: rgb(249, 205, 128);
  }
`;
// const Statistics = styled(Box)`
//   display: grid;
//   grid-template-columns: auto auto auto;
//   width: 80%;
//   height: 200px;
//   margin-top: 50px;
//   border-radius: 10px;
//   background-color: rgb(32, 38, 46);
//   @media (max-width: 700px) {
//     transition: 0.5s;
//     grid-template-columns: auto auto;
//   }
//   @media (max-width: 500px) {
//     transition: 0.5s;
//     grid-template-columns: auto;
//     height: 320px;
//   }
// `;

const CustomBtn2 = styled(Box)`
  display: none;
  /* position: fixed; */
  width: 32px;
  height: 32px;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 6px;
  border: none;
  background-color: black;
  /* background-color: rgb(34, 37, 46); */
  color: white;
  transition: 0.3s;
  &:hover {
    cursor: pointer;
    transition: 0.5s;
    background-color: #444444;
  }
  @media (max-width: 1200px) {
    display: flex;
  }
`;

const EachLink01 = styled(Box)`
    display: flex;
    margin-top: 15px;
    margin-bottom: 15px;
    margin-left: 30px;
    align-items: center;
    &:hover{
        cursor: pointer;
        transition: 0.5s;
        color: rgb(249,205,128);
    }
`

const ImageShowPart01 = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top:50px;

`
const TopImagePart01 = styled(Box)`
  display: flex;
  width:100%;
  @media (max-width: 1200px) {
    display: none;
  }
`
const LeftImagePart01 = styled(Box)`
  display: flex;
  flex: 2;
  width: 100%;
  margin-right: 30px;
  &:hover{
    cursor: pointer;
    box-shadow: 0px 0px 30px grey;
  }
`
const RightImagePart01 = styled(Box)`
  display: flex;
  flex:1;
  width:100%;
  flex-direction: column;
`
const TopImagePart02 = styled(Box)`
  display: flex;
  width:100%;
  flex:1;
  &:hover{
    cursor: pointer;
    box-shadow: 0px 0px 30px grey;
  }
`
const DownImagePart02 = styled(Box)`
  display: flex;
  width:100%;
  flex:1;
  margin-top: 30px;
  &:hover{
    cursor: pointer;
    box-shadow: 0px 0px 30px grey;
  }
`
const DownImagePart01 = styled(Box)`
  display: flex;
  width: 100%;
  margin-top:30px;
  @media (max-width: 700px) {
    display: none;
  }
`
const DownImagePart03 = styled(Box)`
  display: none;
  width: 100%;
  margin-top:30px;
  @media (max-width: 700px) {
    display: flex;
  }
`
const LocationTxt01 = styled(Box)`
  display: flex;
  margin-top: 10px;
font-family: 'Titillium Web';
font-style: normal;
font-weight: 700;
font-size: 19px;
line-height: 29px;
/* identical to box height */

text-align: center;
text-transform: uppercase;
color: #444444 !important;
`
const SideScrollBar01 = styled(Box)`
  display: flex;
  position: fixed;
  right: 10%;
  top:50%;
  transition: .5s;
  z-index: 100;
`
const FullGalleryBox = styled(Box)`
  display: flex;
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 80vh;
  z-index: 120;
`
const LeftBtn01 = styled(Box)`
  display: flex;
  width: 60px;
  height: 60px;
  position: fixed;
  left: 5%;
  bottom: 25%;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background-color: white;
  color: black;
  font-size: 3rem;
  &:hover{
    cursor: pointer;
  }
`

const RightBtn01 = styled(Box)`
  display: flex;
  width: 60px;
  height: 60px;
  position: fixed;
  right: 5%;
  bottom: 25%;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background-color: white;
  color: black;
  font-size: 3rem;
  &:hover{
    cursor: pointer;
  }
`
const ExitBtn01 = styled(Box)`
  display: flex;
  width: 60px;
  height: 60px;
  position: fixed;
  right: 5%;
  top: 15%;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background-color: white;
  color: black;
  font-size: 3rem;
  &:hover{
    cursor: pointer;
  }
`
const ImageShow01 = styled(Box)`
  display: flex;
  position: fixed;
  width: 100%;
  height: 20vh;
  left: 0px;
  bottom: 0px;
`
const EachIamge01 = styled(Box)`
  display: flex;
  flex: 1;
  width: 100%;
  height: 100%;
  border: 2px 2px 2px 0px solid black;
`

export default Content;
