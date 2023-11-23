/* eslint-disable no-unused-vars */
import React from "react";
import Login from "../components/formLogin";

export default function LoginForm() {
  return (
    <>
      <Login formTitle="Welcome" formSubtitle="Log in into your existing account" buttonText="Log In" isLogin={true} />
    </>
  );
}
