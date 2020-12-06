import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormControls/FormControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";


const LoginForm = (props) =>{
    return <div>
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field type="text" name={'login'}
                       placeholder={"Login"}
                       component={Input}
                       validate={[required]}
                />
            </div>
            <div>
                <Field type="text" name={'password'}
                       placeholder={"Password"}
                       component={Input}
                       validate={[required]}
                />
            </div>
            <div>
                <Field component={Input}
                       type={"checkbox"}
                       name={'rememeberMe'}
                /> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    </div>
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)
const Login = (props) =>{
    const onSubmit =(formData)=>{
        props.login(formData.email)
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
        </div>
}

export default connect(null, {login})(Login);