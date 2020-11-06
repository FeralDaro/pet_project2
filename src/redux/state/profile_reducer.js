const ADD_POST = "ADD-POST";
const UPDATE_NEW_TEXT = "UPDATE-NEW-TEXT";
let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'Blabla', likesCount: 11},
        {id: 4, message: 'Dada', likesCount: 11}
    ],
    newPostText: 'it-kamasutra.com'
};

const profile_reducer = (state= initialState, action) =>{
    debugger;
    switch (action.type){

        case ADD_POST:
            let new_post = {
                id: 5,
                message: state.post_text,
                like_count: 0,
                dislike_count: 0
            }
            state.posts.push(new_post);
            state.post_text = "";
            return state;
        case UPDATE_NEW_TEXT:
            state.post_text = action.new_text;
            return state;
        default:
            return state;
    }

}
export const add_post_action_creator = () => {

    return {
        type: ADD_POST
    }
}
export const update_new_text_action_creator = (text) => {

    return {
        type: UPDATE_NEW_TEXT,
        new_text: text
    }
}
export default profile_reducer;