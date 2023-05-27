import {Button, Form} from "antd";

const UserParticipation = (props) => {

    const submitHandle = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const choice = formData.get("choice")
        console.log(choice)


        props.handleClick(true)
        // vote update in data
        props.updateVote(choice)

        e.target.reset()

    }


    return <Form onSubmit={submitHandle}>
        <label htmlFor="choice">Choice</label>
        <select id="choice" name="choice" disabled={props.disableComponents}>
            {props.choices.map(d => <option key={d.id} value={d.label}>{d.label}</option>)}
        </select>
        <Button type="submit">Submit</Button>
    </Form>
}
export default UserParticipation