import React from 'react';
import './App.css';
import {Todolist} from "./Todolist";

function App() {
    const title='What to learn'
    const title2='What to learn2'

    const tasks1 = [
        {id: 1, title: 'HTML&CSS', isDone: true },
        {id: 2, title: 'JS', isDone: true },
        {id: 3, title: 'React', isDone: false },
        {id: 4, title: 'Angular', isDone: false }
    ]
    const tasks2 = [
        {id: 1, title: 'Hello World', isDone: true },
        {id: 2, title: 'I am happy', isDone: false },
        {id: 3, title: 'Yo', isDone: false }
    ]

    return (
        <div className="App">
            <Todolist title={title} titleNew={100} tasks={tasks1}/>
            <Todolist title={title2} tasks={tasks2}/>
        </div>
    );
}

export default App;
