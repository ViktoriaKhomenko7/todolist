import React from 'react';
import './App.css';
import TodoList, {TaskType} from "./TodoList";


function App() {
    // BLL:
    const todoListTitle_1: string = "What to learn"
    const todoListTitle_2: string = "What to buy"
    const todoListTitle_3: string = "What to do"
    const tasks_1: Array<TaskType> = [
        {id: 1, isDone: true, title: "HTML/CSS"},
        {id: 2, isDone: true, title: "JS"},
        {id: 3, isDone: true, title: "React"},
        {id: 4, isDone: true, title: "Angular"}
    ]
    const tasks_2: Array<TaskType> = [
        {id: 5, isDone: true, title: "coffee"},
        {id: 6, isDone: true, title: "pasta"},
        {id: 7, isDone: true, title: "water"},
        {id: 8, isDone: true, title: "meat"}
    ]
    const tasks_3: Array<TaskType> = [
        {id: 9, isDone: true, title: "wash"},
        {id: 10, isDone: true, title: "shop"},
        {id: 11, isDone: true, title: "sleep"},
        {id: 12, isDone: true, title: "study"}
    ]

    // UI:
    return (
        <div className="App">
            {/*TodoList */}
            <TodoList
                tasks={tasks_1}
                title={todoListTitle_1}/>
            <TodoList
                tasks={tasks_2}
                title={todoListTitle_2}/>
            <TodoList
                tasks={tasks_3}
                title={todoListTitle_3}/>
        </div>
    );
}

export default App;
