import React from 'react';

const Generated_numbers = ({ numbers }) => {
    return (
        <section className="generated-numbers">
            <div className="horizontal-list">
                {numbers.map((num, index) => (
                    <div key={index} className="number-item">{num}</div>
                ))}
            </div>
        </section>
    );
}

export default Generated_numbers;
