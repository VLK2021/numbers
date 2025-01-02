import React from 'react';
import { IoClose } from "react-icons/io5";

import css from './PopUp.module.css';


const PopUp = (props) => {
    const {setIsWin, setTime, setMoves} = props;

    const close = () => {
        setIsWin(false);
        setTime(0);
        setMoves(0);
    }


    return (
        <section className={css.wrap}>
            <div className={css.close}>
                <IoClose onClick={() => setIsWin(close)}/>
            </div>

        </section>
    );
};

export {PopUp};