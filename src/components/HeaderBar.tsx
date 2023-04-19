import React, { useState } from "react";
import styled from "styled-components";
import { useRouter } from "../hooks/useRouter";
import { blueButton } from "../style/blue";
import { flexCenter } from "../style/flex";

const HeaderBar = (Content: any) => {
  // 유저 정보를 확인하고 유저 정보가 있다면 로그인 버튼 대신 유저 정보를 보여준다.
  const [user, setUser] = useState(false);
  const { routeTo } = useRouter();

  return (
    <Container>
      <Wrapper>
        <Logo onClick={() => routeTo("/")}>logo</Logo>
        <Gnb>
          <div>Q&A</div>
          <div>지식</div>
          <div onClick={() => routeTo("/community")}>커뮤니티</div>
          <div>공지사항</div>
          {user ? null : <LoginButton>로그인</LoginButton>}
        </Gnb>
      </Wrapper>
    </Container>
  );
};

const Container = styled.header`
  ${flexCenter}
  position: sticky;
  top: 0px;
  width: 100%;
  height: 60px;
  box-shadow: 0 2px 5px rgba(130, 130, 130, 0.1);
  background-color: white;
`;

const Wrapper = styled.nav`
  ${flexCenter}
  justify-content: space-between;
  width: 100%;
  max-width: 1300px;
  padding: 20px 15px;
  z-index: 99;
`;

const Gnb = styled.div`
  ${flexCenter}
  max-width: 600px;
  justify-content: space-between;
  margin-left: 50px;
  width: 100%;
  div {
    cursor: pointer;
  }
`;

const Logo = styled.div`
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
`;
const LoginButton = styled.button`
  ${flexCenter}
  ${blueButton}
  width: 85px;
  height: 35px;
`;

export default HeaderBar;
