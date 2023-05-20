import React from "react";
import { useState } from "react";

const GoalForm = (props) => {
  const [formData, setFormData] = useState({ goal: "", by: "" });

  const changeHandler = (e) => {
    //e.targer.name -> works form goal and by depending on changing goal and by input
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.onAdd(formData);
    setFormData({ goal: "", by: "" });
  };

  return (
    <>
      <h1 className="text-2xl">My Little Lemon Goals</h1>
      <form onSubmit={submitHandler}>
        <input type="text" name="goal" placeholder="Goal" value={formData.goal} onChange={changeHandler} className="border-2 border-black pl-1 mr-1"></input>
        <input type="text" name="by" placeholder="By..." value={formData.by} onChange={changeHandler} className="border-2 mt-2 border-black pl-1 mr-1"></input>
        <button className="border-2 border-green-500 bg-green-300">Submit Goal</button>
      </form>
    </>
  );
};

const ListOfGoals = (props) => {
  return (
    <ul>
      {props.allGoals.map((g) => (
        <li key={g.goal}>
          <span>
            My goal is to {g.goal}, by {g.by}
          </span>
        </li>
      ))}
    </ul>
  );
};

const UseStateComponent = () => {
  const [allGoals, updateAllGoals] = useState([]);

  const addGoal = (goal) => {
    updateAllGoals([...allGoals, goal]);
  };

  return (
    <div>
      <GoalForm onAdd={addGoal}></GoalForm>
      <ListOfGoals allGoals={allGoals}></ListOfGoals>
    </div>
  );
};

export default UseStateComponent;

// const UseStateComponent = () => {
//   const [restaurantName, setRestaurantName] = useState("Lemon");

//   const updateRestaurantName = () => {
//     setRestaurantName("Little Lemon");
//   };

//   return (
//     <div>
//       <h1 className="text-2xl">{restaurantName}</h1>
//       <button className="border-2 border-green-500 bg-green-300" onClick={updateRestaurantName}>
//         Update restaurant name
//       </button>
//     </div>
//   );
// };

// export default UseStateComponent;

// import { useState } from "react";

// export default function App() {
//   const [greeting, setGreeting] = useState({ greet: "Hello, World" });
//   console.log(greeting, setGreeting);

//   function updateGreeting() {
//     const newGreeting = {...greeting};
//     newGreeting.greet = "Hello, World-Wide Web";
//     setGreeting(newGreeting);
//   }

//   return (
//     <div>
//       <h1>{greeting.greet}</h1>
//       <button onClick={updateGreeting}>Update greeting</button>
//     </div>
//   );
// }

// import { useState } from "react";

// export default function App() {
//   const [greeting, setGreeting] = useState({ greet: "Hello, World" });
//   console.log(greeting, setGreeting);

//   function updateGreeting() {
//     greeting.greet = "Hello, World-Wide Web;
//     setGreeting(greeting);
//   }

//   return (
//     <div>
//       <h1>{greeting.greet}</h1>
//       <button onClick={updateGreeting}>Update greeting</button>
//     </div>
//   );
// }

// import { useState } from "react";

// export default function App() {
//   const [greeting, setGreeting] = useState(
//     {
//         greet: "Hello",
//         place: "World"
//     }
//   );
//   console.log(greeting, setGreeting);

//   function updateGreeting() {
//     setGreeting(prevState => {
//         return {...prevState, place: "World-Wide Web"}
//     });
//   }

//   return (
//     <div>
//       <h1>{greeting.greet}, {greeting.place}</h1>
//       <button onClick={updateGreeting}>Update greeting</button>
//     </div>
//   );
// }
