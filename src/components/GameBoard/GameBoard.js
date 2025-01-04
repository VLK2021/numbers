import React, {useEffect} from 'react';

import css from './GameBoard.module.css';
import {Tile} from "../Tile/Tile";


const GameBoard = (props) => {
    const {tiles, setTiles, setMoves, setIsWin, setIsRunning} = props;

    const moveTile = (index) => {
        const emptyIndex = tiles.indexOf(null);
        const isValidMove = [1, -1, 4, -4].includes(index - emptyIndex) &&
            !(Math.abs(index - emptyIndex) === 1 && Math.floor(index / 4) !== Math.floor(emptyIndex / 4));

        if (isValidMove) {
            const newTiles = [...tiles];
            [newTiles[index], newTiles[emptyIndex]] = [newTiles[emptyIndex], newTiles[index]];
            setTiles(newTiles);
            setMoves((prev) => prev + 1);
        }
    };

    useEffect(() => {
        if (tiles.every((tile, index) => tile === null || tile === index + 1)) {
            setIsRunning(false);
            setIsWin(true);
            console.log('abra kadabra');
        }
    }, [tiles]);


    return (
        <section className={css.wrap}>
            <section className={css.board}>
                {tiles.map((obj, index) => <Tile key={index} obj={obj} index={index} moveTile={moveTile}/>)}
            </section>
        </section>
    );
};

export {GameBoard};