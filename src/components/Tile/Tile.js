import React from 'react';

import css from './Tile.module.css';


const Tile = (props) => {
    const {obj, index, moveTile} = props;


    return (
        <div
            key={index}
            className={`${css.tile} ${obj === null ? css.empty : ''}`}
            onClick={() => moveTile(index)}
        >
            {obj}
        </div>
    );
};

export {Tile};