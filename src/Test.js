import React, { useState, useEffect, useRef } from 'react';

const Test = () => {
    // State for tracking which box is glowing
    const [glowingBox, setGlowingBox] = useState(null);
    // State to store the random number to stop at
    const [stopAt, setStopAt] = useState(null);
    // State to control the cycle running status
    const [isRunning, setIsRunning] = useState(false);
    // State to track the rounds
    const [rounds, setRounds] = useState(0);
    const intervalRef = useRef(null);  // To store the interval ID for clearing later
    const [speed, setSpeed] = useState(400);  // Default speed (1 second)


    useEffect(() => {
        // Function to handle the glowing cycle
        const startCycle = () => {
            if (!isRunning) return;

            let boxIndex = 0;
            let currentRounds = 0;
            intervalRef.current = setInterval(() => {
                // Check if rounds have completed
                if (currentRounds >= 3 && stopAt !== null && boxIndex === stopAt - 1) {
                    clearInterval(intervalRef.current);
                }

                setGlowingBox(boxIndex);
                boxIndex = (boxIndex + 1) % 8;

                // Track the rounds, stop after 3 full rounds
                if (boxIndex === 0) {
                    currentRounds += 1;
                }

            }, 1000); // 1 second interval
        };

        // Start the cycle when isRunning state changes
        if (isRunning) {
            startCycle();
        }

        // Cleanup interval when stopping
        return () => clearInterval(intervalRef.current);
    }, [isRunning, stopAt,speed]);

    const handleStartClick = () => {
        // Generate a random number between 1 and 8
        const randomBox = Math.floor(Math.random() * 8) + 1;
        setStopAt(randomBox); // Set the box to stop at
        setRounds(0); // Reset the rounds count
        setIsRunning(true); // Start the glowing cycle
    };

    const handleReset = () => {
        setIsRunning(false);  // Stop the cycle
        setStopAt(null);      // Clear the stop point
        setGlowingBox(null);  // Reset glowing box
    };

    return (
        <div>
            <div className="boxes-container">
                {[...Array(8)].map((_, index) => (
                    <div
                        key={index}
                        className={`box ${glowingBox === index ? 'glowing' : ''}`}
                    >
                        Box {index + 1}
                    </div>
                ))}
            </div>
            <button onClick={handleStartClick}>Start</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
};

export default Test;
