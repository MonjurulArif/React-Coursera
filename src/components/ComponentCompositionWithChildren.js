import React from "react";

//generic component
const Button = ({ children, backgroundColor }) => {
  return <button style={{ backgroundColor }}>{children}</button>;
};

//for bootstrap
// const Alert = ({ children }) => {
//   return (
//     <>
//       <div className="Overlay"></div>
//       <div className="Alert">{children}</div>
//     </>
//   );
// };

//generic component
const Alert = ({ children }) => {
  return (
    <>
      <div className="Overlay"></div>
      <div className="bg-yellow-300">{children}</div>
    </>
  );
};

const DeleteButton = () => {
  return <Button backgroundColor="red">Delete</Button>;
};

const ComponentCompositionWithChildren = () => {
  return (
    <div>
      <header>Little Lemon Restaurant</header>
      <Alert>
        <h4 className="text-xl font-bold">Delete Account</h4>
        <p>Are you sure you want to proceed? You will miss all your delicious recipies!!!</p>
        <DeleteButton></DeleteButton>
      </Alert>
    </div>
  );
};

export default ComponentCompositionWithChildren;
