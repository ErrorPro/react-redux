export function increment(){
  return {
    type: 'test'
  }
}

export function incrementAsync(){
  return dispatch => {
    dispatch(increment())
  }
}
