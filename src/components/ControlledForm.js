import React, { useState } from "react";

const ControlledForm = () => {
  const [score, setScore] = useState("10");
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Number(score) <= 5 && comment.length <= 10) {
      alert("Please provide a comment explaining why the operation was poor");
      return;
    }

    console.log("Form Submitted");
    setComment("");
    setScore("10");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2 className="text-2xl mb-4">Feedback Form</h2>
          <div>
            <label className="">Score: {score}⭐ </label>
            <br />
            <input type="range" min="0" max="10" value={score} onChange={(e) => setScore(e.target.value)} className="border-2 border-black" />
          </div>
          <div>
            <label>Comment: </label>
            <textarea value={comment} onChange={(e) => setComment(e.target.value)} className="border-2 border-black ml-2 pl-1"></textarea>
          </div>
          <button type="submit" className="border-2 bg-green-300 border-green-500">
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default ControlledForm;
