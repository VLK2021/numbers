import React, {useState, useEffect} from 'react';

import css from './App.module.css';
import {GameBoard, Move, PopUp, Shuffle, Time} from "./components";


function App() {
    const [time, setTime] = useState(0);
    const [moves, setMoves] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [isWin, setIsWin] = useState(false);
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
        setIsWin(false);
    };

    useEffect(() => {
        shuffleTiles();
    }, []);


    return (
        <main className={css.wrap}>
            <section className={css.info}>
                <section className={css.infoContainer}>
                    <article className={css.time}>
                        <Time time={time}/>
                    </article>

                    <article className={css.move}>
                        <Move moves={moves}/>
                    </article>

                    <article className={css.btn}>
                        <Shuffle shuffleTiles={shuffleTiles}/>
                    </article>
                </section>

                <section className={css.gameContainer}>
                    <GameBoard
                        tiles={tiles}
                        setTiles={setTiles}
                        setMoves={setMoves}
                        setIsWin={setIsWin}
                        setIsRunning={setIsRunning}
                    />
                </section>
            </section>

            {isWin && <PopUp
                setIsWin={setIsWin}
                setTime={setTime}
                setMoves={setMoves}
                setIsRunning={setIsRunning}
                time={time}
                moves={moves}
            />}
        </main>
    );
}

export {App};
