export default function Answer({answer, onClick}) {
    return <div onClick={() => onClick(answer.isCorrect)}
                className={'cursor-pointer border-8 border-[#1F3D5E]' +
                    ' rounded-3xl h-1/5 flex items-center box-border' +
                    ' pl-5 text-3xl transition-colors duration-[400ms] hover:border-[#5E451FFF]'}>
        {answer.answerText}
    </div>
}