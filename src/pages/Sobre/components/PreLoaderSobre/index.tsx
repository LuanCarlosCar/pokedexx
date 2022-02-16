import React, { useState } from "react";

import Lottie from "react-lottie";
import animationData from "../../../../assets/lottie/loading2.json";
import { ContainerLoading } from "./styled";
import { PropsLoadingSobre } from "./type";

function PreLoaderSobre() {
  const [animationState, setAnimationState] = useState<PropsLoadingSobre>({
    isStopped: false,
    isPaused: false,
    isLoop: true,
  });
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <ContainerLoading>
      <Lottie
        options={defaultOptions}
        height={500}
        width={500}
        isStopped={animationState.isStopped}
        isPaused={animationState.isPaused}
      />
    </ContainerLoading>
  );
}
export default PreLoaderSobre;
