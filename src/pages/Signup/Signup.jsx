import Header from "../../components/Header/Header";
import { Input, Button } from "../../components/Item/Item";
import { API_URL } from "../../api/api";
import useInput from "../../hooks/useInput";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const Signup = () => {
  const [active, setActive] = useState(false);
  const email = useInput();
  const password = useInput();
  const navigate = useNavigate();

  const register = async (e) => {
    e.preventDefault();
    try {
      const url = `${API_URL}/auth/signup`;
      await axios.post(
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
      navigate("/signin");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    email.state && password.state ? setActive(true) : setActive(false);
  }, [email.state, password.state]);

  return (
    <div className="contentStyle">
      <Header title="회원가입" />
      <form className="flex flex-col gap-4">
        <Input title="이메일" id="email-input" onChange={email.onChange} value={email.data} />
        <Input title="비밀번호" id="password-input" onChange={password.onChange} value={password.data} />
        <Button type="submit" title="회원가입" id="signup-button" onClick={register} active={active} />
      </form>
    </div>
  );
};

export default Signup;
