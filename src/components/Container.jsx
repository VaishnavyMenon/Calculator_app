// import React from "react";
import { useLottie } from "lottie-react";
import groovyWalkAnimation from "../assets/loading-animation.json";

const Container = () => {
  const options = {
    animationData: groovyWalkAnimation,
    loop: false,
  };

  const { View } = useLottie(options);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "white",
      }}
    >
      {View}
    </div>
  );
};

export default Container;
