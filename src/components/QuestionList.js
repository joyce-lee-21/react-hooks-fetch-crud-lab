import React from "react";
import QuestionItem from './QuestionItem';

//from App component, the array of question state objects are passed here as a props
function QuestionList({ questions, onDelete, onAnswerChange }) {
  console.log("In QuestionList: ", questions)

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {/* displaying mapped questions into each QuestionItem component after fetching */}
        {/* {console.log(object)} */}
        {questions.map((object) => 
          // {console.log(object[0])
          (<QuestionItem 
            key={object.id}
            id={object.id}
            prompt={object.prompt}
            answers={object.answers}
            correctIndex={object.correctIndex}
            onDelete={onDelete}
            onAnswerChange={onAnswerChange}
          />)
          // }
        )}
      </ul>
    </section>
  );
}

export default QuestionList;
