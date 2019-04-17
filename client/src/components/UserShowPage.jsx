import React, { Component } from 'react';
import UserPage from './UserPage';
// import SingleUser from './SingleUser';
import CommentPage from './CommentPage';
import EventPage from './EventPage';


export default class UserShowPage extends Component {
	state = {
		userId: this.props.match.params.userId
		// eventId: this.props.match.params.eventId
	};

	render() {
		return (
			<div className="row" style= {{ marginTop: '50px'}}>
				<div className="col s12 m4 l3" style= {{ marginTop: '50px'}}>
					<UserPage userId={this.state.userId} />
				</div>
				{/* <div className="col s12 m4 l3" style= {{ marginTop: '50px'}}>
					<SingleUser userId={this.state.userId} />
				</div> */}
				<div className="col s12 m4 l3" style= {{ marginTop: '10px'}}>
					<EventPage userId={this.state.userId} />
				</div>
                <div className="col s12 m4 l3" style= {{ marginTop: '80px'}}>
					<CommentPage userId={this.state.userId} />
				</div>
					
			</div>
		);
	}
}


