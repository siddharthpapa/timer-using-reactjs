// src/Timer.js

import React, { useState, useEffect } from 'react';

const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let interval = null;

        if (isActive) {
            interval = setInterval(() => {
                setSeconds(prevSeconds => prevSeconds + 1);
            }, 1000);
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [isActive, seconds]);

    const toggle = () => {
        setIsActive(!isActive);
    };

    const reset = () => {
        setIsActive(false);
        setSeconds(0);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>{seconds}s</h1>
            <button onClick={toggle}>
                {isActive ? 'Pause' : 'Start'}
            </button>
            <button onClick={reset} style={{ marginLeft: '10px' }}>
                Reset
            </button>
        </div>
    );
};

export default Timer;
