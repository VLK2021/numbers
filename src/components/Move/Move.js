import React from 'react';

import css from './Move.module.css';


const Move = (props) => {
    const {moves} = props;


    return (
        <section className={css.wrap}>
            <p>Moves:</p>
            <div className={css.current}>{moves}</div>
        </section>
    );
};

export {Move};