import { FaPlus } from 'react-icons/fa';
import { useState, useEffect } from 'react';

function Addtodo({ LOCAL_STORAGE_KEY, tasks, setTasks }) {
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    const taskObj = {
      task: newTask,
      complete: false,
      id: crypto.randomUUID(),
    };
    setTasks([...tasks, taskObj]);
    setNewTask('');
  };

  useEffect(() => {
    if (!localStorage.getItem(LOCAL_STORAGE_KEY)) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([]));
    }
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="todo-container">
      <div className="add-task-wrapper">
        <div className="task-input-box">
          <input
            className="input-field"
            type="text"
            placeholder="Add new task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button className="btn-sub btn-add" onClick={handleAddTask}><FaPlus /></button>
        </div>
      </div>
    </div>
  );
}

export default Addtodo;
