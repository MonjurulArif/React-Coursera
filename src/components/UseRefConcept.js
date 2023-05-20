import React from "react";

const UseRefConcept = () => {
  const formInputRef = React.useRef(null);

  const focusInput = () => {
    formInputRef.current.focus();
  };

  return (
    <div>
      <>
        <h1 className="text-2xl">Using useRef to access underlying DOM</h1>
        <input ref={formInputRef} type="text" className="border-[1px] border-black pl-1" />
        <button onClick={focusInput} className="border-2 rounded-md ml-2 pl-1 pr-1 border-solid bg-green-300 border-green-500">
          Focus input
        </button>
      </>
    </div>
  );
};

export default UseRefConcept;
