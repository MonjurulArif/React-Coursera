import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [toggle, setToggle] = useState(false);

  const clickHandler = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    document.title = toggle ? "Welcome to Little Lemon" : "Using the useEffect hook";
  }, [toggle]);

  return (
    <div>
      <h1 className="text-3xl">Using the useEffect hook</h1>
      <button onClick={clickHandler} className="border-2 border-green-500 bg-green-300">
        Toggle message
      </button>
      {toggle && <h2 className="text-2xl">Welcome to Little Lemon</h2>}
    </div>
  );
};

export default UseEffect;
