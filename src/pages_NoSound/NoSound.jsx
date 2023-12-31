import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ReactPlayer from "react-player/lazy";
import Navigator from "../Navigator";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { FontSizeContext } from "../pages_font_context/FontSizeProvider";
import GrayNavigator from "../pages_app_find_test/GrayNavigator";
import ContactUs from "../ContactUs";
import { Fade } from "react-awesome-reveal";

const Text = styled.p`
  /* font-size: 1.6rem; */
  font-weight: bold;
  margin-top: 8%;
  margin-left: 5%;
  margin-right: 5%;
  text-align: center;
  font-family: "MICE";
  font-size: ${(props) => {
    switch (props.fS) {
      case "normal":
        return "1.6rem";
      case "large":
        return "1.9rem";
      case "veryLarge":
        return "2.2rem";
    }
  }};
`;

const SText = styled.p`
  /* font-size: 1.4rem; */
  margin-left: 5%;
  margin-right: 5%;
  font-size: ${(props) => {
    switch (props.fS) {
      case "normal":
        return "1.4rem";
      case "large":
        return "1.6rem";
      case "veryLarge":
        return "1.9rem";
    }
  }};
`;

const SsText = styled.p`
  /* font-size: 1rem; */
  text-align: center;
  margin-bottom: 3%;
  font-size: ${(props) => {
    switch (props.fS) {
      case "normal":
        return "1rem";
      case "large":
        return "1.3rem";
      case "veryLarge":
        return "1.6rem";
    }
  }};
`;

const Highlighter = styled.span`
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 68%, #ffd05d 50%);
  border-radius: 3px;
`;

const Highlighter2 = styled.span`
  font-weight: bolder;
  color: #f68858;
`;

const Icon1 = styled.img`
  width: 25%;
  height: 25%;
`;

const Icon = styled.img`
  width: 10%;
  height: 10%;
  margin-left: 30%;
`;

const Div = styled.div`
  display: flex;
`;
const Img = styled.img`
  width: 80%;
  height: 80%;
  /* margin-left: 10%; */
  /* margin-top: 10%; */
  margin-bottom: 15%;
`;
const Box1 = styled.div`
  width: 94%;
  background-color: rgba(242, 243, 245, 1);
  border-radius: 20px;
  padding-left: 5%;
  padding-right: 5%;
`;
const Box2 = styled.div`
  width: 94%;
  background-color: rgba(233, 243, 253, 1);
  border-radius: 20px;
  padding-left: 5%;
  padding-right: 5%;
`;
const Box3 = styled.div`
  width: 94%;
  background-color: rgba(255, 250, 231, 1);
  border-radius: 20px;
  padding-left: 5%;
  padding-right: 5%;
`;
const Box4 = styled.div`
  width: 94%;
  background-color: rgba(240, 249, 246, 1);
  border-radius: 20px;
  padding-left: 5%;
  padding-right: 5%;
`;
const BackGround = styled.div`
  background-image: url(/mainBackground.png);
  background-size: cover;
  border-radius: 0 0 50px 60px / 0 0 12px 19px;
  @media (orientation: portrait) {
    height: 35vh;
  }
  @media (orientation: landscape) {
    height: 170vh;
  }
  font-family: "MICE";
`;
const Img2 = styled.img`
  width: 100%;
  height: 100%;
  /* margin-left: 5%; */
  //margin-top: 10%;
  margin-bottom: 15%;
`;
const InText = styled.div`
  padding-left: 5%;
  padding-right: 5%;
  /* font-size: 1.4rem; */
  text-align: center;
  padding-top: 3%;
  font-size: ${(props) => {
    switch (props.fS) {
      case "normal":
        return "1.4rem";
      case "large":
        return "1.7rem";
      case "veryLarge":
        return "2rem";
    }
  }};
`;

const ImgIcon = styled.img`
  padding-top: 5%;
  width: 14%;
`;

const ImgIcon2 = styled.img`
  padding-top: 7%;
  padding-right: 75%;
  width: 14%;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NoSound = () => {
  const { fontSize, setFontSize } = useContext(FontSizeContext);
  document.body.style = "background: white;";

  useEffect(() => {
    // 페이지가 렌더링될 때 스크롤 위치를 맨 위로 이동
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* <BackGround> */}
      <GrayNavigator />
      <Text fS={fontSize}>
        혹시 아래와 같은 <br />
        <Highlighter>삼성 인터넷</Highlighter>을 쓰시나요?
        <br />
        <Div>
          <Icon src="/Arrow.svg"></Icon>
          <Icon1 src="/II.svg"></Icon1>
        </Div>
        <SText fS={fontSize}>
          {" "}
          <br />
          그렇다면, 아래와 같은 방법으로 설정해보세요! <br />
          <br />
          <Col>
            <Box1>
              <ImgIcon src="/number1.svg" />
              <InText fS={fontSize}>
                아래의 빨간 동그라미 안 버튼을 눌러주세요.{" "}
              </InText>
              <br />
              <Img src="/phone-removebg-preview.png"></Img>
            </Box1>
          </Col>
          <br />
          <Fade direction="up" triggerOnce="true">
            <Col>
              <Box2>
                <ImgIcon src="/number2.svg" />
                <InText fS={fontSize}>
                  아래의 빨간 동그라미 <Highlighter>'설정'</Highlighter>을
                  눌러주세요.
                </InText>
                <br />
                <Img src="/phone2-removebg-preview.png"></Img>
              </Box2>
            </Col>
          </Fade>
          <br />
          <Fade direction="up" triggerOnce="true">
            <div>
              <Col>
                <Box3>
                  <ImgIcon src="/number3.svg" />
                  <InText fS={fontSize}>
                    아래로 내려 <Highlighter>‘유용한 기능’</Highlighter>을 찾아
                    클릭해주세요!
                  </InText>
                  <br />
                  <Img2 src="/30.svg"></Img2>
                </Box3>
              </Col>
            </div>
          </Fade>
          <br />
          <Fade direction="up" triggerOnce="true">
            <div>
              <Col>
                <Box4>
                  <ImgIcon src="/number4.svg" />
                  <InText fS={fontSize}>
                    이제 마지막 단계입니다. <br />
                    <Highlighter>‘동영상 자동 재생 허용’</Highlighter> 버튼을
                    눌러주세요!
                  </InText>
                  <br />
                  <Img2 src="/40.svg"></Img2>
                </Box4>
              </Col>
            </div>
          </Fade>
          <br />
        </SText>
        <SsText fS={fontSize}>
          그래도 소리가 나오지 않는다면
          <br />
          아래의 고객센터로 문의해주세요. 🤗
        </SsText>
      </Text>
      {/* </BackGround> */}
      <ContactUs />
    </div>
  );
};

export default NoSound;
