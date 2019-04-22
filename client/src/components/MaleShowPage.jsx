import React, { Component } from 'react';
import MalePage from './MalePage';
import MeventPage from './MeventPage';
import McommentPage from './McommentPage';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

export default class MaleShowPage extends Component {
	state = {
		maleId: this.props.match.params.maleId
	};

	render() {
		return (
	<div className="row text-center">
					<div
						style={{
							marginLeft: '90px',
							color: 'black'
						}}
						className="row-sm-5 row-md-6 text-center"><MalePage maleId={this.state.maleId} /></div>
										<div style={{ marginLeft: '60px', marginTop: '30px' }} className=".col-md-8 text-center">
						<MeventPage maleId={this.state.maleId} />
   
	<div style={{ marginTop: '30px', marginBottom: '160px' }} className=".col-md-8 text-center">
      <McommentPage maleId={this.state.maleId} />
    </div>

			</div>
				</div>
			
		);
	}
}
