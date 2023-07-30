import Header from "../../components/Header/Header";
import { TodoInput, TodoButton } from "../../components/Todoitem/Todoitem";
import useInput from "../../hooks/useInput";

const Signup = () => {
  const email = useInput();
  const password = useInput();

  return (
    <div className="contentStyle">
      <Header title="회원가입" />
      <form className="flex flex-col gap-4">
        <TodoInput title="이메일" id="email-input" onChange={email.onChange} value={email.data} />
        <TodoInput title="비밀번호" id="password-input" onChange={password.onChange} value={password.data} />
        <TodoButton title="회원가입" id="signup-button" />
      </form>
    </div>
  );
};

export default Signup;
