import './App.css';
import TodoList from "./components/TodoList/TodoList";
import React, {useState} from "react";



function App() {
    const person = {name: 'john', age: 30};

    const {name, age} = person
    console.log(age)


    const [todos, setTodos] = useState([
        {
            id:1,
            text:'reacet',
            checked: true
        },
        {
            id:2,
            text:'reacet',
            checked: false
        }
    ])

  return (
    <>
      <TodoList todos={todos}/>
    </>
  );
}

export default App;
