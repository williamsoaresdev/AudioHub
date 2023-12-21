import React from "react";
import ContentBackground from "../../components/ContentBackground";
import LoginForm from "../../components/LoginForm";

const Login = () => {
  return (
    <ContentBackground>
      <LoginForm isLogin={true} />
    </ContentBackground>
  );
};

export default Login;
