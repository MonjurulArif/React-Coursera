import React, { useEffect, useState } from "react";

const withMousePosition = (WrapperComponent) => {
  return (props) => {
    const [mousePosition, setMousePosition] = useState({
      x: 0,
      y: 0,
    });

    useEffect(() => {
      const handleMousePositionChange = (e) => {
        setMousePosition({
          x: e.clientX,
          y: e.clientY,
        });
      };

      window.addEventListener("mousemove", handleMousePositionChange);

      return () => {
        window.removeEventListener("mousemove", handleMousePositionChange);
      };
    }, []);

    return <WrapperComponent {...props} mousePosition={mousePosition}></WrapperComponent>;
  };
};

const PanelMouseLogger = ({ mousePosition }) => {
  if (!mousePosition) {
    return null;
  }

  return (
    <div className="BasicTracker border-2 border-red-400 ">
      <p>Mouse Position: </p>
      <div className="Row">
        <span>X: {mousePosition.x}</span>
        <span className="ml-2">Y: {mousePosition.y}</span>
      </div>
    </div>
  );
};

const PointMouseLogger = ({ mousePosition }) => {
  if (!mousePosition) {
    return null;
  }

  return (
    <p>
      ({mousePosition.x}, {mousePosition.y})
    </p>
  );
};

const PanelMouseTracker = withMousePosition(PanelMouseLogger);
const PointMouseTracker = withMousePosition(PointMouseLogger);

const HOC = () => {
  return (
    <div>
      <header className="Header">Little Lemon Restaurant</header>
      <PanelMouseTracker></PanelMouseTracker>
      <PointMouseTracker></PointMouseTracker>
    </div>
  );
};

export default HOC;
