import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserList from './components/UserList';
import MaleList from './components/MaleList';
import GaymaleList from './components/GaymaleList';
import LesfemaleList from './components/LesfemaleList';
import UserShowPage from './components/UserShowPage';
import MaleShowPage from './components/MaleShowPage';
import GayShowPage from './components/GayShowPage';
import LesfemaleShowPage from './components/LesfemaleShowPage';
import SingleEvent from './components/SingleEvent';
import SingleComment from './components/SingleComment';
import Home from './components/Home';
import UserLog from './components/UserLog';
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
						<Route exact path="/users" component={UserList} />
						<Route exact path="/login/" component={UserLog} />
						<Route exact path="/males/:maleId/" component={MaleShowPage} />
						<Route exact path="/gaymales/:gaymaleId/" component={GayShowPage} />
						<Route exact path="/gaymales/" component={GaymaleList} />
						<Route exact path="/lesfemales/" component={LesfemaleList} />
						<Route exact path="/lesfemales/:lesfemaleId/" component={LesfemaleShowPage} />
						<Route exact path="/users/:userId/events/:eventId/" component={SingleEvent} />
						<Route exact path="/users/:userId/comments/:commentId/" component={SingleComment} />
						<Route exact path="/males/" component={MaleList} />
						<Route exact path="/users/:userId/" component={UserShowPage} />
					
						
					</Switch>
					 <Footer /> 
				</div>
			</Router>
		);
	}
}

export default App;
