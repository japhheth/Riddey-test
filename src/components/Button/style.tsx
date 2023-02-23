import styled from "styled-components";

export const ButtonWrapper = styled.button<{ bgColor?: string }>`
  width: 100%;
  padding: 11px 16px;
  background-color: ${({ theme, bgColor }) =>
    bgColor ? bgColor : theme.colors.primary.terraCotta};
  outline: none;
  border: none;
  color: ${({ theme }) => theme.colors.primary.white};
  font-weight: 700;
  font-size: 14px;
  line-height: 22px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.terraCotta1};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.primary.terraCotta2};
    opacity: 0.4;
    transition-duration: 200ms;
  }
`;
