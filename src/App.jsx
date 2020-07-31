import React from "react";
import "./App.scss";

import Board from "./Components/Board";
import Dice from "./Models/Dice/Dice";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Board />
            </header>
        </div>
    );
}

export default App;
