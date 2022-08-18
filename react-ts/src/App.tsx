import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import { Todo } from './Todo';

// 取得するTodoデータの型定義
type TodoType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

function App() {
  // 型を指定する
  const [todoList, setTodoList] = useState<Array<TodoType>>([]);
  const onClickFetchData = () => {
    axios.get<Array<TodoType>>('https://jsonplaceholder.typicode.com/todos').then((res) => {
      // 意図しないデータの更新を防ぐことができる
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
