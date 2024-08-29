import {useState} from "react";

export default function UseQuizState() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [correctAnswer, setCorrectAnswer] = useState(undefined);
    const [selectedAnswer, setSelectedAnswer] = useState(undefined);
    const [completionTime, setCompletionTime] = useState(Date.now);
    const questions = [
        {
            questionText: 'Which mountain range separates Europe and Asia?',
            answerOptions: [
                {id:1,answerText: 'Rocky Mountains', isCorrect: false},
                {id:2,answerText: 'Alps', isCorrect: false},
                {id:3,answerText: 'Andes', isCorrect: false},
                {id:4,answerText: 'Urals', isCorrect: true}
            ]
        },
        {
            questionText: 'Which country is known as the "Land of the Rising Sun"?',
            answerOptions: [
                {id:1,answerText: 'China', isCorrect: false},
                {id:2,answerText: 'South Korea', isCorrect: false},
                {id:3,answerText: 'Japan', isCorrect: true},
                {id:4,answerText: 'Thailand', isCorrect: false}
            ]
        },
        {
            questionText: 'Which river is the longest in the world?',
            answerOptions: [
                {id:1,answerText: 'Nile', isCorrect: true},
                {id:2,answerText: 'Amazon', isCorrect: false},
                {id:3,answerText: 'Mississippi', isCorrect: false},
                {id:4,answerText: 'Yangtze', isCorrect: false}
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
                setSelectedAnswer(answer.id)
                setTimeout(() => {
                    setCurrentQuestion(currentQuestion + 1);
                    setSelectedAnswer(undefined);
                }, 700)
            } else {
                setCorrectAnswer(questions[currentQuestion].answerOptions
                    .find(option => option.isCorrect)?.answerText
                );
                setSelectedAnswer(answer.id);
            }
        }
    }

    const nextQuestion = () => {
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