import { FETCH_WEATHER } from '../actions';

export default function(state = [], action) {
  
  //  destructure action for type and payload
  const { type, payload } = action;

  switch(type) {
    //  if the action type is FETCH_WEATHER
    case FETCH_WEATHER:
    return [ payload.data, ...state ]; 
    
      //  else return current 'state'
      default:
        return state;
  }
}
