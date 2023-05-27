import PollDisplay from "./PollDisplay";
import {data} from "./data";

const App = () => {
    return (
        <div>
            <PollDisplay data={data}/>
        </div>
    )
}

export default App