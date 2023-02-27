function Showtodo({ LOCAL_STORAGE_KEY, tasks, setTasks }) {
  const handleDeleteAll = () => {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    setTasks([]);
  };

  const taskList = tasks.map((task) => (
    <div className="task-input-box" key={task.id}>
      <input type="text" className="task-input-field" value={task.task} readOnly />
      <input type="button" className="btn-sub btn-edit" value="Edit" />
      <input type="button" className="btn-sub btn-delete" value="Delete" />
      <input type="checkbox" value="Complete" />
    </div>
  ));

  return (
    <div className="todo-container todo-task-list">
      <h1 className="heading-tasklist">Task List</h1>
      <div className="pending">
        <p>You have 0 pending tasks</p>
        <button className="btn-sub btn-destroy-all" onClick={handleDeleteAll}>Clear All</button>
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
