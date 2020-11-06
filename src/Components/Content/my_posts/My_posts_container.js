import React from "react";
import {add_post_action_creator, update_new_text_action_creator} from "../../../redux/state/profile_reducer";
import My_posts from "./My_posts";

import {connect} from "react-redux";




const map_state_to_props = (state) => {
    return {
        posts: state.Profile_page.posts,
        post_text: state.Profile_page.post_text
    }
}
const map_dispatch_to_props = (dispatch) => {
    return {
        update_new_text: (text)=>{
            let action = update_new_text_action_creator(text);
            dispatch(action);
        },
        on_add_post: ()=>{
            dispatch(add_post_action_creator());
        }
    }
}
const My_posts_container = connect(map_state_to_props, map_dispatch_to_props)(My_posts);
export default My_posts_container;