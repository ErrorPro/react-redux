export default function feedback(state = {counter: 20}, action){
  switch(action.type){
    case 'test':
     return {counter: state.counter + 1}
    default:
      return state
  }
}
