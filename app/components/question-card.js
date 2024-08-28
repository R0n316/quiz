export function QuestionCard({questionText, answerOptions, onClick}) {
    return (
        <div className={'flex flex-col w-full items-center h-screen justify-center'}>
            <h3 className={'mb-5'}>{questionText}</h3>
            <div className={'grid grid-cols-2 grid-rows-2 gap-10'}>
                {answerOptions.map((answer, index) => {
                    return (
                        <div onClick={() => onClick(answer.isCorrect)}
                             className={'cursor-pointer'}
                             key={index}>{answer.answerText}</div>
                    )
                })}
            </div>
        </div>
    )
}