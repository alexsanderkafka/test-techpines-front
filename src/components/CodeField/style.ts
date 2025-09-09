import styled from "styled-components";


export const Wrapper = styled.div`
  width: 100%;
`;

export const InputsRow = styled.div`
  display: flex;
  gap: 10px;
  margin: 15px 0;
`;

export const CodeInputBox = styled.input`
  border: 2px solid #8b4513;
  border-radius: 8px;
  width: 50px;
  height: 50px;
  text-align: center;
  font-size: 20px;
  outline: none;

  &:focus {
    border-color: #a0522d;
    box-shadow: 0 0 5px rgba(139, 69, 19, 0.5);
  }
`;