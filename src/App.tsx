import React from 'react';
import './App.css';
import Head from "./header/Head";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {Works} from "./works/Works";
import {RemoteWork} from "./remoteWork/RemoteWork";
import {Contacts} from "./contacts/Contacts";



function App() {
    return (
        <div className="App">
            <Head/>
            <Main/>
            <Skills/>
            <Works/>
            <RemoteWork/>
            <Contacts/>
                   </div>
    );
}

export default App;
