import { createStore } from 'redux';
let defaultState = {
  todos: [],
  name:'熊彬',
  age:"",
  number:null
}

let store = createStore((prevState = defaultState, action) => {
  let state = JSON.parse(JSON.stringify(prevState));
  switch (action.type) {
    case 'ADD':
      state.age=action.text
      break;
    case 'ADC':
      state.age=action.text
      break;
  }
  return state;
})
export default store;
