import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserLogin from './components/UserLogin';
import UserList from './components/UserList';
import UserShowPage from './components/UserShowPage';
import SingleEvent from './components/SingleEvent';
import SingleComment from './components/SingleComment';
import Home from './components/Home';
import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';

class App extends Component {
	render() {
		return (
			<Router>
				<div id="app" style={{ color: 'black' }}>
					<NavBar />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/users/:userId/events/:eventId/" component={SingleEvent} />
						<Route exact path="/users/:userId/comments/:commentId/" component={SingleComment} />
						<Route exact path="/logins/" component={UserLogin} />
						<Route exact path="/users/" component={UserList} />
						<Route exact path="/users/:userId/" component={UserShowPage} />
					</Switch>
					 <Footer /> 
				</div>
			</Router>
		);
	}
}

export default App;
