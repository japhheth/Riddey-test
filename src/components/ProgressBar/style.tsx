import styled from "styled-components";
import { ProgressBgColor } from "./def";
import { getProgressInPercentage } from "../../utils/functions";

export const ProgressContainer = styled.div`
  height: 4px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary.grey5};
  margin-top: 0.5rem;
`;

export const ProgressfillerStyles = styled.div<{
  progress: number;
  maxLimit: number;
  bgColor?: ProgressBgColor;
}>`
  height: 100%;
  width: ${({ progress, maxLimit }) =>
    getProgressInPercentage(progress, maxLimit)};
  background-color: ${({ theme, bgColor }) =>
    bgColor ? bgColor : theme.colors.primary.terraCotta};
  text-align: right;
  transition: width 1s ease-in-out;
`;
