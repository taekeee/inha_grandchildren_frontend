import React, { useContext } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { FontSizeContext } from "../pages_font_context/FontSizeProvider";
import Swal from "sweetalert2";
import { useLocation } from "react-router-dom";

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 4.8%;
  padding-right: 4.8%;
  padding-top: 7%;
  font-family: "MICE";
`;
const SoundBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SoundImg = styled.img`
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

const SoundText = styled.p`
  color: white;
  /* font-size: 1rem; */
  font-size: ${(props) => {
    switch (props.fS) {
      case "normal":
        return "1rem";
      case "large":
        return "1.2rem";
      case "veryLarge":
        return "1.3rem";
    }
  }};
`;

const CheckSamsungInternet = styled.p`
  color: white;
  /* font-size: 1rem; */
  font-size: ${(props) => {
    switch (props.fS) {
      case "normal":
        return "1.1rem";
      case "large":
        return "1.2rem";
      case "veryLarge":
        return "1.3rem";
    }
  }};
  padding-top: 2%;
`;

const HomeNavigator = () => {
  //초기에 localStorage에 저장된 soundOff key값을 가져온다.
  const initialSoundOffValue = localStorage.getItem("soundOff") === "true"; // 문자열을 불리언으로 변환
  const [isSoundOffClicked, setSoundOffClicked] =
    useState(initialSoundOffValue);
  const { fontSize, setFontSize } = useContext(FontSizeContext);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(isSoundOffClicked);
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance();
    window.scrollTo(0, 0);
    const speakText = (text) => {
      utterance.text = text;
      utterance.rate = 0.8;
      synth.speak(utterance);
    };

    if (isSoundOffClicked) {
      synth.cancel();
    } else if (
      location.pathname.toLowerCase() === "/main" ||
      location.pathname === "/Main"
    ) {
      console.log(location.pathname);
      speakText("하단의 버튼을 클릭하여, 원하시는 서비스를 선택해주세요.");
    }

    return () => {
      synth.cancel();
    };
  }, [isSoundOffClicked, location.pathname]);

  //소리버튼 클릭 시, 현재와 반대로 설정.
  const handleControlSound = () => {
    setSoundOffClicked(!isSoundOffClicked);
    localStorage.setItem("soundOff", !isSoundOffClicked);

    const Toast = Swal.mixin({
      toast: true,
      position: "top",
      showConfirmButton: false,
      timer: 1000,
      timerProgressBar: false,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    isSoundOffClicked === true
      ? Toast.fire({
          icon: "success",
          title: "이제 소리가 나와요.",
        })
      : Toast.fire({
          icon: "success",
          title: "이제 소리가 나오지 않아요.",
        });
  };

  return (
    <>
      <Box>
        <CheckSamsungInternet
          fS={fontSize}
          onClick={() => navigate("/NoSound")}
        >
          혹시, 소리가 안 나오시나요?
        </CheckSamsungInternet>
        <SoundBox onClick={handleControlSound}>
          <SoundImg
            fS={fontSize}
            src={isSoundOffClicked ? "/soundoff_white.svg" : "/sound.svg"}
          />
          <SoundText fS={fontSize}>
            {isSoundOffClicked ? "소리 켜기" : "소리 끄기"}
          </SoundText>
        </SoundBox>
      </Box>
    </>
  );
};

export default HomeNavigator;
