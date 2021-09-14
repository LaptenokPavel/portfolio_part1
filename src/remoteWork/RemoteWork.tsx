import React from 'react';
import s from './RemoteWork.module.css';
import style from '../common/styles/Container.module.css'


export function RemoteWork() {
    return (
        <div className={s.remoteWorkBlock}>
            <div className={`${style.contaner} ${s.remoteWork}`}>
                <h2 className={s.title}>
                    Рассматриваю варианты удаленной работы
                </h2>
                <button className={s.button}>Нанять меня</button>
            </div>
        </div>
    )
}