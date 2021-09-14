import React from 'react';
import s from './Form.module.css';



export function Form() {
    return (
        <div className={s.form}>

            <form>
                <input value={'tel'}/>
                <input value={'adress'}/>
                <textarea  placeholder='textarea'></textarea>
            </form>
        </div>
    )
}