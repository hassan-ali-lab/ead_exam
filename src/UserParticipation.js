import {Button, Form} from "antd";

const UserParticipation = (props) => {

    const submitHandle = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const choice = formData.get("choice")
        console.log(choice)


        props.handleDisable(true)
        // vote update in data
        props.updateVote(choice)
        console.log(choice)
        e.target.reset()

    }


    return <form onSubmit={submitHandle}>
        <label htmlFor="choice">Choice</label>
        <select id="choice" name="choice" disabled={props.disableComponents}>
            {props.choices.map(d => <option key={d.id} value={d.label}>{d.label}</option>)}
        </select>
        <button type="submit">Submit</button>
    </form>
}
export default UserParticipation