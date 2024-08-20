import React, { useState } from 'react';
import Delete from './delete.svg';
import Up from './arrow_upward.svg';
import Down from './arrow_downward.svg'

function TODO() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if (newTask.trim() !== "") {
            setTasks(task => [...task, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index) {
        setTasks(tasks => tasks.filter((task, i) => i !== index));
    }

    function moveTaskUP(index) {
        if (index > 0) {
            setTasks(task => {
                const newTasks = [...task];
                [newTasks[index - 1], newTasks[index]] = [newTasks[index], newTasks[index - 1]];
                return newTasks;
            });
        }
    }

    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            setTasks(task => {
                const newTasks = [...task];
                [newTasks[index], newTasks[index + 1]] = [newTasks[index + 1], newTasks[index]];
                return newTasks;
            });
        }
    }

    return (
        <div className='to-do-list'>
            <h1>TO DO LIST</h1>

            <div>
                <input
                    type='text'
                    placeholder='Enter a Task'
                    value={newTask}
                    onChange={handleInputChange}
                />
                <button onClick={addTask} className='add-button'>ADD</button>
            </div>

            <ol>
                {tasks.map((task, index) =>
                    <li key={index}>
                        <input type="checkbox" className="checkbox" />
                        <span className="text">{task}</span>

                        <button className='delete-button' onClick={() => deleteTask(index)}>
                            <img src={Delete} alt='delete'/>
                        </button>

                        <button className='move-button' onClick={() => moveTaskUP(index)}>
                            <img src={Up} alt='up arrow'/>
                        </button>
                        
                        <button className='move-button' onClick={() => moveTaskDown(index)}>
                            <img src={Down} alt='down arrow'/>
                        </button>
                    </li>
                )}
            </ol>
        </div>
    );
}

export default TODO;
