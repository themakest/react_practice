import { ADD_SOUR, DEL_SOUR } from '../actions';



const sour = (state, action) => {
  switch (action.type) {
    case ADD_SOUR:
      return {
        id      : action.id,
        lemon   : action.lemon,
        taste   : action.taste,
        alc     : action.alc,
        comment : action.comment,
      }
    default:
      return state
  }
}

const addSour = (state = [], action) => {
  switch (action.type) {
    case ADD_SOUR:
      return [
        ...state,
        sour(undefined, action)
      ]
    case DEL_SOUR:
      return  state.filter((item) => item.id !== action.id);
    default:
      return state
  }
}

export default addSour