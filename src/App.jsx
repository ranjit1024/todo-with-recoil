import { useMemo, useRef, useState, memo } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { todo } from "./states/ToodState";


let nextid = 0;
function App() {
  return (
    <>
      <div>
        <RecoilRoot>
          <TodoComponent></TodoComponent>
          <FilterTodo></FilterTodo>
          <ListTodo></ListTodo>
        </RecoilRoot>
      </div>
    </>
  );
}

function TodoComponent() {
  const taskRef = useRef(null);
  const desRef = useRef(null);

  const [Todo, setTodo] = useRecoilState(todo);
  

  function setValues() {
    setTodo([...Todo, { title: taskRef.current.value, des: desRef.current.value }])
   
  }

  return (
    <div className="todo">
      <input placeholder="Enter a task" ref={taskRef}></input>
      <br />
      <input placeholder="Enter a Task Descripition" ref={desRef}></input>
      <br />
      <button onClick={setValues}>Submit</button>
    </div>
  );
}
function FilterTodo(){
  const Todo = useRecoilValue(todo);

  return <div className="filtertodo">
    <input type="text" placeholder="Search" onChange={
      e =>{
        const filerArray = Todo.filter(title => title.title == e.target.value)
        console.log(filerArray) 
      }
    }/>
  </div>
}

function ListTodo(){
  const Todo = useRecoilValue(todo)
  
  return <ul>
    {
      Todo.map(todo => (
        
        <li key={nextid++}><span className="title">Title: {todo.title}</span> <span className="des">Descripition: {todo.des}</span></li>
      ))
    }
  </ul>
}
export default App;
