import LoginComponent from '../component/login/login'
import HomeComponent from '../component/home/home'
import { Route, Switch } from 'react-router-dom';
import {PrivateRoute} from './routeGuard'

export function getRoutes() {
    return (
        <Switch>
            {/* exact path with redirect + Link with href  */}
            <Route exact path="/" component={LoginComponent} />
            {/* path + React router dom Link to will do non redirect page change */}
            {/* <Route path="/home" component={HomeComponent} /> */}
            <PrivateRoute path="/home" component={HomeComponent} />
            <Route path="/login" component={LoginComponent} />
        </Switch>

    );
}

