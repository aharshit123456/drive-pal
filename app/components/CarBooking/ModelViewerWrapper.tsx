import React from "react";
import "@google/model-viewer";

const ModelViewerWrapper = (
  props: React.HTMLAttributes<HTMLElement> & { src: string }
) => {
  return <model-viewer {...props}></model-viewer>;
};

export default ModelViewerWrapper;
