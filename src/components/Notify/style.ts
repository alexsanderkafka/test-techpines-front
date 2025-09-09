import styled, { css } from "styled-components";

export const Container = styled.div<{ isError: boolean }>`
  width: 100%;
  padding: 10px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  ${({ isError }) =>
    isError
      ? css`
          background-color: #ff0000;
        `
      : css`
          background-color: #00a843;
        `}
`;

export const Message = styled.span`
  color: #fff;
  font-size: 16px;
`;