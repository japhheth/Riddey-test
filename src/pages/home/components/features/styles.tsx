import styled from "styled-components";

export const FeaturesInnerWrapper = styled.ul`
  width: 65%;
  margin: 0 auto;
`;

export const FeaturesWrapper = styled.section``;

export const FeatureItemWrapper = styled.li`
  margin-bottom: 20px;
  display: flex;
  gap: 10px;
`;

export const LeftItemWrapper = styled.section``;

export const FeatureButtonWrapper = styled.section`
  margin-top: 2rem;
`;

export const RightItemWrapper = styled.section`
  max-width: 320px;
`;

export const FeatureItemHeader = styled.span`
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  margin-block: 0;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.primary.grey4};
`;

export const FeatureItemText = styled.span`
  margin-left: 4px;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  margin-block: 0;
  color: ${({ theme }) => theme.colors.primary.grey2};
`;

export const UsageHeader = styled.p`
  font-weight: 700;
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary.grey6};
  margin-top: 2rem;
`;

export const UsageProgressText = styled.p`
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  color: ${({ theme }) => theme.colors.primary.terraCotta};
  text-align: center;
  margin-top: 0.3rem;
`;
