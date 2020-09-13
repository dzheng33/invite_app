import React, { Component } from 'react';

import Header from './Header/Header';
import Main from './MainContent/Main';

class App extends Component {

  state = {
    isFiltered: false,
    pendingGuest: "",
    guests: [
      {
        name: 'David',
        isConfirmed: false,
        isEditing: false,
        id: 0
      },
      {
        name: 'Mike',
        isConfirmed: false,
        isEditing: false,
        id: 1
      },
      {
        name: 'May',
        isConfirmed: false,
        isEditing: false,
        id: 2
      }
    ]
  };

  guestID = 3;

  newGuestID = () => {
    const id = this.guestID;
    this.guestID += 1;
    return id;
  }

  getTotalGuest = () => {
    return this.state.guests.length;
  }

  getTotalAttending = () => {
    return this.state.guests.reduce((total, guest) => {
      if(guest.isConfirmed) {
        total += 1;
      }

      return total;
    },0)
  }
  
  toggleConfirm = (indexChange) => {
    this.setState( prevState => {
      return {
        guests: prevState.guests.map((guest) => {
          if(indexChange === guest.id){
            return {
              ...guest,
              isConfirmed: !guest.isConfirmed
            };
          }else {
            return guest;
          }
        })
      }
    });
  }

  toggleEdit = (indexChange) => {
    this.setState( prevState => {
      return {
        guests: prevState.guests.map((guest) => {
          if(indexChange === guest.id){
            return {
              ...guest,
              isEditing: !guest.isEditing
            };
          }else {
            return guest;
          }
        })
      }
    });
  }

  handleNameEdits = (name,indexChange) => {
    this.setState( prevState => {
      return {
        guests: prevState.guests.map((guest) => {
          if(indexChange === guest.id){
            return {
              ...guest,
              name: name
            };
          }else {
            return guest;
          }
        })
      }
    });
  }

  toggleFilter = () => {
    this.setState( prevState => {
      return {
        isFiltered: !prevState.isFiltered
      }
    });
  }

  handleName = (event) => {
    this.setState({
      pendingGuest: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const id = this.newGuestID();
    this.setState( prevState => {
      return {
        guests: [
          ...prevState.guests,
          {
            name: this.state.pendingGuest,
            isConfirmed: false,
            isEditing: false,
            id
          }
        ],
        pendingGuest: "" 
      }
    });
  }

  handleRemove = (index) => {
    this.setState( prevState => {
      return {
        guests: prevState.guests.filter(guest => index !== guest.id)
      }
    })
  }

  render(){

    let totalGuest = this.getTotalGuest();
    let totalAttending = this.getTotalAttending();

    return (
      <div className="App">
      
      <Header 
        handleSubmit={this.handleSubmit}
        pendingGuest={this.state.pendingGuest} 
        handleName={this.handleName}
      />

      <Main 
         toggleFilter={this.toggleFilter}
         isFiltered={this.state.isFiltered}
         totalGuest={totalGuest}
         totalAttending={totalAttending}
         guests={this.state.guests} 
         toggleConfirm={this.toggleConfirm}
         toggleEdit={this.toggleEdit}
         handleNameEdits={this.handleNameEdits}
         handleRemove={this.handleRemove}
         pendingGuest={this.state.pendingGuest}
      />
    </div>
    );

  }
}

export default App;
