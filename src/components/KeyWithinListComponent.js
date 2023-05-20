import React, { useState } from "react";

const ToDo = (props) => (
  <tr>
    <td>
      <label className="text-xl text-black">{props.id}</label>
    </td>
    <td className="border-2 border-black text-black mt-2">
      <input />
    </td>
    <td className="mt-2">
      <label>{props.createdAt}</label>
    </td>
  </tr>
);

const KeyWithinListComponent = () => {
  const [todos, setTodos] = useState([
    {
      id: "todo1",
      createdAt: "18:00",
    },
    {
      id: "todo2",
      createdAt: "20:00",
    },
  ]);
  const reverseOrder = () => {
    setTodos([...todos].reverse());
    console.log(todos);
  };

  return (
    <div>
      <button className="border-2 border-black bg-green-300" onClick={reverseOrder}>
        Reverse
      </button>
      <table>
        <tbody>
          {todos.map((todo, index) => (
            <ToDo key={todo.id} id={todo.id} createdAt={todo.createdAt}></ToDo>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default KeyWithinListComponent;
