import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const FetchData = () => {
  const [user, setUser] = useState([]);

  const fetchData = () => {
    fetch("https://randomuser.me/api/?results=1")
      .then((response) => response.json())
      .then((data) => setUser(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return Object.keys(user).length > 0 ? (
    <div>
      <h1 className="text-3xl">Data returned</h1>
      <h2 className="text-2xl">First Name: {user.results[0].name.first}</h2>
      <h2 className="text-2xl">Last Name: {user.results[0].name.last}</h2>
    </div>
  ) : (
    <h1 className="text-2xl">Data Pending...</h1>
  );
};

export default FetchData;
