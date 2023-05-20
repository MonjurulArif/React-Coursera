import React, { useEffect, useState } from "react";

const DataFetcher = ({ render, url }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (url.includes("desserts")) {
      setData(["cake", "ice cream", "pie", "brownie"]);
    } else {
      setData(["water", "soda", "juice"]);
    }
  }, []);

  return render(data);
};

const DessertCount = () => {
  <DataFetcher url="https://littlelemon/desserts" render={(data) => <p>{data.length} desserts</p>}></DataFetcher>;
};
const DrinksCount = () => {
  <DataFetcher url="https://littlelemon/drinks" render={(data) => <h3>{data.length} drinks</h3>}></DataFetcher>;
};

const RenderProps = () => {
  return (
    <div>
      <header>Little Lemon Restaurant</header>
      <DessertCount></DessertCount>
      <DrinksCount></DrinksCount>
    </div>
  );
};

export default RenderProps;
