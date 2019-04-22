import React, { Component } from 'react';
import GaymalePage from './GaymalePage';
import Gcomment from './Gcomment';
import Gevent from './Gevent';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

export default class GayShowPage extends Component {
	state = {
		gaymaleId: this.props.match.params.gaymaleId
	};

	render() {
		return (
				<div className="row text-center">
					<div
						style={{
							marginLeft: '90px',
							color: 'black'
						}}
						className="row-sm-5 row-md-6 text-center"><GaymalePage gaymaleId={this.state.gaymaleId} /></div>
										<div style={{ marginLeft: '60px', marginTop: '30px' }} className=".col-md-8 text-center">
						<Gevent gaymaleId={this.state.gaymaleId} />
   
	<div style={{ marginTop: '30px', marginBottom: '160px' }} className=".col-md-8 text-center">
      <Gcomment gaymaleId={this.state.gaymaleId} />
    </div>

			</div>
				</div>
			
		);
	}
}

