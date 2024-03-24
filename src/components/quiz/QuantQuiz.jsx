import React, { useState } from "react";
import "./quiz.css";

const QuantQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const questions = [
    {
      questionText: "Value of (256)^0.16 x (256)^0.09 is",
      answerOptions: [
        { answerText: "64", isCorrect: false },
        { answerText: "4", isCorrect: true },
        { answerText: "8", isCorrect: false },
        { answerText: "16", isCorrect: false },
      ],
      correctAnswer: "4",
    },
    {
      questionText: "Two pipes can fill a tank in 10 and 14 minutes respectively. A third pipe can empty the tank at the rate of10 liters/minute. If all the pipes working together can fill the empty tank in 8 minutes,what is the capacity of the tank?",
      answerOptions: [
        { answerText: "210 liters", isCorrect: false },
        { answerText: "215.4 liters", isCorrect: true },
        { answerText: "220 liters", isCorrect: false },
        { answerText: "225.4 liters", isCorrect: false },
      ],
      correctAnswer:"215.4 liters",
    },
    {
      questionText: "If Suresh borrows Rs. 36000 from Mahesh at rate of interest 6% S.I, at the end of four years how much interest Suresh has to pay along with principal amount?",
      answerOptions: [
        { answerText: "Rs. 12560", isCorrect: false },
        { answerText: "Rs. 12960", isCorrect: true },
        { answerText: "Rs. 13500", isCorrect: false },
        {
          answerText: "Rs. 14500",
          isCorrect: false,
        },
      ],
      correctAnswer:"Rs. 12960",
    },
    {
      questionText: "A train moving at speed of 80 km/hr crosses a pole in 7 seconds. Find the length of the train.",
      answerOptions: [
        { answerText: "150 m", isCorrect: false },
        { answerText: "165 m", isCorrect: false },
        { answerText: "175 m", isCorrect: true },
        { answerText: "170 m", isCorrect: false },
      ],
      correctAnswer: "175 m",
    },
    {
      questionText: "A man is running at 10 km/hr in a parallel track in the same direction of a train which is moving at 55 km/hr. He is 260 meters ahead of the train. If the length of train is 140 meters, in what time the train will cross the man?",
      answerOptions: [
        { answerText: "32 seconds", isCorrect: true },
        { answerText: "34 seconds", isCorrect: false },
        { answerText: "36 seconds", isCorrect: false },
        { answerText: "38 seconds", isCorrect: false },
      ],
      correctAnswer: "32 seconds",
    },
    {
      questionText: "Two trains of equal length 140 meters are running in opposite directions on parallel tracks at the same speed. If the trains cross each other 14 seconds, find the speed of each train.      ",
      answerOptions: [
        { answerText: "30 km/hr", isCorrect: false },
        { answerText: "32 km/hr", isCorrect: false },
        { answerText: "34 km/hr", isCorrect: false },
        { answerText: "36 km/hr", isCorrect: true },
      ],
      correctAnswer:"36 km/hr",
    },
    {
      questionText: "A train crosses a pole and a bridge of length 280 meters in 6 seconds and 20 seconds respectively. At what speed the train is running?",
      answerOptions: [
        { answerText: "62 km/hr", isCorrect: false },
        { answerText: "65 km/hr", isCorrect: false },
        { answerText: "70 km/hr", isCorrect: false },
        { answerText: "72 km/hr", isCorrect: true },
      ],
      correctAnswer:"72 km/hr",
    },
    {
      questionText: "A man tossed two dice. What is the probability that the total score is a prime number?",
      answerOptions: [
        { answerText: "5/12", isCorrect: true },
        { answerText: "5/14", isCorrect: false },
        { answerText: "5/20", isCorrect: false },
        { answerText: "5/24", isCorrect: false },
      ],
      correctAnswer:"5/12",
    },
    {
      questionText: "A box contains 4 white, 5 red, and 6 blue balls. If three balls are drawn at random from the box, what is the probability that all of them are blue?",
      answerOptions: [
        { answerText: "4/91", isCorrect: true },
        { answerText: "4/81", isCorrect: false },
        { answerText: "4/71", isCorrect: false },
        { answerText: "4/61", isCorrect: false },
      ],
      correctAnswer:"4/91"
    },
    {
      questionText: "A man draws two cards at random from a pack of 52 cards. What is the probability that one is a spade and the other is a heart?      ",
      answerOptions: [
        { answerText: "13/105", isCorrect: false },
        { answerText: "13/102", isCorrect: true },
        { answerText: "13/110", isCorrect: false },
        { answerText:"13/108", isCorrect: false },
      ],
      correctAnswer:"13/102",
    },
    {
      questionText: "One army camp had ration for 560 soldiers for 20 days, 560 soldiers reported for the camp, and after 12 days, 112 soldiers were sent to another camp. For how many days, the remaining soldiers can stay in the camp without getting any new ration?",
      answerOptions: [
        { answerText: "10 days", isCorrect: true },
        { answerText: "12 days", isCorrect: false },
        { answerText: "16 days", isCorrect: false },
        { answerText: "14 days", isCorrect: false },
      ],
      correctAnswer:"10 days",
    },
    {
      questionText: "Pervez and Sunny can complete a piece of work in 20 and 15 days respectively. They worked together for 6 days, after which Sunny was replaced by Ashu. If the work would be finished in next 4 days, find the number of days in which Ashu alone could complete the work.",
      answerOptions: [
        { answerText: "45", isCorrect: false },
        { answerText: "40", isCorrect: false },
        { answerText: "56", isCorrect: true },
        { answerText: "36", isCorrect: false },
      ],
      correctAnswer:"56",
    },
    {
      questionText: "At what time between 3 and 4, the hands of a clock are straight and point in opposite directions?",
      answerOptions: [
        { answerText: "42.091 min. past 3", isCorrect: false },
        { answerText: "45.091 min. past 3", isCorrect: false },
        { answerText: "49.091 min. past 3", isCorrect: true },
        { answerText: "51.091 min. past 3", isCorrect: false },
      ],
      correctAnswer:"49.091 min. past 3",
    },
    {
      questionText: "An accurate clock indicates 8 O' clock in the morning. Through how many degrees the hour hand turns when the clock indicates 3 O' clock in the afternoon?",
      answerOptions: [
        { answerText: "210°", isCorrect: true },
        { answerText: "200°", isCorrect: false },
        { answerText: "190°", isCorrect: false },
        { answerText: "185°", isCorrect: false },
      ],
      correctAnswer:"210°",
    },
    {
      questionText: "How many times the hands of a clock coincide in a day?",
      answerOptions: [
        { answerText: "24", isCorrect: false },
        { answerText: "22", isCorrect: true },
        { answerText: "23", isCorrect: false },
        { answerText: "21", isCorrect: false },
      ],
      correctAnswer:"22",
    },
    {
      questionText: "The first republic day of India was celebrated on January 26, 1950. What day of the week was it?",
      answerOptions: [
        { answerText: "Wednesday", isCorrect: false },
        { answerText: "Friday", isCorrect: false },
        { answerText: "Thursday", isCorrect: true },
        { answerText: "Tuesday", isCorrect: false },
      ],
      correctAnswer:"Thursday",
    },
    {
      questionText: "On February 5, 1998, it was Thursday. The day of the week on February 5, 1997, was",
      answerOptions: [
        { answerText: "Wednesday", isCorrect: true},
        { answerText: "Monday", isCorrect: false },
        { answerText: "Friday", isCorrect: false },
        { answerText: "Sunday", isCorrect: false },
      ],
      correctAnswer:"Wednesday",
    },
    {
      questionText: " Today is Wednesday, after 68 days, it will be",
      answerOptions: [
        { answerText: "Friday", isCorrect: false },
        { answerText: "Sunday", isCorrect: false },
        { answerText: "Monday", isCorrect: true },
        { answerText: "Thursday", isCorrect: false },
      ],
      correctAnswer:"Monday",
    },
    {
      questionText: "A water tank is 30 m long, 20 m wide and 12 m deep. It is made of iron sheet which is 3 m wide. The tank is open at the top. If the cost of iron sheet is Rs. 10 per meter, what is the total cost of iron sheet required to build the tank?      ",
      answerOptions: [
        { answerText: "Rs. 6000", isCorrect: true },
        { answerText: "Rs. 8000", isCorrect: false },
        { answerText: "Rs. 9000", isCorrect: false },
        { answerText: "Rs. 12000", isCorrect: false },
      ],
      correctAnswer:"Rs. 6000",
    },
    {
      questionText: " The dimensions of a hall are 40 m, 25 m and 20 m. If each person requires 200 cubic meters, find the number of persons who can be accommodated in the hall.      ",
      answerOptions: [
        { answerText: "150", isCorrect: false },
        { answerText: "140", isCorrect: false },
        { answerText: "120", isCorrect: false },
        { answerText: "100", isCorrect: true },
      ],
      correctAnswer:"100",
    },
    {
      questionText: "Three pipes A, B and C can fill a cistern in 8 minutes,12 minutes and 16 minutes respectively. What is the time taken by three pipes to fill the cistern when they are opened together?",
      answerOptions: [
        { answerText: "3.7 minutes", isCorrect: true },
        { answerText: "4 minutes", isCorrect: false },
        { answerText: "4.5 minutes", isCorrect: false },
        { answerText: "5 minutes", isCorrect: false },
      ],
      correctAnswer:"3.7 minutes",
    },
    {
      questionText: "A can fill a tank in 8 hours, B can fill the same in 12 hours, and C can fill the tank in 24 hours. If they are open at 2 am, 3 am, and 4am respectively, then at what time the tank will be completely fill?",
      answerOptions: [
        { answerText: "5:00 am", isCorrect: false },
        { answerText: "6:00 am", isCorrect: false },
        { answerText: "6:40 am", isCorrect: true },
        { answerText: "7:20 am", isCorrect: false },
      ],
      correctAnswer:"6:40 am",
    },
    {
      questionText: "The LCM of two prime number x and y is 161. If x>y, find the value of 15y-7x.",
      answerOptions: [
        { answerText: "-32", isCorrect: false },
        { answerText: "-56", isCorrect: true },
        { answerText: "38", isCorrect: false },
        { answerText: "74", isCorrect: false },
      ],
      correctAnswer:"-56",
    },
    {
      questionText: "Find the smallest digit that will leave same remainder 4 in each case when divided by 12, 15, 20, and 54.",
      answerOptions: [
        { answerText: "454", isCorrect: false },
        { answerText: "540", isCorrect: false },
        { answerText: "544", isCorrect: false },
        { answerText: "450", isCorrect: true },
      ],
      correctAnswer:"544",
    },
    {
      questionText: " If the number 467X4 is divisible by 9, find the value of the digit marked as X.",
      answerOptions: [
        { answerText: "4", isCorrect: false },
        { answerText: "5", isCorrect: false },
        { answerText: "6", isCorrect: true },
        { answerText: "7", isCorrect: false },
      ],
      correctAnswer:"6",
    },
    {
      questionText: "Find the largest 4 digit number that is exactly divisible by 66.",
      answerOptions: [
        { answerText: "9987", isCorrect: false },
        { answerText: "9912", isCorrect: false },
        { answerText: "9916", isCorrect: false },
        { answerText: "9966", isCorrect: true },
      ],
      correctAnswer:"9966",
    },
    {
      questionText: "Mohan bought an article at 25% less of the marked price and sold it at 15% more than the marked price. Find the profit earned by him.",
      answerOptions: [
        { answerText: "53.3%", isCorrect: true },
        { answerText: "55%", isCorrect: false },
        { answerText: "57.3%", isCorrect: false },
        { answerText: "52.3%", isCorrect: false },
      ],
      correctAnswer:"53.3%",
    },
    {
      questionText: "A dishonest milkman sells milk at cost price, but he mixes water and earns 16(2/3) % profit. Find the ratio of mixture and milk in the mixture.",
      answerOptions: [
        { answerText: "7:5", isCorrect: false },
        { answerText: "7:6", isCorrect: false },
        { answerText: "7:7", isCorrect: false },
        { answerText:"7:8", isCorrect: true },
      ],
      correctAnswer:"7:8",
    },
    {
      questionText: "In how many years the compound interest on Rs. 10000 at the rate of 10% will be Rs. 2100 ?",
      answerOptions: [
        { answerText: "1.5 years", isCorrect: false },
        { answerText: "2 years", isCorrect: true },
        { answerText: "2.5 years", isCorrect: false },
        { answerText: "3 years", isCorrect: false },
      ],
      correctAnswer:"2 years",
    },
    {
      questionText: "If the difference between Simple Interest and Compound Interest on a sum of money for 3 years is Rs. 200 and the rate of interest is 10%, what is the sum?",
      answerOptions: [
        { answerText: "Rs. 6451.6", isCorrect: true },
        { answerText: "Rs. 6351.6", isCorrect: false },
        { answerText: "Rs. 12351.6", isCorrect: false },
        { answerText: "Rs. 12451.6", isCorrect: false },
      ],
      correctAnswer:"Rs. 6451.6",
    },
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
  );
};

export default QuantQuiz;
