import React from 'react';

export function Task(props) {

    return (
        <section className="task">
            <h1>task: {props.task.name}</h1>
        </section>
    )
}