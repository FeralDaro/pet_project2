import React from "react";

import {send_message_creator} from "../../../redux/state/dialogs_reducer";
import Dialogs from "./Dialogs";

import {connect} from "react-redux";



let map_state_to_props = (state) => {
    return {
        Dialogs_page: state.Dialogs_page
    }
}
let map_dispatch_to_props = (dispatch) => {
    return {
        update_new_message_body: () => {
            dispatch(send_message_creator());
        },
        send_message: (body) => {
            dispatch(send_message_creator(body));
        }
    }
}
const Dialogs_container = connect(map_state_to_props, map_dispatch_to_props)(Dialogs);

export default Dialogs_container;