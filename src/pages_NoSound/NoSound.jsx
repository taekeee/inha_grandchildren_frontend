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

const Text = styled.p`
  font-size: 1.6rem;
  font-weight: bold;
  margin-top: 8%;
  margin-left: 5%;
  margin-right: 5%;
  text-align: center;
`;

const SText = styled.p`
  font-size: 1.4rem;
  margin-left: 5%;
  margin-right: 5%;
`;

const SsText = styled.p`
  font-size: 1rem;
  text-align: center;
  margin-bottom: 3%;
`;

const Highlighter = styled.span`
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 68%, #ffd05d 50%);
  border-radius: 3px;
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
  margin-top: 10%;
  margin-bottom: 15%;
`;
const Box1 = styled.div`
  width: 90%;
  background-color: rgba(242, 243, 245, 1);
  border-radius: 20px;
  margin-left: 5%;
`;
const Box2 = styled.div`
  width: 90%;
  background-color: rgba(233, 243, 253, 1);
  border-radius: 20px;
  margin-left: 5%;
`;
const Box3 = styled.div`
  width: 90%;
  background-color: rgba(255, 250, 231, 1);
  border-radius: 20px;
  margin-left: 5%;
`;
const Box4 = styled.div`
  width: 90%;
  background-color: rgba(240, 249, 246, 1);
  border-radius: 20px;
  margin-left: 5%;
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
  margin-top: 10%;
  margin-bottom: 15%;
`;
const InText = styled.div`
  padding-left: 5%;
  padding-right: 5%;
  font-size: 1.4rem;
  text-align: left;
  padding-top: 15%;
`;
const NoSound = () => {
  return (
    <div>
      {/* <BackGround> */}
      <GrayNavigator />
      <Text>
        혹시 아래와 같은 <br />
        <Highlighter>삼성 인터넷</Highlighter>을 쓰시나요?
        <br />
        <Div>
          <Icon src="/Arrow.svg"></Icon>
          <Icon1 src="/II.svg"></Icon1>
        </Div>
        <SText>
          {" "}
          <br />
          그렇다면, 아래와 같은 방법으로 설정해보세요! <br />
          <br />
          <Box1>
            <InText>1. 아래의 빨간 동그라미 안 버튼을 눌러주세요. </InText>
            <br />
            <Img src="/1.svg"></Img>
          </Box1>
          <br />
          <Box2>
            <InText>
              2. 아래의 빨간 동그라미 <Highlighter>'설정'</Highlighter>을
              눌러주세요.
            </InText>
            <br />
            <Img src="/20.svg"></Img>
          </Box2>
          <br />
          <Box3>
            <InText>
              3. 아래로 내려 <Highlighter>‘유용한 기능’</Highlighter>을 찾아
              클릭해주세요!
            </InText>
            <br />
            <Img2 src="/30.svg"></Img2>
          </Box3>
          <br />
          <Box4>
            <InText>
              4. 이제 마지막 단계입니다. <br />
              <Highlighter>‘동영상 자동 재생 허용’</Highlighter> 버튼을
              눌러주세요!
            </InText>
            <br />
            <Img2 src="/40.svg"></Img2>
          </Box4>
          <br />
        </SText>
        <SsText>
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