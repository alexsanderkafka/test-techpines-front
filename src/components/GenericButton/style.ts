import styled from "styled-components";

export const Button = styled.button`
    background: #8B4513;
    color: white;
    border: none;
    padding: 13px 24px;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 1rem;

    min-width: 200px;

    margin-top: 10px;
    &:hover{
        background: #D2691E;
    }
`