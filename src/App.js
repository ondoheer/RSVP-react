import React, { Component } from 'react';
import update from 'immutability-helper';

import './App.css';

import TopHeader from './components/TopHeader';
import MainContent from './components/MainContent';

class App extends Component {

  state = {
    isFiltered: false,
    pendingGuest: "",
    guests: [
      {
        name: "Recurse Center",
        isConfirmed: true,
        isEditing: false
      },
      {
        name: "Hacker School",
        isConfirmed: false,
        isEditing: false
      }
    ]
  }

  // Toggle filter for results
  toggleFilter = () => {
    let prevState = this.state;

    let nextState = update(this.state, {
      isFiltered: {$set: !this.state.isFiltered}
    });

    this.setState( nextState);
  }

  // Toggle booleans for guest
  toggleGuestPropertyAt = (property, indexToChange) => {

    let prevState = this.state;
    
    let nextState = update(this.state.guests, {
        [indexToChange]: {
          [property]: {$set: !this.state.guests[indexToChange][property]}
      }}
    );

    this.setState({guests: nextState});
  }

  // Specifc toggles
  toggleConfirmationAt = index => this.toggleGuestPropertyAt('isConfirmed', index);
  toggleEditingAt = index => this.toggleGuestPropertyAt('isEditing', index);

  // # of guests
  getTotalInvited = () => this.state.guests.length;

  // filter by selected guests
  getAttendingGuests = () => this.state.guests.filter( (guest) => {return guest.isConfirmed === true} );

  // filter the unconformed guests
  getUnconfirmedGuests = () => this.state.guests.filter( (guest) => {return guest.isConfirmed === false});

  // Set edited name for guest
  setNameAt = (text, index) => {
    let prevState = this.state;

    let nextState = update(this.state.guests, {
      [index]: {
        name: {$set: text}
      }
    });

    this.setState({guests: nextState});
  }

  // change the current pending guest state
  handleNameInput = (evt) => {

    let prevState = this.state;

    let nextState = update(this.state, {
      pendingGuest: {$set: evt.target.value}
    });

    this.setState(nextState);
  }

  // Add an unconfirmed guest
  addGuest = (evt) => {
    evt.preventDefault();
    
    
    let prevState = this.state;
    let newGuest = {
      name: this.state.pendingGuest,
      isEditing: false,
      isConfirmed: false
    }

    let nextState = update(this.state, {
      guests: {$push: [newGuest]},
      pendingGuest: {$set: ""}
    })

    this.setState(nextState);
    
  }

  // Remove a guest at Index
  removeGuestAt = (index) => {

    let prevState = this.state;

    let nextState = update(this.state.guests, {$splice: [[index, 1]]});
    
    this.setState({guests: nextState});
    
  }


  render() {

    
    return (
      <div className="App">
      <TopHeader handleNameInput={this.handleNameInput}
                    pendingGuest={this.state.pendingGuest}
                    addGuest={this.addGuest}/>
      <MainContent 
              toggleFilter={this.toggleFilter}
              isFiltered={this.state.isFiltered}
              attending={this.getAttendingGuests().length}
              pending={this.getUnconfirmedGuests().length}
              total={this.getTotalInvited()}
              guests={this.state.guests }
              toggleConfirmationAt={this.toggleConfirmationAt}
              toggleEditingAt={this.toggleEditingAt}
              setNameAt={this.setNameAt}
              getAttendingGuests={this.getAttendingGuests}
              removeGuestAt={this.removeGuestAt}
              pendingGuest={this.state.pendingGuest}
              
      />
      
    </div>
    );
  }
}

export default App;
