import {combineReducers, createStore} from "redux";
import profile_reducer from "./profile_reducer";
import dialogs_reducer from "./dialogs_reducer";
import sidebar_reducer from "./sidebar_reducer";

let reduces = combineReducers({
    Profile_page: profile_reducer,
    Dialogs_page: dialogs_reducer,
    Sidebar: sidebar_reducer
});
let store = createStore(reduces);
export default store;