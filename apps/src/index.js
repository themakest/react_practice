import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/Counter';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducer from './reducers';

// アプリ内唯一のstoreを定義。
// またreducerを引数に入れることで
// 全てのアプリケーションのStateがStoreに格納される。
// reducerのcount.js内にあるinitialState = { value: 0 }が渡される。
const store = createStore(reducer);

// Providerタグで囲い、store属性に定義したstoreを格納することで、
// 全てのコンポーネントからStore内に格納されたStateを参照できるようになる
ReactDOM.render(
    <Provider store={store}>
        <Counter />
    </Provider>, 
    document.getElementById('root')
);
