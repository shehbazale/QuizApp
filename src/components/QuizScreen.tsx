import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
export const QuizScreen = () => {
  const questions = [
    {
      question: "What is the capital of France?",
      options: ["a) Berlin", "b) Madrid", "c) Paris", "d) Rome"],
      correctAnswer: "c) Paris",
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["a) Earth", "b) Jupiter", "c) Mars", "d) Saturn"],
      correctAnswer: "b) Jupiter",
    },
    {
      question: "What is the smallest prime number?",
      options: ["a) 0", "b) 1", "c) 2", "d) 3"],
      correctAnswer: "c) 2",
    },
    {
      question: "Who wrote 'To Kill a Mockingbird'?",
      options: [
        "a) Harper Lee",
        "b) Mark Twain",
        "c) Ernest Hemingway",
        "d) F. Scott Fitzgerald",
      ],
      correctAnswer: "a) Harper Lee",
    },
    {
      question: "What is the speed of light?",
      options: [
        "a) 3 x 10^8 m/s",
        "b) 3 x 10^6 m/s",
        "c) 3 x 10^5 m/s",
        "d) 3 x 10^4 m/s",
      ],
      correctAnswer: "a) 3 x 10^8 m/s",
    },
    {
      question: "Who painted the Mona Lisa?",
      options: [
        "a) Vincent van Gogh",
        "b) Pablo Picasso",
        "c) Leonardo da Vinci",
        "d) Claude Monet",
      ],
      correctAnswer: "c) Leonardo da Vinci",
    },
    {
      question: "What is the chemical symbol for gold?",
      options: ["a) Au", "b) Ag", "c) Fe", "d) Pb"],
      correctAnswer: "a) Au",
    },
    {
      question: "In which year did the Titanic sink?",
      options: ["a) 1910", "b) 1912", "c) 1914", "d) 1916"],
      correctAnswer: "b) 1912",
    },
    {
      question: "What is the largest ocean on Earth?",
      options: [
        "a) Atlantic Ocean",
        "b) Indian Ocean",
        "c) Arctic Ocean",
        "d) Pacific Ocean",
      ],
      correctAnswer: "d) Pacific Ocean",
    },
    {
      question: "Who developed the theory of relativity?",
      options: [
        "a) Isaac Newton",
        "b) Galileo Galilei",
        "c) Albert Einstein",
        "d) Nikola Tesla",
      ],
      correctAnswer: "c) Albert Einstein",
    },
  ];
  //   [
  //     {
  //       question: "HTML stands for__________",
  //       option: [
  //         "a) Hypertext Makrup language",
  //         "b) incorrect",
  //         "c) hyperlanguage",
  //         "d) not",
  //       ],
  //       correctAnswer: "Hypertext Markup Language",
  //     },
  //     {
  //       question: "CSS stands for__________",
  //       option: ["Cascad", "incorrect", "hyperlanguage", "not"],
  //       correctAnswer: "Hypertext Markup Language",
  //     },
  //     {
  //       question: "CSS stands for__________",
  //       option: ["Cascad", "incorrect", "hyperlanguage", "not"],
  //       correctAnswer: "Hypertext Markup Language",
  //     },
  //   ];
  const [currenIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  //   previous button funtion
  const goPrevious = () => {
    if (currenIndex > 0) {
      setCurrentIndex(currenIndex - 1);
    }
  };
  // next button function
  const goNext = () => {
    if (currenIndex < questions.length - 1) {
      setCurrentIndex(currenIndex + 1);
    } else {
      setShowScore(true);
    }
  };

  //   check the correct ans
  const checkAnswer = (a: any, b: any) => {
    if (a === b) {
      setScore(score + 1);
      //   console.log(score);
    }
    // const precentage = (score / questions.length) * 100;
    if (currenIndex + 1 < questions.length) {
      //   alert(`Quiz is completed and your score is  ${score}`);

      setCurrentIndex(currenIndex + 1);
    } else {
      setShowScore(true);
    }
  };
  //   to restart the quiz
  const handleRestartQuiz = () => {
    setCurrentIndex(0);
    setScore(0);
    setShowScore(false);
  };
  // calculate percentage function

  const calculatePercentage = () => {
    return Math.round((score / questions.length) * 100);
  };

  return (
    <div className="p-2">
      {showScore ? (
        <div className="container p-4 mb-3 mt-5 bg-light rounded shadow text-center">
          <h2 className="mb-5">
            Your Score is : {score} out of {questions.length}
          </h2>
          <h2 className="mb-5">
            {calculatePercentage() > 50 ? "You are Passed" : "Sorry! Next Time"}
          </h2>
          <button className="btn btn-primary" onClick={handleRestartQuiz}>
            Restart Quiz
          </button>
        </div>
      ) : (
        <div className="container">
          <div className="p-4 mb-3 mt-3 bg-light rounded shadow">
            <p className="text-center">
              Questions:{currenIndex + 1}/{questions.length}
            </p>
          </div>
          <h3>
            Q{currenIndex + 1}: {questions[currenIndex].question}
          </h3>
          <div className="row">
            {questions[currenIndex].options.map((ele, i) => {
              return (
                <div key={i} className="col-md-4 p-2 w-full">
                  <button
                    className="btn btn-secondary w-100 d-flex justify-content-start"
                    onClick={() =>
                      checkAnswer(ele, questions[currenIndex].correctAnswer)
                    }
                  >
                    {ele}
                  </button>
                </div>
              );
            })}
          </div>
          <div className="navigation-buttons d-flex justify-content-end mt-4">
            <div className="mt-3 d-grid gap-2 col-2">
              {currenIndex > 0 && (
                <button
                  type="button"
                  className="btn btn-info me-2"
                  onClick={goPrevious}
                >
                  Previous
                </button>
              )}
            </div>
            <div className="mt-3 d-grid gap-2 col-2">
              <button
                type="button"
                className="btn btn-primary"
                onClick={goNext}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
