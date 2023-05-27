import PollDisplay from "./PollDisplay";
import {data} from "./data";
import UserParticipation from "./UserParticipation";

const App = () => {
    return (
        <div>

            <PollDisplay data={data}/>
            <UserParticipation/>
        </div>
    )
}

export default App