import QuestionNumber from "@/app/components/question-number";
import QuestionText from "@/app/components/question-text";

export default function QuestionInfo({questionNumber, totalQuestions, questionText}) {
    return <div className={'h-full w-[45%]'}>
        <QuestionNumber currentPosition={questionNumber} totalElements={totalQuestions}/>
        <QuestionText questionText={questionText}/>
    </div>
}