//Action定義
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

//Action Creater(Action Createrを呼び出すことで、stateの更新が行われる)
//typeフィールドに文字列で Action のタイプを指定
export const increment = () => ({
  type : INCREMENT
});

export const decrement = () => ({
  type : DECREMENT
});