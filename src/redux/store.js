import { createStore } from "redux";
import rootReducer from "./rootReducer";

//only rootReducer is sufficiant but to debug we have added redux tool syntax from github
const store=createStore(rootReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;