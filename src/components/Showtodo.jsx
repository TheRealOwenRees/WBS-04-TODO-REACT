import { useEffect, useState } from 'react';

function Showtodo({ LOCAL_STORAGE_KEY, tasks, setTasks }) {
  const [completed, setCompleted] = useState({});

  const handleDeleteAll = () => {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    setTasks([]);
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleCheckbox = (id, checked) => {
    if (checked) {
      setTasks(tasks.map((task) => (id === task.id ? { ...task, complete: true } : task)));
      setCompleted({ ...completed, [id]: true });
    } else {
      setTasks(tasks.map((task) => (id === task.id ? { ...task, complete: false } : task)));
      setCompleted({ ...completed, [id]: false });
    }
  };

  useEffect(() => {
    if (!localStorage.getItem(LOCAL_STORAGE_KEY)) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([tasks]));
    } else {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
    }
  }, [completed]);

  const taskList = tasks.map((task) => (
    <div className="task-input-box" key={task.id}>
      <input type="text" className="task-input-field" value={task.task} readOnly />
      <input type="button" className="btn-sub btn-edit" value="Edit" />
      <input type="button" className="btn-sub btn-delete" value="Delete" onClick={() => handleDelete(task.id)} />
      <input
        type="checkbox"
        onChange={(e) => handleCheckbox(task.id, e.target.checked)}
        checked={task.complete}
      />
    </div>
  ));

  return (
    <div className="todo-container todo-task-list">
      <h1 className="heading-tasklist">Task List</h1>
      <div className="pending">
        <p>You have 0 pending tasks</p>
        <button type="button" className="btn-sub btn-destroy-all" onClick={() => handleDeleteAll()}>Clear All</button>
      </div>
      <div className="todo-tasks">
        <div className="list-input-box">
          {taskList}
        </div>
      </div>

    </div>
  );
}

export default Showtodo;
