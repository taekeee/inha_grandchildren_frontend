import React, { useContext } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { FontSizeContext } from "./pages_font_context/FontSizeProvider";

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 4.8%;
  padding-right: 4.8%;
  padding-top: 7%;
  font-family: "MICE";
`;

const BackBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BackImg = styled.img`
  width: ${(props) => {
    switch (props.fS) {
      case "normal":
        return "30px";
      case "large":
        return "36px";
      case "veryLarge":
        return "45px";
    }
  }};
  height: ${(props) => {
    switch (props.fS) {
      case "normal":
        return "24px";
      case "large":
        return "27px";
      case "veryLarge":
        return "34px";
    }
  }};
  margin-bottom: 7px;
`;

const BackText = styled.p`
  color: white;
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

const BackNavigator = () => {
  const navigate = useNavigate();
  const [isBackClicked, setBackClicked] = useState(false);
  const [isSoundClicked, setSoundClicked] = useState(false);
  const { fontSize, setFontSize } = useContext(FontSizeContext);

  const GoToBack = () => {
    setBackClicked(true);
    setTimeout(() => {
      navigate(-1);
    }, 250);
  };

  useEffect(() => {
    if (isBackClicked) {
      setBackClicked(false);
    }
  }, [isBackClicked]);

  useEffect(() => {
    if (isSoundClicked) {
      setSoundClicked(false);
    }
  }, [isSoundClicked]);

  return (
    <>
      <Box>
        <BackBox onClick={GoToBack}>
          <BackImg fS={fontSize} src="/back.svg" />
          <BackText fS={fontSize} clicked={isBackClicked}>
            돌아가기
          </BackText>
        </BackBox>
      </Box>
    </>
  );
};

export default BackNavigator;
