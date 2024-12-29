import React, {useState, useEffect} from 'react';

import css from './App.module.css';
import {GameBoard} from "./components";


function App() {
    const [time, setTime] = useState(0);
    const [moves, setMoves] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [tiles, setTiles] = useState([]);

    useEffect(() => {
        if (isRunning) {
            const timer = setInterval(() => setTime(prev => prev + 1), 1000);
            return () => clearInterval(timer);
        }
    }, [isRunning]);


    const shuffleTiles = () => {
        const shuffled = [...Array(16).keys()]
            .filter(num => num !== 0)
            .sort(() => Math.random() - 0.5);
        shuffled.push(null);

        setTiles(shuffled);
        setTime(0);
        setMoves(0);
        setIsRunning(true);
    };

    useEffect(() => {
        shuffleTiles();
    }, []);


    return (
        <main className={css.wrap}>
            <section className={css.titleContainer}>
                title
            </section>

            <section className={css.info}>
                <div className={css.infoContainer}>

                </div>

                <div className={css.gameContainer}>
                    <GameBoard tiles={tiles} setTiles={setTiles} setMoves={setMoves}/>
                </div>
            </section>
        </main>
    );
}

export {App};
