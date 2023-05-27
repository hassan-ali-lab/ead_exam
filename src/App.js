import PollDisplay from "./PollDisplay";
import {data} from "./data";
import UserParticipation from "./UserParticipation";
import AnotherUserParticipation from "./AnotherUserParticipation";
import {useState} from "react";

const App = () => {

    const [disabledComponents, setDisabledComponents] = useState(false)
    const handleClick = (value) => {
        setDisabledComponents(value)
    }

    return (
        <div>

            <PollDisplay data={data}/>
            <UserParticipation disableComponents={disabledComponents} handleClick={handleClick}/>
            <AnotherUserParticipation handleClick={handleClick}/>
        </div>
    )
}

export default App