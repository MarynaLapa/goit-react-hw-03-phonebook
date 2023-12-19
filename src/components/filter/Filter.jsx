import React from 'react'
import styled from 'styled-components';

const FilterContainer = styled.div`
    padding-left: 16px;
    width: 320px;
    margin-bottom: 20px;
    p {
        font-size: 20px;
    }
    input {
        width: 100%;
        margin-bottom: 8px;
        border-radius: 4px;
        border: 1px solid #6f6ffa;
        outline: none;
        font-size: 16px;
        
    }
`
const Filter = ({ title, value, onChange }) => {
    return (
        <FilterContainer>
            <p>{title}</p>
            <input
                type='text'
                name='filter'
                placeholder="Search by name"
                value={value}
                onChange={onChange}
            />
      </FilterContainer>
      
  )
}

export default Filter;