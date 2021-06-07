import { combineReducers } from "redux";
import playlistReducer  from "./Playlist";
import userReducer  from "./User";

const allReducers = combineReducers({
    playlistReducer,
    userReducer
});

export default allReducers;