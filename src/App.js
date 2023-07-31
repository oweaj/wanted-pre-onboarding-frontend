import { Route, Routes, Navigate } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Signin from "./pages/Signin/Signin";
import Signup from "./pages/Signup/Signup";
import Todo from "./pages/Todo/Todo";

const App = () => {
  const token = localStorage.getItem("token");

  const PrivateRoute = ({ auth, component: Component }) => {
    return !auth ? Component : <Navigate to="/todo" />;
  };

  return (
    <div className="w-screen h-screen">
      <div className="w-2/5 h-1/2 p-4 positionCenter">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signin" element={<PrivateRoute component={<Signin />} auth={token} />} />
          <Route path="/signup" element={<PrivateRoute component={<Signup />} auth={token} />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
