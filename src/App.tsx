import React, { useState } from "react";
import { fetchQuizQuestions } from "./api/api";

//components
import QuestionCard from "./components/QuestionCard";

//types
import { QuestionState, Difficulty } from "./api/api";

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

function App() {

  const totalQuestions = 10;
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);


  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuizQuestions(
      totalQuestions,
      Difficulty.EASY
    )

    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);

  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {

      //users' answer
      const answer = e.currentTarget.value;

      //check answer against correct answer
      const correct = questions[number].correct_answer === answer;

      //add score if answer is correct
      if (correct) {
        setScore(prev => prev + 1);
      }

      //save answer in the array for user answers
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer
      }

      setUserAnswers(prev => [...prev, answerObject]);
    }
  }

  const nextQuestion = () => {
    //move on to the next question if not the last question
    
    const nextQuestion = number + 1;

    if (nextQuestion === totalQuestions) {
      setGameOver(true);
    }
    else {
      setNumber(nextQuestion);
    }
  }

  return (
    <>
      <div>
        <h1>QUIZ TIME</h1>
        {
          gameOver || userAnswers.length === totalQuestions ? (
            <button className="start-btn" onClick={startTrivia}>
              Start
            </button>
          )
            : null
        }
        {!gameOver ? <p className="score">Score: {score}</p> : null}

        {loading ? <p>Loading Questions...</p> : null}

        {!loading && !gameOver && (
          <QuestionCard
            questionNum={number + 1}
            totalQuestions={totalQuestions}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}
          />
        )}

        {!gameOver && !loading && userAnswers.length === number + 1 && number !== totalQuestions - 1 ? (
          <button className="next-btn" onClick={nextQuestion}>
            Next Question
          </button>
        ) : null
        }

        {gameOver && userAnswers.length === totalQuestions && (
          <p>You guessed {score} questions correctly.</p>
        )
        }

      </div>
    </>
  )
}

export default App;
