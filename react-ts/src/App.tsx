import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import { Todo } from './Todo';

function App() {
  const [todoList, setTodoList] = useState<any>([]);
  const onClickFetchData = () => {
    axios.get('https://jsonplaceholder.typicode.com/todos').then((res) => {
      setTodoList(res.data);
    });
  };
  return (
    <div className="App">
      <button onClick={onClickFetchData}>データ取得</button>
      {todoList.map((todo) => (
        <Todo title={todo.title} userId={todo.userId} />
      ))}
    </div>
  );
}

export default App;
