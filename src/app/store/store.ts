import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { rootReducer } from 'app/reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';


const thunk = applyMiddleware(thunkMiddleware);
const store = createStore(rootReducer, composeWithDevTools(thunk));

export type AppState = ReturnType<typeof rootReducer>
export default store;
