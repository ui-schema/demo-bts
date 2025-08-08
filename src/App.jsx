import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import NavProject from "./components/NavProject";
import DemoEditor from "./components/DemoEditor";

export default function App() {
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
