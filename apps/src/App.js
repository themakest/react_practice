import React, { useState } from 'react';
import './App.css';
import ToDoListItem from "./ToDoListItem.js"

function App() {

  // ToDoリストのStateをtoDoListと定義、初期値は []
  const initialState = [];
  const [ todoList, setToDoList ] = useState(initialState);

  //useState の左辺の state 変数には任意の名前を付けることができる
  //1つ目の要素： state の現在の値
  //2つ目の要素： state の現在の値を更新するための関数
  //state が更新されても intialState はintialState として保持される


  return (
    <div className="App">
      <form
        className="App-form"
        onSubmit= { (e) => {
          // formのデフォルトのイベントをキャンセル
          e.preventDefault();

          // idがtitleのElementを取得
          const titleElement = e.target.elements["title"]
          // idがdescriptionのElementを取得
          const descriptionElement = e.target.elements["description"];

          // todoList stateに追加
          setToDoList(todoList.concat({"title": titleElement.value, "description": descriptionElement.value}));

          titleElement.value = "";
          descriptionElement.value = "";
        }}
      >
        <div>
          <input
            id="title"
            placeholder="title"
          />
          <textarea
            id="description"
            placeholder="description"
          />
        </div>
        <div>
          <button
            type="submit"
          >
            登録
          </button>
        </div>
      </form>
      <div>
      {/* todoList配列の要素数分ToDoListItemコンポーネントを展開 */}
        {todoList.map((items)=> (
          <ToDoListItem
            key={items.title}
            title={items.title}
            description={items.description}

            // クリックされたItemをtodoList stateから削除
            onClick={() => {
              setToDoList(todoList.filter(x => x !== items))
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default App;