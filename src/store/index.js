const initialState = {
  mixes: [],
  currentMix: []
}

const mixesApp = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_MIX':
      return {
        ...state,
        currentMix: action.payload
      }
    case 'ADD_MIX':
      return {
        ...state,
        mixes: [...state.mixes, action.payload]
      }
    default:
      return state;
  }
}

export default mixesApp;


// const todos = (state = [], action) => {
//   switch (action.type) {
//     case 'ADD_TODO':
//       return [
//         ...state,
//         {
//           id: action.id,
//           text: action.text,
//           completed: false
//         }
//       ]
//     case 'TOGGLE_TODO':
//       return state.map(todo =>
//         todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
//       )
//     default:
//       return state
//   }
// }
