import React from "react";

import Lottie from "react-lottie";
import animationData from "../../../../assets/lottie/loading3.json";
import { ContainerLoading } from "./styled";

function PreLoaderSobre() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    isPaused: false,
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
        isStopped={false}
        isPaused={false}
      />
    </ContainerLoading>
  );
}
export default PreLoaderSobre;
