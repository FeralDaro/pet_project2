import React from "react";
import s from './My_posts.module.css';
import My_post from "./My_post/My_post";



function My_posts(props) {
debugger;
    let new_post_element = React.createRef()
    let add_post = () => {
        props.on_add_post();
    }
    let on_post_change = () => {
        let text = new_post_element.current.value;
        props.update_new_text(text);
    }
    let posts_elements =
        props.posts.map(p => <My_post message={p.message} like_count={p.like_count} dislike_count={p.dislike_count}/>);
    return (<div>
        <p className={s.text}>My posts</p>
        <textarea ref={new_post_element} onChange={on_post_change} value={props.post_text}>input here</textarea>
        <button onClick={add_post}>Add a post
        </button>
        <button>delete a post</button>
        {posts_elements}
    </div>)
}

export default My_posts;