import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { RouteLink } from './constants'
import Home from './pages/home'
import ProfileUser from './pages/profileUser'
import SignUp from './pages/signUp'

function App() {

    return (
        <>
            <Router>
                <Switch>
                    <Route path={RouteLink.home} component={Home} exact />
                    <Route path={RouteLink.signUp} component={SignUp} />
                     <Route path={RouteLink.profile} exact component={ProfileUser} /> 
                </Switch>
            </Router>
        </>
    )
}

export default App
