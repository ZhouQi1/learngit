import { ADD_ITEM, DELETE_ITEM, DELETE_ALL, FILTER_ITEM, RECEIVE_DATA, INCREASE_AGE } from '../constants/actionTypes'

export function addItem() {
  return dispatch => {
    setTimeout(() => dispatch({type: ADD_ITEM}), 1000)
  }
}
export function deleteItem(item) {
  return {
    type: DELETE_ITEM,
    item
  }
}
export function deleteAll() {
  return {
    type: DELETE_ALL
  }
}
export function filterItem(e) {
  let filterItem = e.target.value

  return {
    type: FILTER_ITEM,
    filterItem
  }
}
export function receiveData() {
  return {
    type: RECEIVE_DATA,
    data: {
      name: 'zhouqi',
      age: 18
    }
  }
}
export function increaseAge() {
  return {
    type: INCREASE_AGE,
    
  }
}