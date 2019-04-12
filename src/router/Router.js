import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Home from '../pages/Home';
import History from '../pages/History';
import WatchLater from '../pages/WatchLater';

class Router extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route path='/' component={Login} exact />
					<Route path='/signup' component={Signup} />
					<Route path='/home' component={Home} />
					<Route path='/watchlater' component={WatchLater} />
					<Route path='/history' component={History} />
				</Switch>
			</BrowserRouter>
		);
	}
}

export default Router;