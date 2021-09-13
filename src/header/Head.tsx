import React from 'react';
import s from './Head.module.css'
import {Nav} from "../nav/Nav";

function Head() {
    return (
        <div className={s.header}>
            <Nav/>
        </div>
    );
}

export default Head;
