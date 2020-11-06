import React from "react";
import s from './Profile_info.module.css';

function Profile_info() {
    return (
        <div className={s.content}>
            <img className={s.scenery}
                 src="https://cutt.ly/1gjfv7l"
                 alt=""/>
            <div className={s.description}>
                <img className={s.Kaneki2}
                     src="https://cutt.ly/RgjfJnG"
                     alt=""/>
                <div className={s.About}>
                    <p>Feral'</p>
                    <p>Education: sharaga</p>
                    <p>birth date: 8.12</p>
                </div>
            </div>

        </div>)
}

export default Profile_info;