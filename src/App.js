import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';
import React, {Component} from 'react';
import { render } from '@testing-library/react';
import { element } from 'prop-types';

class App extends Component {
  state = {
    shortContacts : contacts.slice(0,5)
  }
  randomContact = () => {
    const { shortContacts } = this.state;
    this.state.shortContacts.push(contacts[Math.round(Math.random()*contacts.length-1)])
    this.setState({
      shortContacts : shortContacts
    })
   };

   nameSort = () => {
    this.setState({
      shortContacts : this.state.shortContacts.sort((a, b) => (a.name < b.name) ? -1 : (a.name > b.name) ? 1 : 0)
    })
   };

   popularitySort = () => {
     this.setState({
      shortContacts : this.state.shortContacts.sort((a, b) => (a.popularity < b.popularity) ? -1 : (a.popularity > b.popularity) ? 1 : 0)
     })
   };


   deleteContact = () => {
    const givenContacts = [...this.state.shortContacts];
    const findContact = givenContacts.findIndex((element) => element.id);
    givenContacts.splice(findContact,1)
    this.setState({
      shortContacts : givenContacts
    })
    };


render() {
  return (
   <div>
   <div className= "buttons"> 
   <button onClick={this.randomContact}> Add Random Contact</button>
   <button onClick={this.nameSort}>Sort By Name</button>
   <button onClick={this.popularitySort}>Sort By Popularity</button>
   </div>
   <div className="table">
     <table>
       
         <tr className="row">
           <th>Picture</th>
           <th>Name</th>
           <th>Popularity</th>
           <th>Action</th>
         </tr>
           {this.state.shortContacts.map((contact) => {
             return (
               <tr key={contact.id}>
                 <td><img src={contact.pictureUrl}/></td>
                 <td>{contact.name}</td>
                 <td>{contact.popularity.toFixed(2)}</td>
                 <td><button onClick={this.deleteContact}>Delete</button></td>

               </tr>
             );
           })}
         
     </table>
     </div>
   </div>
  )}};


export default App;
