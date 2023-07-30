import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="contentStyle gap-4">
      <Header title="TodoList" />
      <Link to="/signin" className="buttonStyle flex items-center justify-center">
        로그인
      </Link>
      <Link to="/signup" className="buttonStyle flex items-center justify-center">
        회원가입
      </Link>
    </div>
  );
};

export default Landing;
