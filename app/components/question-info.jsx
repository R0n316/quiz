import QuestionNumber from "@/app/components/question-number";
import QuestionText from "@/app/components/question-text";
import CorrectAnswer from "@/app/components/correct-answer";
import NextButton from "@/app/components/next-button";

export default function QuestionInfo({questionNumber, totalQuestions, questionText, correctAnswer, nextQuestion}) {
    return <div className={'h-full w-[45%]'}>
        <QuestionNumber currentPosition={questionNumber} totalElements={totalQuestions}/>
        <QuestionText questionText={questionText}/>
        <CorrectAnswer correctAnswer={correctAnswer}/>
        <NextButton isDisplayed={correctAnswer !== undefined} next={nextQuestion}/>
    </div>
}