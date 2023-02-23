import styled from "styled-components";

export const BoardWrapper = styled.section``;

export const BoardLogoWrapper = styled.section`
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
`;

export const BoardHeaderWrapper = styled.header`
  padding: 0 1.2rem;
  text-align: center;
  margin-bottom: 1rem;
`;

export const BoadHeader = styled.h3`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  margin-block-end: 0 !important;
  color: ${({ theme }) => theme.colors.primary.grey4};
`;

export const BoardSubText = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: ${({ theme }) => theme.colors.primary.grey3};
  margin-top: 0.5rem;
`;
