import QuizContainer from "@/app/components/quiz-container";

export default function QuizResult({correctAnswers, questionsNumber, completionTime}) {
    return <QuizContainer>
        <div className={'flex flex-col items-center w-full'}>
            <h3 className={'text-3xl mb-8'}>The quiz is over! Correct answers: {correctAnswers} out of {questionsNumber}</h3>
            <span className={'text-2xl'}>Quiz time: {completionTime}</span>
        </div>
    </QuizContainer>
}