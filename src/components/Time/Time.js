import React from 'react';

import css from './Time.module.css';


const Time = (props) => {
    const {time} = props;

    const formatTime = () => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };


    return (
        <section className={css.wrap}>
            <p>Time:</p>
            <div className={css.current}>{formatTime()}</div>
        </section>
    );
};

export {Time};