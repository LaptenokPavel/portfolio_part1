import React from 'react';
import s from './Footer.module.css';
import style from '../common/styles/Container.module.css'




export function Footer() {
    return (
        <div className={s.footerBlock}>
            <div className={`${style.contaner} ${s.footerContainer}`}>
                <h2 className={s.title}>Павел Лаптёнок</h2>
                <div className={s.footer}>
                    <div className={s.black}></div>
                    <div className={s.white}></div>
                    <div className={s.black}></div>
                    <div className={s.white}></div>
                    <div className={s.black}></div>
                    <div className={s.white}></div>
                    <div className={s.black}></div>
                </div>
                <div className={s.reserved}>@2021 Все права защищены</div>

            </div>


        </div>
    )
}