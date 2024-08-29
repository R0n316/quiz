export default function NextButton({isDisplayed, next}) {
    return isDisplayed && <button className={'mt-6 border-4 rounded-xl w-40 h-10 text-lg'} onClick={next}>Next question</button>
}