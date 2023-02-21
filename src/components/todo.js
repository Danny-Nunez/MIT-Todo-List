function Todo({ todo, index, mark, remove }) {
   
    return (
      <div className="todo" >
        <span style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}>{todo.text}</span>
        
        <div className="buttons">
        <button className={todo.isBackgroundGreen ? 'background-green' : ''} onClick={() => mark(index)}>✓</button> <button className="xbox" onClick={() => remove(index)}>✕</button>
      </div>

      </div>
      
    );
  }

  export default Todo;