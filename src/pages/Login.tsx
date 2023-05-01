import { TextField, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import { emailValidator, passwordValidator } from "../util/validator";
import { Link } from "react-router-dom";

const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [validData, setValidData] = useState({
    isEmailValid: false,
    isPasswordValid: false,
  });
  const isNotEnterEmail = inputs.email.length === 0;
  const isNotEnterPassword = inputs.password.length === 0;

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    emailValidator(e.target.value)
      ? setValidData((p) => ({ ...p, isEmailValid: true }))
      : setValidData((p) => ({ ...p, isEmailValid: false }));
    setInputs((p) => ({ ...p, email: e.target.value }));
  };
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    passwordValidator(e.target.value)
      ? setValidData((p) => ({ ...p, isPasswordValid: true }))
      : setValidData((p) => ({ ...p, isPasswordValid: false }));
    setInputs((p) => ({ ...p, password: e.target.value }));
  };

  return (
    <Container>
      <Typography textAlign="center" variant="h4">
        로그인
      </Typography>
      <TextField
        label="Email"
        value={inputs.email}
        onChange={onChangeEmail}
        error={isNotEnterEmail ? false : !validData.isEmailValid}
        helperText={
          isNotEnterEmail || validData.isEmailValid
            ? ""
            : "이메일 형식에 맞게 입력해주세요."
        }
      />
      <TextField
        type="password"
        label="Password"
        value={inputs.password}
        onChange={onChangePassword}
        error={isNotEnterPassword ? false : !validData.isPasswordValid}
        helperText={
          isNotEnterPassword || validData.isPasswordValid
            ? ""
            : "비밀번호는 8자리 이상이어야 합니다."
        }
      />
      <Button size="large" variant="contained">
        로그인
      </Button>
      <Typography textAlign="center" variant="caption">
        아이디가 없으신가요?{" "}
        <UnderLineTypography variant="button">
          <Link to={"/auth/signup"}>회원가입</Link>
        </UnderLineTypography>
      </Typography>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  width: 300px;
  gap: 20px;
  margin: 0 auto;
`;

const UnderLineTypography = styled(Typography)`
  :hover {
    cursor: pointer;
  }
`;
