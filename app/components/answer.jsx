export default function Answer({answer, onClick, selectedAnswer}) {
    const isSelectedAnswer = JSON.stringify(selectedAnswer) === JSON.stringify(answer);

    const isIncorrectAnswer = isSelectedAnswer && !answer.isCorrect;
    return (
        <div
            onClick={() => onClick(answer)}
            className={
                "cursor-pointer border-8 rounded-3xl h-1/5 flex items-center box-border pl-5 text-3xl transition-colors duration-[400ms] " +
                (isIncorrectAnswer
                    ? "border-red-500"
                    : "hover:border-[#5E451FFF] border-[#1F3D5E]")
            }
        >
            {answer.answerText}
        </div>
    );
}