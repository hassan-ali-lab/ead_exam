const ThankYouMessage = (props) => {
    return <div>
        {(props.disableComponents) && <h1>Thank you for voting</h1>}
    </div>
}

export default ThankYouMessage