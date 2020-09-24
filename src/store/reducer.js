import { combineReducers } from "redux-immutable";

import { reducer as recommendReducer } from "../pages/discover/children-pages/recommend/store";
import { reducer as playReducer } from "../pages/player/store"

const cReducers = combineReducers({
  recommend: recommendReducer,
  player: playReducer
})

export default cReducers