import React from "react";

function QuestionItem(props) {
  // console.log(props.answers)
  const options = props.answers.map((answer, index) => (
    <option 
      key={index} 
      value={index}>
      {answer}
    </option>
  ));

  function handleDelete() {
    // console.log(props.id)
    props.onDelete(props.id)
    fetch(`http://localhost:4000/questions/${props.id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" }
    })
  }

  function handleChange(e) {
    // console.log(e.target.value)
    props.onAnswerChange(e.target.value)
    fetch(`http://localhost:4000/questions/${props.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        "correctIndex": e.target.value
      })
    })
  }

  return (
    <li>
      <h4>Question {props.id}</h4>
      <h5>Prompt: {props.prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={props.correctIndex} onChange={handleChange}>
          {options}
        </select>
      </label>
      <button onClick={handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
