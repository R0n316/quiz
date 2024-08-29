export default function CorrectAnswer({correctAnswer}) {
    return correctAnswer && <div className={'mt-5 break-words text-xl'}>Correct answer: {correctAnswer}</div>
}