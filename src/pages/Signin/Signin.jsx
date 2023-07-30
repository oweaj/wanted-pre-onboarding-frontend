import Header from "../../components/Header/Header";
import { TodoInput, TodoButton } from "../../components/Todoitem/Todoitem";
import { Link, useNavigate } from "react-router-dom";
import useInput from "../../hooks/useInput";

const Signin = () => {
  const email = useInput();
  const password = useInput();

  return (
    <div className="contentStyle">
      <Header title="로그인" />
      <form className="flex flex-col gap-4">
        <TodoInput title="이메일" id="email-input" onChange={email.onChange} value={email.data} />
        <TodoInput title="비밀번호" id="password-input" onChange={password.onChange} value={password.data} />
        <TodoButton title="로그인" id="signin-button" />
        <Link to="/signup" className="buttonStyle flex items-center justify-center">
          회원가입
        </Link>
      </form>
    </div>
  );
};

export default Signin;
