import { Component } from 'react'
import Input from './Input'
import Button from './Button'
import data from './data.json'
import styled from 'styled-components'

const FormStyled = styled.form`
  width: 320px;
  text-align: center;
`
export default class ContactForm extends Component {
    state = {
      name: '',
      number: '',
    }
    
  handlerChange = ({ target: { value, name } }) => {
    
    this.setState({
      [name]: value,
    })
    console.log(this.state)
  }

  handlerSubmit = (e) => {
    e.preventDefault()
    this.props.addUserData(this.state)
    this.setState({
      name: '',
      number: '',
    })
  }
  
  render() {
      return (
        <FormStyled onSubmit={this.handlerSubmit}> 
          <Input
            data={data}
            value={[this.state.name, this.state.number]}
            onChange={this.handlerChange}
          />
          <Button
            text={'Add contact'}
            type={'submit'}
          />
        </FormStyled>
    )
  }
}

