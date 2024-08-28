export default function NextButton({isDisplayed, next}) {
    return isDisplayed && <button onClick={next}>Next question</button>
}