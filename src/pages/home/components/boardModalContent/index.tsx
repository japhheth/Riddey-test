import Features from "../features";
import {
  BoardWrapper,
  BoardLogoWrapper,
  BoadHeader,
  BoardSubText,
  BoardHeaderWrapper,
} from "./styles";
import { RiddeyLogo } from "../../../../assets/svg";

const Board = () => {
  return (
    <BoardWrapper>
      <BoardLogoWrapper>
        <RiddeyLogo />
      </BoardLogoWrapper>
      <BoardHeaderWrapper>
        <BoadHeader>Upgrade to Riddey PRO and boost productivity!</BoadHeader>
        <BoardSubText>
          Pellentesque porttitor euismod ante, accumsan consequat purus!
        </BoardSubText>
      </BoardHeaderWrapper>
      <Features />
    </BoardWrapper>
  );
};

export default Board;
