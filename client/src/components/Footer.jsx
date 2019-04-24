import React, { Component } from 'react';
import axios from 'axios';
import { Dropdown } from 'react-bootstrap';
import { ButtonToolbar } from 'react-bootstrap';
import { DropdownButton } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import Weather from './Weather';
import InputField from './InputField';

export default class Footer extends Component {
	constructor() {
		super();
		this.state = {
			weather: [],
			temp: [],
			humidity: [],
			speed: [],
			clouds: []
		};
	}

	getWeather = (query) => {
		axios
			.get(
				`https://api.openweathermap.org/data/2.5/find?q=${query}&units=imperial&appid=f92c1f4990b0574d4a4e4d3dd556f388`
			)
			.then((response) => {
				this.setState({
					weather: response.data.list[0],
					temp: response.data.list[0].main.temp,
					humidity: response.data.list[0].main.humidity,
					speed: response.data.list[0].wind.speed,
					clouds: response.data.list[0].weather[0].description
				});
			})
			.catch((error) => {
				console.log('Error', error);
			});
	};

	queryWeather = (event, cityName) => {
		if (event.key === 'Enter') {
			event.preventDefault();
			cityName = event.target.value;
			this.getWeather(cityName);
		}
	};
	render() {
		return (
			<footer className="page-footer font-small grey light-2" style={{ paddingBottom: '5px', color: 'black' }}>
				<div className= 'text-center'>
				<InputField queryWeather={this.queryWeather} />
				<ButtonToolbar style={{ marginRight: '20px' }}>
					{[ 'left' ].map((direction) => (
						<DropdownButton
							style={{ color: 'black' }}
							drop={direction}
							placeholder="x"
							id={`dropdown-button-drop-${direction}`}
							key={direction}
						>
							<Dropdown.Item style={{ marginTop: '15px', paddingLeft: '20px', paddingRight: '20px', color: 'black' }}>
								<Weather	
									city={this.state.weather.name}
									temp={this.state.temp}
									humidity={this.state.humidity}
									speed={this.state.speed}
									clouds={this.state.clouds}
								/>
							</Dropdown.Item>
						</DropdownButton>
					))}
					</ButtonToolbar>
					</div>
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

								<a className="li-ic">
									<i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
								</a>

								<a style={{ color: 'black' }} className="ins-ic">
									<i
										style={{ color: 'black' }}
										className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"
									>
										{' '}
									</i>
								</a>

							
							</div>
						</div>
					</div>
				</div>
			
				<div className="footer-copyright text-center py-3" style={{ color: 'black', paddingBottom: '90px' }}>
					© 2019 Copyright:
					<a style={{ paddingBottom: '90px' }} href="https://mdbootstrap.com/education/bootstrap/">
						{' '}
						Jim Doan
					</a>
				</div>
			</footer>
		);
	}
}
