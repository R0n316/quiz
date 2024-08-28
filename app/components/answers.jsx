import Answer from "@/app/components/answer";

export default function Answers({answerOptions, onClick}) {
    return <div className={'grid grid-cols-2 grid-rows-2 gap-10'}>
        {answerOptions.map((answer, index) => {
            return <Answer key={index} answer={answer} onClick={onClick}/>
        })}
    </div>
}