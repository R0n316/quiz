import Answer from "@/app/components/answer";

export default function Answers({answerOptions, onClick, selectedAnswer}) {
    return <div className={'flex flex-col h-full justify-between w-1/2'}>
        {answerOptions.map((answer, index) => {
            return <Answer key={index} answer={answer} onClick={onClick} selectedAnswer={selectedAnswer}/>
        })}
    </div>
}