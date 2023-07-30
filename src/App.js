import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Signin from "./pages/Signin/Signin";
import Signup from "./pages/Signup/Signup";
import Todo from "./pages/Todo/Todo";

function App() {
  return (
    <div className="w-screen h-screen">
      <div className="w-2/5 h-1/2 p-4 positionCenter bg-red-200">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
