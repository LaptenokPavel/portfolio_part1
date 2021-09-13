import React from 'react';
import s from './Skills.module.css';
import style from '../common/styles/Container.module.css'


export function Skills() {
    return (
        <div className={s.skillsBlock}>
            <div className={`${style.contaner} ${s.skillsContainer}`}>
                <h2 className={s.title}>Мои скиллы</h2>
                <div className={s.skills}>

                </div>
            </div>
        </div>
    )
}