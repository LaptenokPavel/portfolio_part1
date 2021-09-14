import React from 'react';
import s from './Work.module.css';


type WorkPropsType = {
    project: string
    progectDiscription: string
}


export function Work(props: WorkPropsType) {
    return (
        <div className={s.work}>
            <div className={s.imgContainer}>
                <button>Смотреть</button>
            </div>
            <h3>{props.project}</h3>
            <span className={s.discription}>{props.progectDiscription}</span>
        </div>
    )
}