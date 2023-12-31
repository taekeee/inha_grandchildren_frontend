import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import { useMediaQuery } from "react-responsive";
import Swal from "sweetalert2";

const Img = styled.img`
  content: url(startPageLogo.png);
  width: 47vw;
  height: 30vh;
  height: auto;
  @media (orientation: landscape) {
    height: 50vh;
    width: 18vw;
    padding: 2%;
  }
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding-top: 22vh;
  overflow: hidden; /* Hide any overflow to prevent scrolling */
  @media (orientation: landscape) {
    height: 100vh;
    padding: 0%;
    padding-top: 4%;
  }
  font-family: "MICE";
`;

const MainButton = styled.div`
  border: 2px solid #ff8057;
  border-radius: 7px;
  color: #df7857;
  padding: 4%;
  font-weight: bold;
  margin-top: 5vh;
  margin-bottom: 10vh;
  @media (orientation: landscape) {
    margin-top: 0.1%;
    padding: 1%;
    margin-bottom: 3.5%;
  }

  &:hover {
    transition: 0.1s;
    color: #ffbca7;
  }
`;

const CopyBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CopyRightImg = styled.img`
  margin-right: 2%;
`;

const CopyRightText = styled.p`
  font-size: 0.8rem;
  font-weight: lighter;
  color: #df7857;
  white-space: nowrap;
`;

const StartPage = () => {
  const navigate = useNavigate();
  const [isNew, SetIsNew] = useState("");
  document.body.style = "background: white;";

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  const alertPC = () => {
    Swal.fire({
      title: "잠시만요!",
      html: "F12를 눌러 Toggle device toolbar를 통해 모바일 모드로 보시는 걸 권장합니다. <br/><br/>( 단축키 : F12 -> Ctrl+Shift+M )",
      icon: "warning",
      confirmButtonText: "확인",
      confirmButtonColor: "#798560",
    });
    localStorage.setItem("isAlerted", true);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    if (isDesktopOrLaptop && localStorage.getItem("isAlerted") == null) {
      alertPC();
    }
    SetIsNew(localStorage.getItem("IsNew"));
    let isRecoArr = localStorage.getItem("isRecoArr");

    if (isRecoArr == null) {
      let arr = new Array(100).fill(false);
      localStorage.setItem("isRecoArr", JSON.stringify(arr));
    }
  }, []);

  const GoToMain = () => {
    if (isNew == null || isNew == "true") {
      localStorage.setItem("IsNew", true);
      navigate(`/FontSizeSettingForNew`);
    } else {
      navigate(`/Main`);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Div>
        <Img />
        <MainButton onClick={GoToMain}>시작하기</MainButton>
        <CopyBox>
          <CopyRightImg src="/copyright_color.svg" />
          <CopyRightText>
            INHA_GRANDCHILDREN. All Rights Reserved.
          </CopyRightText>
        </CopyBox>
      </Div>
    </motion.div>
  );
};

export default StartPage;
