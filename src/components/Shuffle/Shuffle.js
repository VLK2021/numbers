import React from 'react';

import css from './Shuffle.module.css';


const Shuffle = (props) => {
    const {shuffleTiles} = props;


    return (
        <button className={css.wrap} onClick={() => shuffleTiles()}>
            Shuffle
        </button>
    );
};

export {Shuffle};