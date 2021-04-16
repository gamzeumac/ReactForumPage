import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import { composeWidthDevTools} from "redux-devtools-extension";
import rootReducer from "./reducers/rootReducer";

const store = createStore(
    rootReducer, 
    { counter: { count: 5 } },
    applyMiddleware(() => dispatch => { 
      console.log('Yoyoyo')
  
      return dispatch;
    }));

/* const store = () =>{ createStore(rootReducer, {} , compose(
    applyMiddleware(thunk),
    composeWidthDevTools()
))}; */
export default store;