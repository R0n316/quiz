import Answers from "@/app/components/answers";
import CorrectAnswer from "@/app/components/correct-answer";
import NextButton from "@/app/components/next-button";
import QuestionInfo from "@/app/components/question-info";

export default function QuestionCard({questionText, answerOptions, onClick, correctAnswer,
                                         nextQuestion, questionNumber, totalQuestions}) {
    return (
        <div className={'h-screen flex w-full justify-center items-center bg-[#69BBFF]'}>
            <div className={'shadow-gray-800 shadow-2xl flex w-1/2 items-center' +
                ' h-[450px] justify-between bg-[#202942] rounded-2xl p-10 text-white'}>
                <QuestionInfo questionNumber={questionNumber} totalQuestions={totalQuestions} questionText={questionText}/>
                <Answers answerOptions={answerOptions} onClick={onClick}/>
                <CorrectAnswer correctAnswer={correctAnswer}/>
                <NextButton isDisplayed={correctAnswer !== undefined} next={nextQuestion}/>
            </div>
        </div>
    )
}