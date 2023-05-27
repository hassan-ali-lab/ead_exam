const PollDisplay = (props) => {
    const {question, choices} = props.data
    return <div>
        Question: {question}
        <ul>
            {choices.map((choice, index) => <li key={choice.id}>{index + 1}. {choice.label}</li>)}
        </ul>
    </div>
}

export default PollDisplay