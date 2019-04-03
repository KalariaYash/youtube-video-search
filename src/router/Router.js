import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

class Router extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route path='/' component={Login} exact/>
					<Route path='/signup' component={Signup} />
				</Switch>
			</BrowserRouter>
		);
	}
}

export default Router;