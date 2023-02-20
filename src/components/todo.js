function Todo({ todo, index, remove }) {
    function handle() {
      remove(index);
    }
    return (
      <div className="todo" onClick={handle}>
        {todo.text} <div className="emoji">❎</div>
      </div>
    );
  }

  export default Todo;