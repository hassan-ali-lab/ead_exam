import {Form} from "react-router-dom";
import {data, users} from "./data";
import {useState} from "react";

const UserParticipation = (props) => {

    const submitHandle = (e) => {
        e.preventDefault()


        // get data from form
        const formData = new FormData(e.target)
        const name = formData.get("name")
        const choice = formData.get("choice")
        console.log(name, choice)

        // check if user has already voted
        if (users[name]) {
            alert("You have already voted")
            return
        }
        users[name] = choice
        props.handleClick(true)
        // vote update in data
        data.choices.find(d => d.label === choice).votes++

        e.target.reset()

        console.log(users)
        console.log(data)

    }


    return <form onSubmit={submitHandle}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" disabled={props.disableComponents}/>
        <label htmlFor="choice">Choice</label>
        <select id="choice" name="choice" disabled={props.disableComponents}>
            {data.choices.map(d => <option key={d.id} value={d.label}>{d.label}</option>)}
        </select>
        <button type="submit">Submit</button>
    </form>
}
export default UserParticipation