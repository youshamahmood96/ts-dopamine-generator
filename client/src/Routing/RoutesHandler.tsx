import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NewsFeed from "../Components/NewsFeed/NewsFeed";
import UserRegistration from "../Components/UserRegistration/UserRegistration";

function RoutesHandler() {
    return (
        <Router>
            <Switch>
                <Route exact path ='/' component = {NewsFeed} />
                <Route exact path ='/register' component = {UserRegistration} />
            </Switch>
        </Router>
    )
}

export default RoutesHandler
