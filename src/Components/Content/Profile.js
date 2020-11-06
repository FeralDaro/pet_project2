import React from "react";
import s from './Profile.module.css';
import My_posts from "./my_posts/My_posts";
import Profile_info from "./Profile_info/Profile_info";
import My_posts_container from "./my_posts/My_posts_container";

function Profile(props) {

    return(
    <div>
        <Profile_info/>
        <My_posts_container

                 />
    </div>
    )
}
export default Profile;