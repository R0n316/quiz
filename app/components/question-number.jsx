export default function QuestionNumber({currentPosition, totalElements}) {
    return <h2 className={'text-5xl mb-8'}>Question {currentPosition}
        <span className={'text-3xl'}>/{totalElements}</span></h2>
}