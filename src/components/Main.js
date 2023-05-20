import React from "react";
import { Link, Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <nav className="flex gap-2 text-green-500">
        <Link to="/">Home</Link>
        <Link to="/createList">CreateList</Link>
        <Link to="/key">KeyWithinList</Link>
        <Link to="/form">FormCreation</Link>
        <Link to="/controlledForm">ControlledForm</Link>
        <Link to="/context">ContextAPI</Link>
        <Link to="/useState">UseState</Link>
      </nav>
      <nav className="flex gap-2 text-green-500">
        <Link to="/useEffect">UseEffect</Link>
        <Link to="/fetchData">FetchData</Link>
        <Link to="/useReducer">useReducer</Link>
        <Link to="/useRef">useRef</Link>
        <Link to="/customHook">CustomHook</Link> <Link to="/componentComposition">ComponentCompositionWithChildren</Link>
      </nav>
      <nav className="flex gap-2 text-green-500">
        <Link to="/manipulateChildren">ManipulateChildrenDynamicaly</Link>
        <Link to="/spread">SpreadAttribute</Link>
        <Link to="/hoc">HOC</Link>
        <Link to="/render">RenderProps</Link>
      </nav>
      <br />
      <br />
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
