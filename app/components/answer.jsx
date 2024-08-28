export default function Answer({answer, onClick}) {
    return <div onClick={() => onClick(answer.isCorrect)}
                className={'cursor-pointer'}>
        {answer.answerText}
    </div>
}