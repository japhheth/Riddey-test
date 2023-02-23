import { ProgressContainer, ProgressfillerStyles } from "./style";

interface ProgressBarProps {
  progress: number;
  maxLimit: number;
}

const ProgressBar = ({ progress, maxLimit }: ProgressBarProps) => {
  return (
    <ProgressContainer>
      <ProgressfillerStyles
        role="progressbar"
        progress={progress}
        maxLimit={maxLimit}
      ></ProgressfillerStyles>
    </ProgressContainer>
  );
};

export default ProgressBar;
