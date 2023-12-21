import React from "react";
import ContentBackground from "../../components/ContentBackground";
import LoginForm from "../../components/LoginForm";

const Registration = () => {
  return (
    <ContentBackground>
      <LoginForm isLogin={false} />
    </ContentBackground>
  );
};

export default Registration;
