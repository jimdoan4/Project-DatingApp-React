import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { render } from 'react-dom';
import axios from 'axios';
import { Nav } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
import { ButtonToolbar } from 'react-bootstrap';
import { DropdownButton } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import Weather from "./Weather";
import InputField from "./InputField";

export default class NavBar extends Component {
	 constructor() {
    super();
    this.state = {
	  name: [],
      weather: [],
      temp: [],
      clouds: []
    };
  }

  getWeather = query => {
    axios.get(`https://api.openweathermap.org/data/2.5/find?q=${query}&units=imperial&appid=f92c1f4990b0574d4a4e4d3dd556f388`)
      .then(response => {
        this.setState({
          weather: response.data.list[0],
          temp: response.data.list[0].main.temp,
          clouds: response.data.list[0].weather[0].description
        });
      })
      .catch(error => {
        console.log('Error', error);
      });
  };

  queryWeather = (event, cityName) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      cityName = event.target.value;
      this.getWeather(cityName);
    }
  }
	render() {
		return (
			<Navbar style={{ backgroundColor: 'white', color: 'black' }} collapseOnSelect expand="lg" variant="dark">
				<Navbar.Brand style={{ color: 'black' }} href="/">
					SUAVE
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" style={{ color: 'black' }} />
				<Navbar.Collapse id="responsive-navbar-nav" style={{ color: '#720F1D' }}>
					<Nav className="mr-auto" style={{ backgroundColor: 'grey', color: 'black' }}>
						<NavDropdown style={{ color: 'black' }} title="Find Your Match" id="collasible-nav-dropdown">
							<NavDropdown.Item className="text-center" style={{ color: 'black' }}>
								<Link to="/users/" style={{ color: 'black' }}>
									Woman
								</Link>
							</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item className="text-center" style={{ color: 'black' }}>
								<Link to="/males/" style={{ color: 'black' }}>
									Men
								</Link>
							</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item className="text-center" style={{ color: 'black' }}>
								<Link className="text-center" to="/gaymales/" style={{ color: 'black' }}>
									Gay Men
								</Link>
							</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item className="text-center" style={{ color: 'black' }}>
								<Link to="/lesfemales/" style={{ color: 'black' }}>
									Lesbian Women
								</Link>
							</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				
					
					 <InputField queryWeather= {this.queryWeather} />
				<ButtonToolbar style= {{marginRight: '20px'}}>
    {['left'].map(direction => (
		 <DropdownButton
		 style={{color: 'black'}}
        drop={direction}
				// variant="secondary"
				placeholder='x'
        // title={` Drop ${direction} `}
        id={`dropdown-button-drop-${direction}`}
        key={direction}
		>

    <Dropdown.Item style={{marginTop: '15px', paddingLeft: '20px', paddingRight: '20px'}}><Weather 
          city={this.state.weather.name} 
          temp={this.state.temp} 
          clouds={this.state.clouds}
          /></Dropdown.Item>
</DropdownButton>
    ))}
  </ButtonToolbar>
				</Navbar.Collapse>
						<Nav.Link style={{ color: 'black' }}>
						<Link to="/login/" style={{ color: 'black' }}>
							Profile Account
						</Link>
					</Nav.Link>
				
			</Navbar>
		);
	}
}


