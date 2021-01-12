//Actionの定義
export const ADD_SOUR  = 'ADD_SOUR';
export const DEL_SOUR  = 'DEL_SOUR';

//Action Creater(Action Createrを呼び出すことで、stateの更新が行われる)
//typeフィールドに文字列で Action のタイプを指定

let nextID = 0;
export const addSour = (lemon,taste,alc,comment) => ({
  type: ADD_SOUR,
  id: nextID++,
  lemon,
  taste,
  alc,
  comment
});

export const delSour = (id) => ({
  type: DEL_SOUR,
  id
});