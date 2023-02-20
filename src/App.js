import React from 'react';
import TodoForm from "./components/form";
import Todo from "./components/todo";
import ReactDOM from 'react-dom';



function App() {

  const [todos, setTodos] = React.useState([
    {
      text: 'Learn React',
      isCompleted: false,
    },
    {
      text: 'Go to the Gym',
      isCompleted: false,
    },
    {
      text: 'Build Todo App',
      isCompleted: false,
    },
  ]);
  
  const addTodo = (text) => {
    const newTodos = [...todos, { text: text, isCompleted: false }];
    setTodos(newTodos);
  };
  
  const removeTodo = (index) => {
    let temp = [...todos];
    temp.splice(index, 1);
    setTodos(temp);
  };

  return (
    <div className="App">
      <h1 className="title">Todo List</h1>
      {todos.map((todo, i) => (
        <Todo index={i} key={i} todo={todo} remove={removeTodo} />
      ))}
      <TodoForm addTodo={addTodo} />
    
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
