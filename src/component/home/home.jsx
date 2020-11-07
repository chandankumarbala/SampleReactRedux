import React from 'react'
import {logoutAction} from '../../redux/actions'
import { connect } from "react-redux"
class HomeComponent extends React.Component{
    handleLogout(){
        this.props.logout({loggedIn:false});
        this.props.history.push('/');
    }
    render(){
        return (
            <div >
                This is HOME
                <a href="#" onClick={()=>this.handleLogout()} > Logout Link </a>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {userData: state.userData}
}

function mapDispatchToProps(dispatcher){
    return{
        logout: (payload)=>{dispatcher(logoutAction(payload));}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(HomeComponent);