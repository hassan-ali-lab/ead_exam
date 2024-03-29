import PollDisplay from "./PollDisplay";
import UserParticipation from "./UserParticipation";
import AnotherUserParticipation from "./AnotherUserParticipation";
import {Component, useState} from "react";
import ThankYouMessage from "./ThankYouMessage";
import {Space} from "antd";
import './style.css'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            disabledComponents: false, data: {
                "question": "What is your favorite programming language?",
                "choices": [{"id": 1, "label": "JavaScript", "votes": 0}, {
                    "id": 2,
                    "label": "Python",
                    "votes": 0
                }, {"id": 3, "label": "Java", "votes": 0}, {"id": 4, "label": "C#", "votes": 0}]

            }
        };
    }

    handleClick = (value) => {
        this.setState({disabledComponents: value})
    }
    updateVote = (choice) => {
        this.setState((prevState) => {
            const data = prevState.data
            const choiceObj = data.choices.find(d => d.label === choice)
            choiceObj.votes++
            return {data}
        }, () => {
            console.log(this.state.data)
        })
    }

    render() {
        return (<div className={'app'}>

            <Space>
                <ThankYouMessage disableComponents={this.state.disabledComponents}/></Space>
            <Space> <PollDisplay data={this.state.data}/></Space>
            <div><UserParticipation disableComponents={this.state.disabledComponents} handleDisable={this.handleClick}
                                    updateVote={this.updateVote}
                                    choices={this.state.data.choices}

            /></div>
            <div>
                <AnotherUserParticipation handleClick={this.handleClick}/>
            </div>

        </div>)
    }

}

export default App