import Answers from "@/app/components/answers";
import QuestionInfo from "@/app/components/question-info";

export default function QuestionCard({questionText, answerOptions, onClick, correctAnswer,
                                         nextQuestion, questionNumber, totalQuestions, selectedAnswer}) {
    return (
        <div className={'h-screen flex w-full justify-center items-center bg-[#69BBFF]'}>
            <div className={'shadow-gray-800 shadow-2xl flex w-1/2 items-center' +
                ' h-[450px] justify-between bg-[#202942] rounded-2xl p-10 text-white'}>
                <QuestionInfo questionNumber={questionNumber}
                              totalQuestions={totalQuestions}
                              questionText={questionText}
                              correctAnswer={correctAnswer}
                              nextQuestion={nextQuestion}
                />
                <Answers answerOptions={answerOptions} onClick={onClick} selectedAnswer={selectedAnswer}/>
            </div>
        </div>
    )
}