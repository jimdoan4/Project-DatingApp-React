import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'

export default class SingleEvent extends Component {
    state = {
        event: {
            	eventName: '',
	            time: '',
	            price: '',
	            withWho: '',
	            photoUrl: ''
        },
        redirectToEvent: false,
        displayEditForm: false,
        userId: this.props.match.params.userId,
        eventId: this.props.match.params.eventId,
    }

    getSingleEventData = () => {
        axios
            .get(`/api/users/${this.state.userId}/events/${this.state.eventId}`)
            .then(res => {
                this.setState({event: res.data})
            })
    }

    componentDidMount = () => {
        this.getSingleEventData()
    }

    toggleEditForm = () => {
        this.setState((state, props) => {
            return ({displayEditForm: !state.displayEditForm})
        })
    }

    handleChange = (e) => {
        const updateEvent = {...this.state.event}
        updateEvent[e.target.name] = e.target.value
        this.setState({event: updateEvent})
    }


    updateEvent = (e) => {
        e.preventDefault()
        axios
            .put(`/api/users/${this.state.userId}/events/${this.state.eventId}`, {
                eventName: this.state.event.eventName,
                time: this.state.event.time,
                price: this.state.event.price,
                withWho: this.state.event.withWho,
                photoUrl: this.state.event.photoUrl
                
            })
            .then(res => {
                this.setState({review: res.data, displayEditForm: false})
            })
        this.getSingleEventData()
    }

    deleteEvent = () => {
        axios
            .delete(`/api/users/${this.state.userId}/events/${this.state.eventId}`)
            .then(res => {
                this.setState({redirectToEvent: true})
            })

    }

    render() {
        if (this.state.redirectToReview) {
            return (<Redirect to={`/users/${this.state.userId}`}/>)
        }
        return (
            <div className= 'text-center'>
                <h3 style= {{ marginTop: '30px' }} className="text-center">{this.state.event.eventName}</h3>
                {
                    this.state.displayEditForm
                    ? <form onSubmit = {this.updateEvent} className="col s12">
                        <div className="col">
                            <div className="col s12 m6 text-center">
                                <label style= {{ marginRight: '30px', marginTop: '30px'}}htmlFor="eventName">Event Name</label>
                                <input style= {{height: '50px', width: '320px'}}
                                    className= 'text-center'
                                    id="eventName"
                                    type="text"
                                    name="eventName"
                                    onChange={this.handleChange}
                                    value={this.state.event.eventName}
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
                                    value={this.state.event.time}
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
                                    value={this.state.event.price}
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
                                    value={this.state.event.withWho}
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
                                    value={this.state.event.photoUrl}
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
                            borderColor: 'black'}}>Edit Comment</button>
                            <button style= {{ marginTop: '20px', width: '12rem', marginBottom: '30px', backgroundColor: 'white', borderColor: 'white',color: 'black', borderColor: 'black'}} onClick = {this.deleteReview}>Delete Comment</button>
                        </div>
                     </div>
                }
                <div className="text-center" style= {{ marginTop: '18px'}}>
                <Link className="text-center" to = {`/users/${this.state.userId}/`}>Back To User</Link>
                </div>
            </div>
        );
    }
}

