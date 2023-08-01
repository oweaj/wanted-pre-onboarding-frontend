import Header from "../../components/Header/Header";
import { Input, Button } from "../../components/Item/Item";
import { Link, useNavigate } from "react-router-dom";
import useInput from "../../hooks/useInput";
import axios from "axios";
import { useEffect, useState } from "react";

const Signin = () => {
  const [active, setActive] = useState(false);
  const email = useInput();
  const password = useInput();
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    try {
      const url = `${process.env.REACT_APP_API_URL}/auth/signin`;
      const response = await axios.post(
        url,
        {
          email: email.data,
          password: password.data,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      localStorage.setItem("token", response.data.access_token);
      navigate("/todo");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    email.state && password.state ? setActive(true) : setActive(false);
  }, [email.state, password.state]);

  return (
    <div className="contentStyle">
      <Header title="로그인" />
      <form className="flex flex-col gap-4">
        <Input title="이메일" id="email-input" onChange={email.onChange} value={email.data} />
        <Input title="비밀번호" id="password-input" onChange={password.onChange} value={password.data} />
        <Button type="submit" title="로그인" id="signin-button" onClick={login} active={active} />
        <Link to="/signup" className="buttonStyle flex items-center justify-center bg-green-500">
          회원가입 페이지로 이동
        </Link>
      </form>
    </div>
  );
};

export default Signin;
