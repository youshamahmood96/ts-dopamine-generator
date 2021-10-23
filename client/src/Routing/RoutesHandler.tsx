import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NewsFeed from "../Components/NewsFeed/NewsFeed";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";
import UserLogin from "../Components/UserLogin/UserLogin";
import UserRegistration from "../Components/UserRegistration/UserRegistration";

function RoutesHandler() {
    return (
        <Router>
            <Switch>
                <Route exact path='/' >
                    <PrivateRoute>
                        <NewsFeed/>
                    </PrivateRoute>
                </Route>
                <Route exact path='/register' >
                    <UserRegistration/>
                </Route>
                <Route exact path='/login' >
                    <UserLogin/>
                </Route>
            </Switch>
        </Router>
    )
}

export default RoutesHandler
