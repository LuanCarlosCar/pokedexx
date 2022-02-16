import { combineReducers, createStore } from "redux";
import stockReducer from "./Stock/Stock.reducer";

const rootReducer = combineReducers({
  stock: stockReducer,
});

const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;

export default store;
