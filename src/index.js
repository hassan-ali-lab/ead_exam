import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import {BrowserRouter, Routes} from "react-router-dom";
import PollDisplay from "./PollDisplay";
import Timer from "./Timer";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.Fragment>

    <App/>
    <Timer/>

</React.Fragment>);

