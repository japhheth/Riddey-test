import styled from "styled-components";
import { convertHexToRGBA } from "../../utils";

export const ModalWrapper = styled.article`
  position: fixed;
  width: 100vw;
  height: 100vh;
  bottom: 0;
  left: 0;
  z-index: 999;
  display: block;
`;

export const ModalBackground = styled.section`
  background-color: ${({ theme }) =>
    convertHexToRGBA(theme.colors.primary.grey1, 0.3)};
  width: 100vw;
  height: 100vh;
  cursor: pointer;
`;

export const ModalContentWrapper = styled.section`
  position: absolute;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.primary.white};
  width: 100%;
  padding: 1.5rem 1rem;
  border-radius: 2rem 2rem 0px 0px;
  cursor: default;
  height: fit-content;

  @media ${({ theme }) => theme.media.md} {
    bottom: 50%;
    left: 50%;
    transform: translate(-50%, 50%);
    border-radius: 0;
    max-width: 22rem;
    box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.12);
  }
`;

export const ModalContent = styled.section`
  position: relative;
  min-height: 5rem;
  overflow-y: auto;
  max-height: 85vh;
`;
