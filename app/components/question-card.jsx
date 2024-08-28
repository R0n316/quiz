import Answers from "@/app/components/answers";
import CorrectAnswer from "@/app/components/correct-answer";
import NextButton from "@/app/components/next-button";

export default function QuestionCard({questionText, answerOptions, onClick, correctAnswer, nextQuestion}) {
    return (
        <div className={'flex flex-col w-full items-center h-screen justify-center'}>
            <h3 className={'mb-5'}>{questionText}</h3>
            <Answers answerOptions={answerOptions} onClick={onClick}/>
            <CorrectAnswer correctAnswer={correctAnswer}/>
            <NextButton isDisplayed={correctAnswer !== undefined} next={nextQuestion}/>
        </div>
    )
}