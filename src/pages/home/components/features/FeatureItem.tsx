import { TickIcon } from "../../../../assets/svg";
import { IFeatures } from "../../../../types/features";
import {
  FeatureItemWrapper,
  LeftItemWrapper,
  RightItemWrapper,
  FeatureItemHeader,
  FeatureItemText,
} from "./styles";

interface FeatureItemProps {
  feature: IFeatures;
}

const FeatureItem = ({ feature }: FeatureItemProps) => {
  return (
    <FeatureItemWrapper>
      <LeftItemWrapper>
        <TickIcon />
      </LeftItemWrapper>
      <RightItemWrapper>
        <FeatureItemHeader>{feature.header}</FeatureItemHeader>
        <FeatureItemText>{feature.text}</FeatureItemText>
      </RightItemWrapper>
    </FeatureItemWrapper>
  );
};

export default FeatureItem;
