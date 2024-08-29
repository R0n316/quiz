export default function QuizContainer(props) {
    return <div className={'shadow-gray-800 shadow-2xl flex w-1/2 items-center' +
        ' h-[450px] justify-between bg-[#202942] rounded-2xl p-10 text-white'}>
        {props.children}
    </div>
}