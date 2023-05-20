import React, { useEffect, useState } from "react";

const CustomHook = () => {
  const [count, setCount] = useState(0);
  useConsoleLog(count);

  const increament = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <h1 className="text-2xl">Count: {count}</h1>
      <button onClick={increament} className="border-2 rounded-md border-solid bg-green-300 border-green-500 mt-2">
        Plus 1
      </button>
    </div>
  );
};

export default CustomHook;

const useConsoleLog = (varName) => {
  useEffect(() => {
    console.log(varName);
  }, [varName]);
};

// export default useConsoleLog;
