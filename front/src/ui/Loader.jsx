import React from "react";
import { BeatLoader } from "react-spinners";

function Loader({ size = 10, color = "white" }) {
  return (
    <BeatLoader
      color={color}
      loading={true}
      cssOverride={{
        margin: "0 auto",
      }}
      size={size}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
}

export default Loader;
