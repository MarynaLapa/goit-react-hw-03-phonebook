import styled from "styled-components";

export const List = styled.ul`
position: relative;
    display: table-cell;
    font-size: 24px;
    text-transform: capitalize;
    list-style: none;
    span::before {
        content: '';
        margin-right: 8px;
        display: inline-block;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: #6f6ffa;

    }
    li:not(:last-child) {
        padding-bottom: 8px; 
    }
    span {
        vertical-align: middle;
        padding-right: 12px;
    } 
    button {
        padding: 4px 8px;
        width: 120px;
        background-color: #6f6ffa;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        color: white;
        font-family: inherit;
        font-size: medium;
        letter-spacing: 1px;
        box-shadow: 0 15px 15px rgba(124, 97, 245, 0.2);
        &:hover {
            background-color: #0404ac;
            letter-spacing: 2px;
            scale: 1.01;
        }
    } 
    `;
