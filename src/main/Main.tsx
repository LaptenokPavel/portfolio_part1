import React from 'react';
import s from './Main.module.css'
import style from '../common/styles/Container.module.css'

export function Main () {
    return(
        <div className={s.mainBlock}>

            <div className={style.contaner}>
                <div className={s.text}>
                    <span>Привет!</span>
                    <h1>Меня зовут Павел Лаптёнок.</h1>
                    <p>Я front-end разработчик.</p>
                </div>
                <div className={s.photo}>
            </div>

            </div>
        </div>
    )
}