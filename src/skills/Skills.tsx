import React from 'react';
import s from './Skills.module.css';
import style from '../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";


export function Skills() {

    let discription = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum labore numquam saepe! Error quisquam, quos.'

    return (
        <div className={s.skillsBlock}>
            <div className={`${style.contaner} ${s.skillsContainer}`}>
                <h2 className={s.title}>Мои скиллы</h2>
                <div className={s.skills}>
                    <Skill skill={'HTML/CSS'}
                           discription={discription}/>
                    <Skill skill={'TS/JS'}
                           discription={discription}/>
                    <Skill skill={'React'}
                           discription={discription}/>
                </div>
            </div>
        </div>
    )
}