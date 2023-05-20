import React from "react";

const Button = ({ type, children, ...buttonProps }) => {
  // const className = type === "primary" ? "PrimaryButton" : "SecondaryButton";

  //for bootstrap
  // return (
  //   <button className={`Button ${className}`} {...buttonProps}>
  //     {children}
  //   </button>
  // );

  const className = type === "primary" ? "green-300" : "yellow-300";

  return (
    <button className={`Button bg-${className} border-orange-600 rounded border-2 ml-2`} {...buttonProps}>
      {children}
    </button>
  );
};

const LoginButton = ({ type, children, ...buttonProps }) => {
  return (
    <Button type="secondary" {...buttonProps} onClick={() => alert("Logging in!")}>
      {" "}
      {children}
    </Button>
  );
};

const SpreadAttribute = () => {
  return (
    <div>
      <header className="Header">Little Lemon Restaurant</header>
      <Button type="primary" onClick={() => alert("Signing up!")}>
        Sign Up
      </Button>
      <LoginButton type="secondary" onClick={() => alert("Signing up!")}>
        Login
      </LoginButton>
    </div>
  );
};

export default SpreadAttribute;
