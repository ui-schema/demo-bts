import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {PageNotFound} from "./component/PageNotFound";
import NavProject from "./component/NavProject";
import DemoEditor from "./Schema/DemoEditor";


import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";


function PageMain() {
    return (
        <div className="container">
            <div className={["row", "text-center"].join(' ')}>
                <div className="col-12">
                    <h2 className="m-5">
                        UI-Schema + Bootstrap Example
                    </h2>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className={["card", "bg-light", "shadow-sm", "p-2", "my-2"].join(' ')}>
                        <DemoEditor/>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className={["card", "bg-light", "shadow-sm", "p-2", "my-2"].join(' ')}>
                        <NavProject/>
                    </div>
                </div>
            </div>
        </div>
    );
}

function App() {
    return <Router>
        <Switch>
            <Route path="/" exact component={PageMain}/>
            <Route path="/" component={PageNotFound}/>

        </Switch>
    </Router>
}

export default App;
