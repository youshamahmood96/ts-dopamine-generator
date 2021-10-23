import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NewsFeed from "../Components/NewsFeed/NewsFeed";
import UserLogin from "../Components/UserLogin/UserLogin";
import UserRegistration from "../Components/UserRegistration/UserRegistration";

function RoutesHandler() {
    return (
        <Router>
            <Switch>
                <Route exact path ='/' component = {NewsFeed} />
                <Route exact path ='/register' component = {UserRegistration} />
                <Route exact path ='/login' component = {UserLogin} />
            </Switch>
        </Router>
    )
}

export default RoutesHandler
