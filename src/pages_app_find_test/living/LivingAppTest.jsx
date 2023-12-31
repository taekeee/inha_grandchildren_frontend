import React, { useContext } from "react";
import styled from "styled-components";
import GrayNavigator from "../GrayNavigator";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { FontSizeContext } from "../../pages_font_context/FontSizeProvider";
import UnderNavigator from "../UnderNavigator";

const BackGround = styled.div`
  /* background-color: #f7f7f7;
  background-size: cover;
  width: 100vw;
  @media (orientation: portrait) {
    height: 100%;
  }
  margin: 0; */
  font-family: "MICE";
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Flex = styled.div`
  flex: 1;
`;

const MidBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20%;
  margin-bottom: 9%;
`;

const ImgArea = styled.img``;
const MainText = styled.p`
  margin-top: 5%;
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
  text-align: center;
  font-weight: 600;
`;

const HighLight = styled.span`
  font-weight: 900;
  font-size: ${(props) => {
    switch (props.fS) {
      case "normal":
        return "1.7rem";
      case "large":
        return "2.0rem";
      case "veryLarge":
        return "2.3rem";
    }
  }};
`;

const SubText = styled.p`
  margin-top: 3%;
  margin-left: 5%;
  margin-right: 5%;
  font-size: ${(props) => {
    switch (props.fS) {
      case "normal":
        return "1.2rem";
      case "large":
        return "1.5rem";
      case "veryLarge":
        return "1.8rem";
    }
  }};
  font-weight: bold;
  color: rgba(0, 0, 0, 0.47);
`;

const SelectBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 3%;
`;
const Row1 = styled.div`
  display: flex;
  @media (orientation: portrait) {
    /* Set the height specifically for portrait mode */
    height: 15vh;
  }
  @media (orientation: landscape) {
    /* Set the height specifically for portrait mode */
    height: 50vh;
  }
`;

const Row2 = styled.div`
  display: flex;
  @media (orientation: portrait) {
    /* Set the height specifically for portrait mode */
    height: 15vh;
  }
  @media (orientation: landscape) {
    /* Set the height specifically for portrait mode */
    height: 50vh;
  }
`;

const Row3 = styled.div`
  display: flex;
  @media (orientation: portrait) {
    /* Set the height specifically for portrait mode */
    height: 15vh;
  }
  @media (orientation: landscape) {
    /* Set the height specifically for portrait mode */
    height: 50vh;
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  box-shadow: 2px 4px 2px rgba(0, 0, 0, 0.07);
  border-radius: 10px;
  border: none;
  width: 46vw;
  margin: 3%;
  padding: 2%;
  &:hover {
    transition: 0.1s;
    background-color: ${({ clicked }) => (clicked ? "#EFC5B9" : "#FFFFFF")};
  }
`;

const SelText = styled.p`
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
  font-weight: bold;
`;

const LivingAppTest = () => {
  const navigate = useNavigate();
  const [isBoxClicked, setIsBoxClicked] = useState(false);
  const { fontSize, setFontSize } = useContext(FontSizeContext);
  document.body.style = "background: #f7f7f7;";

  useEffect(() => {
    // 페이지가 렌더링될 때 스크롤 위치를 맨 위로 이동
    window.scrollTo(0, 0);
  }, []);

  const GoToFinancePage = () => {
    setIsBoxClicked(true);
    setTimeout(() => {
      setIsBoxClicked(false);
      navigate(`/FinanceAppsFind`);
    }, 100);
  };

  const GoToWeatherPage = () => {
    setIsBoxClicked(true);
    setTimeout(() => {
      setIsBoxClicked(false);
      navigate(`/FindAnalyze/날씨`);
    }, 100);
  };

  const GoToSearchLoadPage = () => {
    setIsBoxClicked(true);
    setTimeout(() => {
      setIsBoxClicked(false);
      navigate(`/SearchLoadsAppsFind`);
    }, 100);
  };

  const GoToDeliveryPage = () => {
    setIsBoxClicked(true);
    setTimeout(() => {
      setIsBoxClicked(false);
      navigate(`/DeliveryAppsFind`);
    }, 100);
  };

  const GoToSchedulePage = () => {
    setIsBoxClicked(true);
    setTimeout(() => {
      setIsBoxClicked(false);
      navigate(`/FindAnalyze/일정 관리`);
    }, 100);
  };

  return (
    <>
      <BackGround>
        <Flex>
          <GrayNavigator />
          <MidBox>
            <ImgArea src="/hi.svg" />
            <MainText fS={fontSize}>
              지금 <HighLight fS={fontSize}>필요하신 것</HighLight>이<br />
              무엇인가요?
            </MainText>
            <SubText fS={fontSize}>아래의 버튼 중 하나를 선택해주세요.</SubText>
          </MidBox>
          <SelectBox>
            <Row1>
              <Box
                onTouchEnd={GoToFinancePage}
                onClick={GoToFinancePage}
                clicked={isBoxClicked}
              >
                <SelText fS={fontSize}>금융</SelText>
              </Box>
              <Box
                onTouchEnd={GoToWeatherPage}
                onClick={GoToWeatherPage}
                clicked={isBoxClicked}
              >
                <SelText fS={fontSize}>날씨</SelText>
              </Box>
            </Row1>

            <Row2>
              <Box
                onTouchEnd={GoToSearchLoadPage}
                onClick={GoToSearchLoadPage}
                clicked={isBoxClicked}
              >
                <SelText fS={fontSize}>길 찾기</SelText>
              </Box>
              <Box
                onTouchEnd={GoToDeliveryPage}
                onClick={GoToDeliveryPage}
                clicked={isBoxClicked}
              >
                <SelText fS={fontSize}>
                  배달 및<br /> 배송
                </SelText>
              </Box>
            </Row2>

            <Row3>
              <Box
                onTouchEnd={GoToSchedulePage}
                onClick={GoToSchedulePage}
                clicked={isBoxClicked}
              >
                <SelText fS={fontSize}>일정 관리</SelText>
              </Box>
            </Row3>
          </SelectBox>
        </Flex>
        <UnderNavigator />
      </BackGround>
    </>
  );
};

export default LivingAppTest;
