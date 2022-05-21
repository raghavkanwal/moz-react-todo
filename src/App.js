import React, { useState } from 'react';
import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import { nanoid } from "nanoid";

function App(props) {
  function addTask(name) {
    const newTask = { id: `todo-${nanoid()}`, name: name, completed: false};
    setTasks([...tasks, newTask]);
  }

  const [tasks, setTasks] = useState(props.tasks);
  
  const taskList = tasks.map(task => {
    return <Todo key={task.id} id={task.id} name={task.name} completed={task.completed} />;
  });

  const tasksNoun = taskList.length !== 1 ? 'tasks' : 'task';
  const headingText = `${taskList.length} ${tasksNoun} remaining`;

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask={addTask}/>
      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>

      <h2 id="list-heading">
        {headingText} tasks remaining
      </h2>

      <ul
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );
}

export default App;
