import logo from "./logo.svg";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import Home from "./components/Home";
import CreateListFilterSortMap from "./components/CreateListFilterSortMap";
import Main from "./components/Main";
import UseReducerConcept from "./components/UseReducerConcept";
import UseRefConcept from "./components/UseRefConcept";
import CustomHook from "./components/CustomHook";
import ComponentCompositionWithChildren from "./components/ComponentCompositionWithChildren";
import ManipulateChildrenDynamically from "./components/ManipulateChildrenDynamically";
import SpreadAttribute from "./components/SpreadAttribute";
import HOC from "./components/HOC";
import RenderProps from "./components/RenderProps";
import KeyWithinListComponent from "./components/KeyWithinListComponent";
import FormCreation from "./components/FormCreation";
import ControlledForm from "./components/ControlledForm";
import ContextAPI from "./components/ContextAPI";
import UseState from "./UseState";
import UseEffect from "./components/UseEffect";
import FetchData from "./components/FetchData";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        { path: "/createList", element: <CreateListFilterSortMap></CreateListFilterSortMap> },
        { path: "/key", element: <KeyWithinListComponent></KeyWithinListComponent> },
        { path: "/form", element: <FormCreation></FormCreation> },
        { path: "/controlledForm", element: <ControlledForm></ControlledForm> },
        { path: "/context", element: <ContextAPI></ContextAPI> },
        { path: "/useState", element: <UseState></UseState> },
        { path: "/useEffect", element: <UseEffect></UseEffect> },
        { path: "/fetchData", element: <FetchData></FetchData> },
        { path: "/useReducer", element: <UseReducerConcept></UseReducerConcept> },
        { path: "/useRef", element: <UseRefConcept></UseRefConcept> },
        { path: "/customHook", element: <CustomHook></CustomHook> },
        { path: "/componentComposition", element: <ComponentCompositionWithChildren></ComponentCompositionWithChildren> },
        { path: "/manipulateChildren", element: <ManipulateChildrenDynamically></ManipulateChildrenDynamically> },
        { path: "/spread", element: <SpreadAttribute></SpreadAttribute> },
        { path: "/hoc", element: <HOC></HOC> },
        { path: "/render", element: <RenderProps></RenderProps> },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
