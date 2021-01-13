import { ADD_SOUR, DEL_SOUR } from '../actions';

const sourMemo = (state = [], action) => {
  switch (action.type) {
    case ADD_SOUR:
      return [
        ...state,
        {
          id      : action.id,
          lemon   : action.lemon,
          taste   : action.taste,
          alc     : action.alc,
          comment : action.comment,
        }
      ]
    case DEL_SOUR:
      return state.filter( item => item.id !== action.id );
    default:
      return state
  }
}

export default sourMemo;