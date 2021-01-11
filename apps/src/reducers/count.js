//count.jsの中で、実行したactionに応じて、stateの情報を更新

import {
  INCREMENT,
  DECREMENT,
} from '../actions';

const initialize = { value: 0 };

//引数として、stateオブジェクト(変化前の状態) と actionオブジェクト を受け取る
//戻り値として、 stateオブジェクト(変化後の状態) を返す
export default ( state = initialize, action ) => {
  switch(action.type){
    case INCREMENT:
        return { value : state.value + 1 };
    case DECREMENT:
        return { value : state.value - 1 };
    default:
        return state;
  }
}