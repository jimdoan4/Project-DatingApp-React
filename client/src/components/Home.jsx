import React, { Component } from 'react';
// import axios from 'axios';
// import { Redirect, Link } from 'react-router-dom';
import { Media } from 'react-bootstrap';
import { Image } from 'react-bootstrap';

export default class Home extends Component {
	render() {
	
		return (
			
			<div>
				<Image src="https://gq-images.condecdn.net/image/ed5oqpqRqPZ/crop/1620/f/dating_apps_1_gq_17may18_ge.jpg" fluid style= {{ opacity: '6'}}/>
				<ul style= {{marginTop: '50px', marginLeft: '100px', marginRight: '100px', marginBottom: '40px'}}className="list-unstyled">
  <Media as="li">
    <img
      width={64}
      height={64}
      className="mr-3"
      src="holder.js/64x64"
      alt="Generic placeholder"
    />
    <Media.Body>
      <h5>List-based media object</h5>
      <p>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
        fringilla. Donec lacinia congue felis in faucibus.
      </p>
    </Media.Body>
  </Media>

  <Media as="li">
    <img
      width={64}
      height={64}
      className="mr-3"
      src="holder.js/64x64"
      alt="Generic placeholder"
    />
    <Media.Body>
      <h5>List-based media object</h5>
      <p>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
        fringilla. Donec lacinia congue felis in faucibus.
      </p>
    </Media.Body>
  </Media>

  <Media as="li">
    <img
      width={64}
      height={64}
      className="mr-3"
      src="holder.js/64x64"
      alt="Generic placeholder"
    />
    <Media.Body>
      <h5>List-based media object</h5>
      <p>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
        fringilla. Donec lacinia congue felis in faucibus.
      </p>
    </Media.Body>
  </Media>
</ul>
				{/* <ProgressBar now={60} /> */}
			</div>
	
		);
	}
}
