import React, { useState } from "react";

const FormCreation = () => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    console.log("Form Submitted");
  };

  return (
    <div className="border-2 border-black">
      <form action="" onSubmit={handleSubmit}>
        <fieldset className="pt-2">
          <label htmlFor="name">Name: </label>
          <input id="name" type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} name="name" className="border-2 border-black pl-2" />
        </fieldset>
        <button disabled={!name} type="submit" className="border-2 border-green-500 bg-green-300 mt-2 mb-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormCreation;
