import styled from "styled-components";

export const FormEmailContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-top: 20px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-seri;

    input{
        flex-grow: 1;
        padding: 0.8rem;
        border: 2px solid #ddd;
        border-radius: 4px;
        font-size: 1rem;
        outline: none;
        transition: border-color 0.2s;
        width: 70%;
        margin-top: 2px;
        border-color: #8B4513;
    }
`