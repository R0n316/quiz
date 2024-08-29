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
        nextQuestion,
        selectedAnswer,
        formattedCompetitionTime
    } = UseQuizState();

    return ((currentQuestion < questions.length) ?
        <QuestionCard questionText={questions[currentQuestion].questionText}
                      answerOptions={questions[currentQuestion].answerOptions}
                      onClick={handleAnswer}
                      correctAnswer={correctAnswer}
                      nextQuestion={nextQuestion}
                      totalQuestions={questions.length}
                      questionNumber={currentQuestion + 1}
                      selectedAnswer={selectedAnswer}
        />
            : <QuizResult correctAnswers={correctAnswers}
                          questionsNumber={questions.length}
                          completionTime={formattedCompetitionTime}
            />
)
}