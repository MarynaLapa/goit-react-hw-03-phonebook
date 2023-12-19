import React from 'react'
import styled from 'styled-components'
import { InputContainer } from './InputContainer'

const Container = styled.div`
    margin: 20px;
    /* width: 300px; */
`
const Input = ({ data, value, onChange }) => {
    
    return (
        <Container>
            {data.map((el, i) => (
                <InputContainer key={el.name}>
                    <label htmlFor={el.name}>{el.name}</label>
                    <input
                        type={el.type}
                        name={el.name}
                        value={value[i]}
                        onChange={onChange}
                        required
                    />
                </InputContainer>
            ))}
        </Container>
    )  
}

export default Input