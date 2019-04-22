import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom'
import axios from 'axios'


export default class SingleMevent extends Component {
    state = {
        mevent: {
            	eventName: '',
	            time: '',
	            price: '',
	            withWho: '',
	            photoUrl: ''
        },
        redirectToMevent: false,
        displayEditForm: false,
        maleId: this.props.match.params.maleId,
        meventId: this.props.match.params.meventId
    }

    getSingleMeventData = () => {
        axios
            .get(`/api/males/${this.state.maleId}/mevents/${this.state.meventId}`)
            .then(res => {
                this.setState({mevent: res.data})
            })
    }

    componentDidMount = () => {
        this.getSingleMeventData()
    }

    toggleEditForm = () => {
        this.setState((state, props) => {
            return ({displayEditForm: !state.displayEditForm})
        })
    }

    handleChange = (e) => {
        const updateMevent = {...this.state.mevent}
        updateMevent[e.target.name] = e.target.value
        this.setState({mevent: updateMevent})
    }


    updateMevent = (e) => {
        e.preventDefault()
        axios
            .put(`/api/males/${this.state.maleId}/mevents/${this.state.meventId}`, {
                eventName: this.state.mevent.eventName,
                time: this.state.mevent.time,
                price: this.state.mevent.price,
                withWho: this.state.mevent.withWho,
                photoUrl: this.state.mevent.photoUrl
                
            })
            .then(res => {
                this.setState({mevent: res.data, displayEditForm: false})
            })
        this.getSingleMeventData()
    }

    deleteMevent = () => {
        axios
            .delete(`/api/males/${this.state.maleId}/mevents/${this.state.meventId}`)
            .then(res => {
                this.setState({redirectToMevent: true})
            })
    }

    render() {
        if (this.state.redirectToMevent) {
            return (<Redirect to={`/males/`}/>)
        }
        return (
            <div className= 'text-center'>
                <h3 style= {{ marginTop: '30px' }} className="text-center">{this.state.mevent.eventName}</h3>
                {
                    this.state.displayEditForm
                    ? <form onSubmit = {this.updateMevent} className="col s12">
                        <div className="col">
                            <div className="col s12 m6 text-center">
                                <label style= {{ marginRight: '30px', marginTop: '30px'}}htmlFor="eventName">Event Name</label>
                                <input style= {{height: '50px', width: '320px'}}
                                    className= 'text-center'
                                    id="eventName"
                                    type="text"
                                    name="eventName"
                                    onChange={this.handleChange}
                                    value={this.state.mevent.eventName}
                                />
                            </div>  
                            <div className="col s12 m6 text-center">
                                <label style= {{ marginRight: '30px', marginTop: '40px'}}htmlFor="time">Time</label>
                                <input
                                style= {{height: '54px', width: '390px', marginRight: '53px'}}
                                    className= 'text-center'
                                    id="time"
                                    type="text"
                                    name="time"
                                    onChange={this.handleChange}
                                    value={this.state.mevent.time}
                                />
                            </div> 
                             <div className="col s12 m6 text-center">
                                <label style= {{ marginRight: '30px', marginTop: '40px'}}htmlFor="price">Price</label>
                                <input
                                style= {{height: '54px', width: '390px', marginRight: '53px'}}
                                    className= 'text-center'
                                    id="price"
                                    type="text"
                                    name="price"
                                    onChange={this.handleChange}
                                    value={this.state.mevent.price}
                                />
                            </div> 
                             <div className="col s12 m6 text-center">
                                <label style= {{ marginRight: '30px', marginTop: '40px'}}htmlFor="withWho">Your Date: </label>
                                <input
                                style= {{height: '54px', width: '390px', marginRight: '53px'}}
                                    className= 'text-center'
                                    id="withWho"
                                    type="text"
                                    name="withWho"
                                    onChange={this.handleChange}
                                    value={this.state.mevent.withWho}
                                />
                            </div> 
                             <div className="col s12 m6 text-center">
                                <label style= {{ marginRight: '30px', marginTop: '40px'}}htmlFor="photoUrl">Photo </label>
                                <input
                                style= {{height: '54px', width: '390px', marginRight: '53px'}}
                                    className= 'text-center'
                                    id="photoUrl"
                                    type="text"
                                    name="photoUrl"
                                    onChange={this.handleChange}
                                    value={this.state.mevent.photoUrl}
                                />
                            </div> 
                        </div>
                    <div className= 'text-center' style= {{ marginTop: '20px'}}>
                        <button className= 'text-center'>Submit</button>
                        </div>
                    </form>
                    : <div>
                        <div className="text-center">
                            <button onClick = {this.toggleEditForm} style= {{ marginRight: '50px', marginTop: '20px', width: '12rem', marginBottom: '30px', backgroundColor: 'white', borderColor: 'white', color: 'black',
                            borderColor: 'black'}}>Edit Event</button>
                            <button style= {{ marginTop: '20px', width: '12rem', marginBottom: '30px', backgroundColor: 'white', borderColor: 'white',color: 'black', borderColor: 'black'}} onClick = {this.deleteMevent}>Delete Event</button>
                        </div>
                     </div>
                }
                <div className="text-center" style= {{ marginTop: '18px'}}>
                <Link className="text-center" to = {`/males/${this.state.maleId}/`}>Back To User</Link>
                </div>
            </div>
        );
    }
}

