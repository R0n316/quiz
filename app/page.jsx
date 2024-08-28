'use client';
import QuestionCard from "@/app/components/question-card";
import UseQuizState from "@/app/components/use-quiz-state";
import QuizResult from "@/app/components/quiz-result";

export default function Home() {

    const {
        currentQuestion,
        correctAnswers,
        questions,
        handleAnswer,
        correctAnswer,
        nextQuestion
    } = UseQuizState();

    return ((currentQuestion < questions.length) ?
        <QuestionCard questionText={questions[currentQuestion].questionText}
                      answerOptions={questions[currentQuestion].answerOptions}
                      onClick={handleAnswer}
                      correctAnswer={correctAnswer}
                      nextQuestion={nextQuestion}/>
            : <QuizResult correctAnswers={correctAnswers} questionsNumber={questions.length}/>
)
}