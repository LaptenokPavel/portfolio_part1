import React from 'react';
import s from './Contacts.module.css';
import style from '../common/styles/Container.module.css'
import {Form} from "./form/Form";


export function Contacts() {
    return (
        <div className={s.contactsBlock}>
            <div className={`${style.contaner} ${s.contactsContainer}`}>
                <h2 className={s.title}>Контакты</h2>
                <Form/>
                <button className={s.button}>Отправить</button>
            </div>
        </div>
    )
}