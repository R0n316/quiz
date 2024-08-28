import {useState} from "react";

export default function UseQuizState() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [correctAnswer, setCorrectAnswer] = useState(undefined);
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
            setCorrectAnswer(undefined);
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setCorrectAnswer(questions[currentQuestion].answerOptions
                .find(option => option.isCorrect)?.answerText
            );
        }
    }

    const nextQuestion = () => {
        setCorrectAnswer(undefined);
        setCurrentQuestion(currentQuestion + 1);
    }
    return {
        currentQuestion,
        correctAnswers,
        questions,
        handleAnswer,
        correctAnswer,
        nextQuestion,
    }
}