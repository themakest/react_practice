import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../actions';

function Counter(props) {
  return (
    <React.Fragment>
      <div>
        カウント値 : {props.value}
      </div>
      <div>
        <button onClick={props.increment}>+</button>
        <button onClick={props.decrement}>-</button>
      </div>
    </React.Fragment>
  );
}

//reduxで管理しているState情報をPropsで扱えるようにする
const mapStateToProps = (state, props) => ({ value : state.count.value});
//第一引数「state」はreduxで管理している全てのstateを持っている
//第二引数「props」はconnectしたcomponent本来のpropsを取得する
//connectしたcomponentで「props.value」とアクセスすることでcount(reducer)で管理している「value」の値を取得できる

//Action関数をPropsで扱えるようにする
const mapDispatchToProps = ({increment, decrement});


//componentとRedux Storeを接続する
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
//connect()関数
// 第一引数はcomponentに渡すpropsを制御する
// 第二引数はreducerを呼び出して、reduxで管理しているstateを更新する
// 最後の（）には取得したデータをpropsとして扱いたいcomponentを指定する