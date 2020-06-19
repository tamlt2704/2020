import React from 'react'

function Instructions({ steps }) {
    return (
        <section className="instructions">
            <h2> Cooking Instructions </h2>
            {
                steps.map((step, i) => (
                    <p key={i}> {step} </p>
                ))
            }
        </section>
    );
}

export default Instructions;
