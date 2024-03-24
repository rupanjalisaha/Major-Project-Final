import React, { useState } from "react";
import "./quiz.css";
import QuantQuiz from "./QuantQuiz";
import Calculator from "../Calculator/Calculator";
const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const questions = [
    {
      questionText: "Which language runs in a web browser?",
      answerOptions: [
        { answerText: "Javascript", isCorrect: true },
        { answerText: "C", isCorrect: false },
        { answerText: "Python", isCorrect: false },
        { answerText: "HTML", isCorrect: false },
      ],
      correctAnswer:"Javascript",
    },
    {
      questionText: "What is CSS?",
      answerOptions: [
        { answerText: "Cascading Style Sheets", isCorrect: true },
        { answerText: "Central Style Sheets", isCorrect: false },
        { answerText: "Cascading Simple Sheets", isCorrect: false },
        { answerText: "Cars SUVs Sailboats", isCorrect: false },
      ],
      correctAnswer:"Cascading Style Sheets",
    },
    {
      questionText: "What does HTML stand for?",
      answerOptions: [
        { answerText: "Hypertext Markdown Language", isCorrect: false },
        { answerText: "Hyperloop Machine Language", isCorrect: false },
        { answerText: "Hypertext Markup Language", isCorrect: true },
        {
          answerText: "Helicopters Terminals Motorboats Lamborginis",
          isCorrect: false,
        },
      ],
      correctAnswer:"Hypertext Markup Language",
    },
    {
      questionText: "What does the Acronym REST stand for?",
      answerOptions: [
        { answerText: "Representational State Transform", isCorrect: false },
        { answerText: "Representational State Transfer", isCorrect: true },
        { answerText: "Represent State Transform", isCorrect: false },
        { answerText: "Represent State Transfer", isCorrect: false },
      ],
      correctAnswer:"Representational State Transfer",
    },
    {
      questionText: "What is the protocol used in REST?",
      answerOptions: [
        { answerText: "FTP", isCorrect: false },
        { answerText: "HTTP", isCorrect: true },
        { answerText: "JMX", isCorrect: false },
        { answerText: "SOAP", isCorrect: false },
      ],
      correctAnswer:"HTTP",
    },
    {
      questionText: "What is the HTTP code related to Internal Server Error?",
      answerOptions: [
        { answerText: "500", isCorrect: true },
        { answerText: "501", isCorrect: false },
        { answerText: "504", isCorrect: false },
        { answerText: "502", isCorrect: false },
      ],
      correctAnswer:"500",
    },
    {
      questionText: "What is the HTTP Code 200 indicate?",
      answerOptions: [
        { answerText: "Error", isCorrect: false },
        { answerText: "Completed", isCorrect: false },
        { answerText: "Success", isCorrect: true },
        { answerText: "warning", isCorrect: false },
      ],
      correctAnswer:"Success",
    },
    {
      questionText: "What is the HTTP status code 201 indicate?",
      answerOptions: [
        { answerText: "OK", isCorrect: false },
        { answerText: "Created", isCorrect: true },
        { answerText: "Accepted", isCorrect: false },
        { answerText: "No Content", isCorrect: false },
      ],
      correctAnswer:"Created",
    },
    {
      questionText: "What is the protocol used in REST?",
      answerOptions: [
        { answerText: "FTP", isCorrect: false },
        { answerText: "HTTP", isCorrect: true },
        { answerText: "JMX", isCorrect: false },
        { answerText: "SOAP", isCorrect: false },
      ],
      correctAnswer:"HTTP",
    },
    {
      questionText: "Which is not REST Architectural Constraints?",
      answerOptions: [
        { answerText: "Client-Server", isCorrect: false },
        { answerText: "Stateless", isCorrect: false },
        { answerText: "Cacheable", isCorrect: false },
        { answerText: "Service Orchestration", isCorrect: true },
      ],
      correctAnswer:"Service Orchestration",
    },
    {
      questionText: "What is the protocol used in REST?",
      answerOptions: [
        { answerText: "FTP", isCorrect: false },
        { answerText: "HTTP", isCorrect: true },
        { answerText: "JMX", isCorrect: false },
        { answerText: "SOAP", isCorrect: false },
      ],
      correctAnswer:"HTTP",
    },
    {
      questionText: "Which of the following is a client side storage mechanism in web browser?",
      answerOptions: [
        { answerText: "PHP sessions", isCorrect: false },
        { answerText: "Cookies", isCorrect: false },
        { answerText: "Local storage", isCorrect: true },
        { answerText: "Session Storage", isCorrect: false },
      ],
      correctAnswer:"Local storage",
    },
    {
      questionText: "What does DTD stand for in the context of Dreamweaver?",
      answerOptions: [
        { answerText: "Document transfer definition", isCorrect: false },
        { answerText: "Document type declaration", isCorrect: true },
        { answerText: "Data type designation", isCorrect: false },
        { answerText: "Dreamweaver text document", isCorrect: false },
      ],
      correctAnswer:"Document type declaration",
    },
    {
      questionText: "Which of the following is a widely-used server-side scripting language for web development that is often integrated with SQL and MySQL Databases?",
      answerOptions: [
        { answerText: "HTML", isCorrect: false },
        { answerText: "CSS", isCorrect: false },
        { answerText: "PHP", isCorrect: true },
        { answerText: "JavaScript", isCorrect: false },
      ],
      correctAnswer:"PHP",
    },
    {
      questionText: "What is the primary purpose of the term 'database interaction' in the context of web development?",
      answerOptions: [
        { answerText: "Styling web pages", isCorrect: false },
        { answerText: "Establishing server connections", isCorrect: false },
        { answerText: "Managing user authentication", isCorrect: false },
        { answerText: "Handling data retrieval and manipulation in databases", isCorrect: true },
      ],
      correctAnswer:"Handling data retrieval and manipulation in databases",
    },
    {
      questionText: "When integrating PHP and MySQL, which PHP function is used to establish connection?",
      answerOptions: [
        { answerText: "mysql_query()", isCorrect: false },
        { answerText: "Connect_mysql()", isCorrect: false },
        { answerText: "mysqli_connect()", isCorrect: true },
        { answerText: "db_connect()", isCorrect: false },
      ],
      correctAnswer: "mysqli_connect()",
    },
    {
      questionText: "Which of the following is not a type of queue?",
      answerOptions: [
        { answerText: "Single ended queue", isCorrect: true},
        { answerText: "Double ended queue", isCorrect: false },
        { answerText: "Circular queue", isCorrect: false },
        { answerText: "Priority queue", isCorrect: false },
      ],
      correctAnswer:"Single ended queue",
    },
    {
      questionText: " A graph in which all vertices have equal degree is known as?",
      answerOptions: [
        { answerText: "Complete graph", isCorrect: true },
        { answerText: "Regular graph", isCorrect: false },
        { answerText: "Multi graph", isCorrect: false },
        { answerText: "Simple graph", isCorrect: false },
      ],
      correctAnswer:"Complete graph",
    },
    {
      questionText: "A vertex of in-degree zero in a directed graph is called a/an?",
      answerOptions: [
        { answerText: "Root vertex", isCorrect: false },
        { answerText: "Isolated vertex", isCorrect: false },
        { answerText: "Sink", isCorrect: true },
        { answerText: "Articulation point", isCorrect: false },
      ],
      correctAnswer:"Sink",
    },
    {
      questionText: " A graph is a tree if and only if graph is ?",
      answerOptions: [
        { answerText: "Directed graph", isCorrect: false },
        { answerText: "Contains no cycle", isCorrect: true },
        { answerText: "Planar", isCorrect: false },
        { answerText: "Completely connected", isCorrect: false },
      ],
      correctAnswer:"Contains no cycle",
    },
    {
      questionText: "The elements of a linked list are stored?",
      answerOptions: [
        { answerText: "In a structure", isCorrect: false },
        { answerText: "In an array", isCorrect: false },
        { answerText: "Anywhere the computer has space for them", isCorrect: true },
        { answerText: "In contiguous memory locations", isCorrect: false },
      ],
      correctAnswer:"Anywhere the computer has space for them",
    }
  ];

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    alert("Correct Answer: "+questions[currentQuestion].correctAnswer);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };
  const accuracy = ((score/questions.length) *100).toFixed(0);
  let remark = 'You can still do better';
  if (accuracy < 40){
    remark = "Don't worry, try again";
  }
  if (accuracy >= 40 && accuracy <= 90){
    remark = "You can still do better";
  }
  if (accuracy > 90 && accuracy <=100){
    remark = "Well done!";
  }
  return (
    <>
    <div className="quiz-container">
      {showScore ? (
        <div className="score-section">
          Score: {score} <br/> Total Score: {questions.length}<br/> Accuracy: {accuracy}%<br/>
          Remark: {remark}<br/>
          <button onClick={resetQuiz}>Try Again</button>
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button
                key={answerOption.answerText}
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
    <Calculator/>
    <QuantQuiz/>
    </>
  );
};

export default Quiz;
