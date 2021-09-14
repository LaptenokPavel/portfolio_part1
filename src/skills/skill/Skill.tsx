import React from 'react';
import s from './Skill.module.css';

type skillPropsType = {
    skill: string
    discription: string
}

export function Skill(props: skillPropsType) {
    return (
        <div className={s.skill}>
            <div className={s.icon}></div>
            <h3>{props.skill}</h3>
            <span className={s.discription}>
                {props.discription}</span>
        </div>
    )
}


