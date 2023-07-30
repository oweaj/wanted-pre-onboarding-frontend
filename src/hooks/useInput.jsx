import { useState } from "react";

const useInput = () => {
  const [data, setData] = useState("");
  const [state, setState] = useState(false);
  const emailCheck = /[\w]+@[\w]$/;

  const onChange = (e) => {
    const { id, value } = e.target;
    setData(value);

    if (id === "email-input") {
      setState(emailCheck.test(value) ? true : false);
    } else {
      setState(value.length >= 8 ? true : false);
    }
  };

  return { onChange, data, state };
};

export default useInput;
