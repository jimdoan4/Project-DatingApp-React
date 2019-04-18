import React, { Component } from 'react';

export default class Footer extends Component {
	render() {
		return (
			<footer
				style={{ bottom: '0', position: 'absolute', width: '100%' }}
				className="page-footer font-small gray darken-2"
			>
				<div className="container" style={{ color: 'black' }}>
					<div className="row" style={{ color: 'black' }}>
						<div className="col-md-12 py-5" style={{ color: 'black' }}>
							<div className="mb-5 flex-center" style={{ color: 'black' }}>
								<a className="fb-ic">
									<i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
								</a>

								<a className="tw-ic">
									<i className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
								</a>

								<a className="gplus-ic">
									<i className="fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
								</a>

								<a className="li-ic">
									<i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
								</a>

								<a className="ins-ic">
									<i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
								</a>

								<a style={{ color: 'black' }} className="pin-ic">
									<i style={{ color: 'black' }} className="fab fa-pinterest fa-lg white-text fa-2x">
										{' '}
									</i>
								</a>
							</div>
						</div>
					</div>
				</div>

				<div className="footer-copyright text-center py-3" style={{ color: 'black' }}>
					© 2019 Copyright:
					<a href="https://mdbootstrap.com/education/bootstrap/"> Jim Doan</a>
				</div>
			</footer>
		);
	}
}
