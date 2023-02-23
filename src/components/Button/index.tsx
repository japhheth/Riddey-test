import { ReactNode } from "react";
import { ButtonWrapper } from "./style";

interface ButtonProps {
  handleClick: () => void;
  children: ReactNode;
  shouldDisable: boolean;
  bgColor?: string;
}

const Button = ({
  handleClick,
  children,
  bgColor,
  shouldDisable,
}: ButtonProps) => {
  return (
    <ButtonWrapper
      bgColor={bgColor}
      onClick={handleClick}
      disabled={shouldDisable}
    >
      {children}
    </ButtonWrapper>
  );
};

export default Button;
