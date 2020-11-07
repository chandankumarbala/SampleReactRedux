import {LOGIN,LOGOUT} from './actionTypes';

const initialState = {
    userData: {loggedIn:false},
    teamData:{},
    gameData:{}
  };
  
  //Object.assign({},state, { userData: action.payload });
  function rootReducer(state = initialState, action) {
      //create a fresh state with ur changes and return. The sate over ride is done by redux so assiging old state to new will not work.
      //Just create a state object and return rest redux will take care.
      switch(action.type){
            case LOGIN:
            case LOGOUT:return Object.assign({},state, { userData: action.payload }); //we are manually setting the ACTION specific state so that there is a tight coupling between state and action.
            default: return state;
      }
  };
  
  export default rootReducer;

