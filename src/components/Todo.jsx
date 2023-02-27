import { useState } from 'react';
import Addtodo from './Addtodo';
import Showtodo from './Showtodo';

function Todo() {
  const LOCAL_STORAGE_KEY = 'todo-list';
  const [tasks, setTasks] = useState(!localStorage.getItem(LOCAL_STORAGE_KEY)
    ? []
    : JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)));

  return (
    <section className="todo-wrapper">
      <h2 id="heading">TO DO LIST</h2>
      <Addtodo LOCAL_STORAGE_KEY={LOCAL_STORAGE_KEY} tasks={tasks} setTasks={setTasks} />
      <Showtodo LOCAL_STORAGE_KEY={LOCAL_STORAGE_KEY} tasks={tasks} setTasks={setTasks} />
    </section>
  );
}

export default Todo;
