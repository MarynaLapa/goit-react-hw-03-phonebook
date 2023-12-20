import { Component } from "react"
import ContactForm  from "./contactForm/ContactForm"
import ContactList from "./contactList/ContactList"
import { nanoid } from 'nanoid'
import Filter from './filter/Filter'
import styled from "styled-components"

export class App extends Component {

  state = {
    contacts: [],
    filter: ''
  }

  componentDidMount() {
    const localContacts = localStorage.getItem('contacts');
    if (localContacts && JSON.parse(localContacts).length > 0) {
      this.setState({
        contacts: JSON.parse(localContacts),
      })
    } else 
      this.setState({
        contacts: [],
      })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts?.length !== this.state.contacts.length)
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
  }

  addUserData = (data) => {
    
    const foundUser = this.state.contacts.find(contact =>
      contact.name?.toLowerCase() === data.name?.toLowerCase() 
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
        {this.state.contacts && (
          <ContactList
            contacts={
            this.state.filter.length > 0
              ? this.state.contacts.filter(user => user.name.toLowerCase().includes(this.state.filter.toLowerCase()))
              : this.state.contacts}
          RemoveUser={this.handelerDelete}
          />
        )} 
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