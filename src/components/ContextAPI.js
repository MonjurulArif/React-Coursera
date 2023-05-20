import React from "react";
import { UserProvider, useUser } from "./UserContext";

const LoggedInUser = () => {
  // const { user } = useUser();
  return (
    <p>
      {/* Hello <span>{user.name}</span> */}
      Hello <span></span>
    </p>
  );
};

const Header = () => {
  return (
    <header>
      <h2 className="text-2xl">Blog App</h2>
      <LoggedInUser></LoggedInUser>
    </header>
  );
};

const Page = () => {
  // const { user } = useUser();
  return (
    <div>
      <div>
        <h2 className="text-2xl">What is Lorem ipsum?</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero natus officiis quis eos ea facilis in deserunt aut repellat earum suscipit, laborum consequatur atque odio aliquid
          optio hic, eaque harum expedita quo nobis tenetur, odit qui. Sunt iste earum a.
        </p>
        {/* <p>Written by {user.name}</p> */}
        <p>Written by </p>
      </div>
    </div>
  );
};

const All = () => {
  return (
    <div className="border-2 border-red-500">
      <Header></Header>
      <Page></Page>
    </div>
  );
};

const ContextAPI = () => {
  return (
    // <UserProvider>
    <All></All>
    // </UserProvider>
  );
};

export default ContextAPI;
