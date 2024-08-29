import QuizContainer from "@/app/components/quiz-container";
import QuestionInfo from "@/app/components/question-info";
import Answers from "@/app/components/answers";

export default function QuestionCard({questionText, answerOptions, onClick, correctAnswer,
                                         nextQuestion, questionNumber, totalQuestions, selectedAnswer}) {
    return (
        <QuizContainer>
            <QuestionInfo questionNumber={questionNumber}
                          totalQuestions={totalQuestions}
                          questionText={questionText}
                          correctAnswer={correctAnswer}
                          nextQuestion={nextQuestion}
            />
            <Answers answerOptions={answerOptions} onClick={onClick} selectedAnswer={selectedAnswer}/>
        </QuizContainer>
    )
}