
import { Route,  Redirect } from 'react-router-dom';
import store from '../redux/store';


export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props =>checkIfLogin() ? (<Component {...props} />) : (<Redirect to={{pathname: "/"}} />)} />
);

function checkIfLogin() {
    const authState = store.getState().userData;
    if (authState !== undefined && authState.loggedIn === true)
        return true;

    return false;
}

