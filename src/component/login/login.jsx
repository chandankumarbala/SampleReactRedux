import React  from 'react';
import { connect } from "react-redux"
import {loginAction} from '../../redux/actions'
class LoginComponent extends React.Component{


    componentDidMount() {
        if(this.props.userData!==undefined && this.props.userData.loggedIn===true){
            this.props.history.push("/home");//never land to login agin unless state has been modified
        }

    }

    handleLogin(event){
        //event.preventDefault();
        this.props.login({loggedIn:true});//login function used here
        //this.props.history.push("/home");

        console.log("EMail: " + this.refs.email.value);
        console.log("Password: " + this.refs.email.value);
    }

    render(){
        return (
            <div>
                <div><input type="text" id="username"   placeholder="Email" ref="username" /></div>
                <div><input type="password" id="password"  placeholder="Password" ref="password"    /></div>
                <div><button onClick={()=> this.handleLogin()} >Login </button> </div>
            </div>
        );
    }

}

function mapStateToProps(state){
    return { userData: state.userData };
  }

function mapDispatchToProps(dispatch) {
    return {
      login: (payload) => { dispatch(loginAction(payload)); }//login function defined here
    };
  }

  export default connect(mapStateToProps,mapDispatchToProps)(LoginComponent);