import { useEffect, useState } from "react";
import FeatureItem from "./FeatureItem";
import { IFeatures } from "../../../../types/features";
import {
  FeaturesInnerWrapper,
  FeaturesWrapper,
  UsageHeader,
  UsageProgressText,
  FeatureButtonWrapper,
} from "./styles";
import ProgressBar from "../../../../components/ProgressBar";
import Button from "../../../../components/Button";
import { FEATURES } from "../../../../utils/constant";

const Features = () => {
  const [progress, setProgress] = useState<number>(0);
  const [limit, setLimit] = useState<number>(10);
  const [isEqual, setIsEqual] = useState<boolean>(true);
  const [features, setFeatures] = useState<IFeatures[]>(FEATURES);

  const setProgressHandler = () => {
    setProgress((prevState: number) => prevState + 1);
  };

  useEffect(() => {
    progress === limit ? setIsEqual(true) : setIsEqual(false);
  }, [progress]);

  return (
    <FeaturesWrapper>
      <FeaturesInnerWrapper>
        {features.map((item: IFeatures) => (
          <FeatureItem feature={item} key={item.header} />
        ))}
        <UsageHeader>Current usage</UsageHeader>
        <UsageProgressText>
          {progress} out of {limit} boards in use
        </UsageProgressText>
        <ProgressBar progress={progress} maxLimit={limit} />
      </FeaturesInnerWrapper>
      <FeatureButtonWrapper>
        <Button handleClick={setProgressHandler} shouldDisable={isEqual}>
          Add New Board
        </Button>
      </FeatureButtonWrapper>
    </FeaturesWrapper>
  );
};

export default Features;
