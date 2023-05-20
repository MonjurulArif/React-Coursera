import React, { useReducer } from "react";

const reducer = (state, action) => {
  if (action.type === "buy_ingredients") return { money: state.money - 10 };
  if (action.type === "sell_a_meal") return { money: state.money + 10 };
  if (action.type === "celebrity_visit") return { money: state.money + 5000 };

  return state;
};

const UseReducerConcept = () => {
  const initialState = { money: 100 };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Wallet: {state.money}</h1>
      <div>
        <button onClick={() => dispatch({ type: "buy_ingredients" })} className="border-2 rounded-md border-solid bg-green-300 border-green-500">
          Shopping for veggies!
        </button>
        <br />
        <button onClick={() => dispatch({ type: "sell_a_meal" })} className="border-2 rounded-md border-solid bg-green-300 border-green-500 mt-2">
          Serve a meal to the customer
        </button>
        <br />
        <button onClick={() => dispatch({ type: "celebrity_visit" })} className="border-2 rounded-md border-solid bg-green-300 border-green-500 mt-2">
          celebrity visit
        </button>
      </div>
    </div>
  );
};

export default UseReducerConcept;
