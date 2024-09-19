import { useState } from "react";
import Question from "./question";
import data from "./data";
import "./App.css";

function App() {
  const [questions, setQuestions] = useState(data);
  console.log(questions);
  return (
    <ul className="questions__list">
      {questions.map((question) => {
        return questions && <Question key={question.id} {...question} />;
      })}
    </ul>
  );
}

export default App;
