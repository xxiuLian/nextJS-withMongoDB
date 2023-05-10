"use client";

import { signIn, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
const LoginBtn = ({ session }) => {
  const [visible, setVisible] = useState(false);
  const onChange = () => {
    {
      session == "" || session == null || session == undefined
        ? setVisible(false)
        : setVisible(true);
    }
  };
  useEffect(() => {
    onChange();
  }, []);
  return (
    <div>
      {session == "" || session == null || session == undefined ? (
        <button
          className={visible ? "displayIsNone" : ""}
          onClick={() => {
            signIn();
          }}
          onChange={() => {
            onChange();
          }}
        >
          로그인
        </button>
      ) : (
        <p>{session.user.email}님 환영</p>
      )}

      {session ? (
        <button
          onClick={() => {
            signOut();
          }}
        >
          로그아웃
        </button>
      ) : null}
    </div>
  );
};

export default LoginBtn;
