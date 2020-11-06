import profile_reducer from "./profile_reducer";
import dialogs_reducer from "./dialogs_reducer";


let store = {
    _state: {
        Profile_page: {
            posts: [
                {id: 1, message: "Hello Kaneki ", like_count: 3, dislike_count: 1},
                {id: 2, message: "Bye, Feral'", like_count: 3, dislike_count: 1},

            ],
            post_text: "Kaneki Ken"
        },

        Dialogs_page: {
            dialogs_data: [
                {id: 1, name: "Yaroslav"},
                {id: 2, name: "Alex"},
                {id: 3, name: "Veronika"},
                {id: 4, name: "Naruto"},
                {id: 5, name: "Tanjiro"},
                {id: 6, name: "Kaneki"},
            ],
            messages_data: [
                {id: 1, message: "heyy"},
                {id: 2, message: "no"},
                {id: 3, message: "ok"},
                {id: 4, message: "the let's go"},
                {id: 5, message: "yeah that's great"},
                {id: 6, message: "welcome amazing"},
            ],
            new_message_body: ""
        },
        sidebar : {}

    },
    get_state() {

        return this._state;
    },
    _call_subscriber() {
        console.log("state is changed")
    },

    subscribe(observer) {
        this._call_subscriber = observer;
    },
    dispatch(action) {
        this._state.Profile_page = profile_reducer(this._state.Profile_page, action);
        this._state.Dialogs_page = dialogs_reducer(this._state.Dialogs_page, action);


            this._call_subscriber(this._state);
        }
    }



export default store;
window.store = store;