import logo from './logo.svg';
import './App.css';
import AddTodo from './Components/AddTodo.js';
import Todo from './Components/Todo.js';

function App() {
  return (
    <div className="App">
     <h1>I am learning about the redux </h1>
     <AddTodo />
     <Todo />
    </div>
  );
}

export default App;
