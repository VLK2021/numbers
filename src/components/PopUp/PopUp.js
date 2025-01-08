import React from 'react';
import { IoClose } from "react-icons/io5";

import css from './PopUp.module.css';


const PopUp = (props) => {
    const {setIsWin, setTime, setMoves, setIsRunning, time, moves} = props;

    const formatTime = () => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    const close = () => {
        setIsRunning(true);
        setIsWin(false);
        setTime(0);
        setMoves(0);
    }


    return (
        <section className={css.wrap}>
            <div className={css.close}>
                <IoClose onClick={() => setIsWin(close)}/>
            </div>

            <p>{formatTime()}- {moves}</p>

        </section>
    );
};

export {PopUp};