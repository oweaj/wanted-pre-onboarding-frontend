import { useState } from "react";

const useInput = () => {
  const [data, setData] = useState("");
  const [state, setState] = useState(false);
  const emailCheck = /[^\s]+@[^\s]/;

  const onChange = (e) => {
    const { type, value } = e.target;
    setData(value);

    if (type === "email") {
      setState(emailCheck.test(value) ? true : false);
    } else if (type === "password") {
      setState(value.length >= 8 ? true : false);
    } else {
      setState(false);
    }
  };

  return { onChange, data, setData, state };
};

export default useInput;
