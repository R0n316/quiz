import {useState} from "react";

export default function UseQuizState() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [correctAnswer, setCorrectAnswer] = useState(undefined);
    const [selectedAnswer, setSelectedAnswer] = useState(undefined);
    const [completionTime, setCompletionTime] = useState(Date.now);
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

    const handleAnswer = (answer) => {
        if(selectedAnswer === undefined) {
            if (currentQuestion === questions.length - 1) {
                calculateCompletionTime();
            }
            if(answer.isCorrect) {
                setCorrectAnswers(correctAnswers + 1);
                setCorrectAnswer(undefined);
                setCurrentQuestion(currentQuestion + 1);
                setSelectedAnswer(undefined);
            } else {
                setCorrectAnswer(questions[currentQuestion].answerOptions
                    .find(option => option.isCorrect)?.answerText
                );
                setSelectedAnswer(answer);
            }
        }
    }

    const nextQuestion = () => {
        if (currentQuestion === questions.length - 1) {
            calculateCompletionTime();
        }
        setCorrectAnswer(undefined);
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(undefined);
    }

    const calculateCompletionTime = () => {
        const startTime = completionTime;
        const currentTime = Date.now();
        setCompletionTime(currentTime - startTime);
    }

    const formatTimestamp = (timestamp) => {
        let seconds = Math.floor(timestamp / 1000);
        let minutes = Math.floor(seconds / 60);
        let hours = Math.floor(minutes / 60);
        if (hours > 0) {
            return `${hours} hours, ${minutes % 60} minutes, ${seconds % 60} seconds`;
        }
        if (minutes > 0) {
            return `${minutes} minutes, ${seconds % 60} seconds`;
        }
        return `${seconds} seconds`;
    }

    const formattedCompetitionTime = formatTimestamp(completionTime);

    return {
        currentQuestion,
        correctAnswers,
        questions,
        handleAnswer,
        correctAnswer,
        nextQuestion,
        selectedAnswer,
        formattedCompetitionTime
    }
}