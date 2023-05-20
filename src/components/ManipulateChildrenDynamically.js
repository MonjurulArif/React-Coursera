import React from "react";

const Row = ({ children, spacing }) => {
  const childStyle = {
    marginLeft: `${spacing}px`,
  };

  return (
    <div className="Row">
      {React.Children.map(children, (child, index) => {
        return React.cloneElement(child, {
          style: {
            ...child.props.style,
            ...(index > 0 ? childStyle : {}),
          },
        });
      })}
    </div>
  );
};

const ManipulateChildrenDynamically = () => {
  return (
    <div>
      <Row spacing={40}>
        <p>Pizza Margarita</p>
        <p>2</p>
        <p>385</p>
        <p>18:30</p>
        <p>John</p>
      </Row>
    </div>
  );
};

export default ManipulateChildrenDynamically;
