import { useState, useCallback } from "react";

function getElementSize({ offsetWidth, offsetHeight }) {
  return {
    width: offsetWidth,
    height: offsetHeight,
  };
}

const useElementSize = <T extends HTMLElement>() => {
  const [elementSize, setElementSize] = useState({
    width: 0,
    height: 0,
  });
  const onRef = useCallback((elementRef: T) => {
    if (elementRef == null) return;
    setElementSize(getElementSize(elementRef));
  }, []);
  return [elementSize, onRef] as const;
};

export default useElementSize;
