import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="contentStyle gap-4">
      <Header title="TodoList" />
      <Link to="/signin" className="linkStyle buttonStyle">
        로그인 페이지로 이동
      </Link>
      <Link to="/signup" className="linkStyle buttonStyle ">
        회원가입 페이지로 이동
      </Link>
    </div>
  );
};

export default Landing;
