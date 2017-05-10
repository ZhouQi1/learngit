import { FILTER_ITEM, RECEIVE_DATA, INCREASE_AGE } from '../constants/actionTypes'

const initialFilterItem = {
	data: {}
}

export default function filter(state = initialFilterItem, action) {
  switch(action.type) {
    case FILTER_ITEM:
      return action.filterItem
    case RECEIVE_DATA:
      return Object.assign({},state,{
      	data: action.data
      })
    case INCREASE_AGE:
      let data = state.data;
        data.age++
        return Object.assign({},state,{
        data: data
      }) 
    default:
      return state
  }
}
