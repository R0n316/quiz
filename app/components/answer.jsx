export default function Answer({answer, onClick, selectedAnswer}) {
    const isSelectedAnswer = selectedAnswer === answer.id;
    const isIncorrectAnswer = isSelectedAnswer && !answer.isCorrect;
    const isCorrectAnswer = isSelectedAnswer && answer.isCorrect;

    return (
        <div
            onClick={() => onClick(answer)}
            className={
                "cursor-pointer border-8 rounded-3xl h-1/5 flex items-center box-border pl-5 text-3xl transition-colors duration-[400ms] " +
                (isIncorrectAnswer
                    ? "border-red-500"
                    : isCorrectAnswer
                        ? "border-green-500" // Зеленая рамка для правильного ответа
                        : "border-[#1F3D5E]") +
                (selectedAnswer === undefined ? ' hover:border-[#5E451FFF]' : '')
            }
        >
            {answer.answerText}
        </div>
    );

}