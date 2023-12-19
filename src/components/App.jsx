import { Component } from "react"
import ContactForm  from "./contactForm/ContactForm"
import ContactList from "./contactList/ContactList"
import { nanoid } from 'nanoid'
import Filter from './filter/Filter'
import styled from "styled-components"
export class App extends Component {

  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: ''
  }

  addUserData = (data) => {
    
    const foundUser = this.state.contacts.find(contact =>
      contact.name.toLowerCase() === data.name.toLowerCase() 
    ) 

    if (foundUser) {
       alert(`${data.name} is already in contacts`)
        return;
    } else {
       const newContact = {
          ...data,
          id: nanoid(),
      };
      
      return this.setState((prev) => ({
        contacts: [...prev.contacts, newContact],
      }))
    }    
  }

  handlerChange = ({target: {value, name}}) => {
    this.setState({
      [name]: value,
    })
  }
  
  handelerDelete = (id) => {
    this.setState((prev) => ({
      contacts:  prev.contacts.filter(el=> el.id !== id)
    }))
  }

  render() {

    return (   
      
      <div>
        <Title>Phonebook</Title>
        <ContactForm
          addUserData={this.addUserData} />

        <TitleSection>Contacts</TitleSection>
        <Filter
          title={'Find contacts by name'}
          value={this.state.filter}
          onChange={this.handlerChange}
        />
        <ContactList
          contacts={
            this.state.filter.length > 0
              ? this.state.contacts.filter(user => user.name.toLowerCase().includes(this.state.filter.toLowerCase()))
              : this.state.contacts}
          RemoveUser={this.handelerDelete}
        />
      </div>

    )
  };
};

const Title = styled.h1`
  font-size: 56px;
  padding-left: 16px;
`
const TitleSection = styled.h2`
  font-size: 34px;
  padding-left: 16px;
`