import { combineReducers } from 'redux';
import count from './count';


//combineReducers: ルートとなるReducerを作成できる汎用関数
export default combineReducers({count});