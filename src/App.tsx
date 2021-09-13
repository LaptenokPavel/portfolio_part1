import React from 'react';
import './App.css';
import Head from "./header/Head";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";


function App() {
    return (
        <div className="App">
            <Head/>
            <Main/>
            <Skills/>
        </div>
    );
}

export default App;
