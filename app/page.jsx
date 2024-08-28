'use client';
import {QuestionCard} from "@/app/components/question-card";
import {useState} from "react";

export default function Home() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const questions = [
        {
            questionText: 'Question 1',
            answerOptions: [
                {answerText: 'answer 1', isCorrect: true},
                {answerText: 'answer 2', isCorrect: false},
                {answerText: 'answer 3', isCorrect: false},
                {answerText: 'answer 4', isCorrect: false}
            ]
        },
        {
            questionText: 'Question 2',
            answerOptions: [
                {answerText: 'answer 1', isCorrect: false},
                {answerText: 'answer 2', isCorrect: true},
                {answerText: 'answer 3', isCorrect: false},
                {answerText: 'answer 4', isCorrect: false}
            ]
        },
        {
            questionText: 'Question 3',
            answerOptions: [
                {answerText: 'answer 1', isCorrect: false},
                {answerText: 'answer 2', isCorrect: false},
                {answerText: 'answer 3', isCorrect: true},
                {answerText: 'answer 4', isCorrect: false}
            ]
        }
    ]

    const handleAnswer = (isCorrect) => {
        if(isCorrect) {
            setCorrectAnswers(correctAnswers + 1);
        }
        setCurrentQuestion(currentQuestion + 1);
    }

    return ((currentQuestion < questions.length) ?
        <QuestionCard questionText={questions[currentQuestion].questionText}
                      answerOptions={questions[currentQuestion].answerOptions}
                      onClick={handleAnswer}/>
            : <div>The quiz is over! Correct answers: {correctAnswers} out of {questions.length}</div>
)
}