import React, { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  //state of showing list or form
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([])
    
  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then(r => r.json())
    .then(data => 
      setQuestions(data)
        // {
        // id: data.id,
        // prompt: data.prompt,
        // answers: [data.answers],
        // correctIndex: data.correctIndex
        // }
    )
  },[])

  console.log("In App: ", questions)

  function onSubmit(formData) {
    // console.log(formData)
    setQuestions([...questions, {
      "id": formData.id,
      "prompt": formData.prompt,
      "answers": [formData.answer1, formData.answer2, formData.answer3, formData.answer4],
      "correctIndex": formData.correctIndex
    }])
  }

  function deleteQuestion(questionId) {
    setQuestions(questions.filter(question => question.id !== questionId))
  }

  function changeAnswer() {

  }

  return (
    <main>
      {/* returns navbar that allows admin user to select page state so the QuestionForm or QuestionList component will show */}
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" 
        ? <QuestionForm onSubmit={onSubmit} questions={questions}/> 
        : <QuestionList questions={questions} onDelete={deleteQuestion} onAnswerChange={changeAnswer}/>
      }
    </main>
  );
}

export default App;
