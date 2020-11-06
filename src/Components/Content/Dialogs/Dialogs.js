import React from "react";
import s from './Dialogs.module.css';
import Dialogs_item from "./Dialogs_item/Dialogs_item";
import Message from "./Message/Message";


function Dialogs(props) {
    debugger;
    let state = props.Dialogs_page;

    let dialogs_elements = state.dialogs_data.map
    (dialog => <Dialogs_item id={dialog.id} name={dialog.name}/>);
    let messages_elements = state.messages_data.map
    (m => <Message message={m.message}/>);
    let new_message_body = state.new_message_body;


    let on_new_message_change = (e) => {
        let body = e.target.value;
        props.update_new_message_body(body);
    }
    let on_send_message_click = () => {
        props.send_message();
    }
    return (
        <div className={s.content}>
            <div className={s.dialogs}>
                <h1>Dialogs</h1>
                {dialogs_elements}
            </div>
            <div>
                {messages_elements}
                <textarea placeholder="enter message" value={new_message_body}
                          onChange={on_new_message_change}> </textarea>
                <button onClick={on_send_message_click}>Add a message
                </button>
            </div>
        </div>
    )
}

export default Dialogs;