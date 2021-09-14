import React from 'react';
import s from './Works.module.css';
import style from '../common/styles/Container.module.css'
import {Work} from "./work/Work";



export function Works() {

   let progectDiscription = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dicta dolorem eligendi exercitationem maiores nulla perferendis quasi repellendus sunt voluptates.'

    return (
        <div className={s.worksBlock}>
            <div className={`${style.contaner} ${s.worksContainer}`}>
                <h2 className={s.title}>Мои работы</h2>
                <div className={s.works}>
                    <Work project={'Samurai Way'}                          progectDiscription={progectDiscription}/>
                    <Work project={'TodoList'}
                          progectDiscription={progectDiscription}/>
                              </div>
            </div>
        </div>
    )
}