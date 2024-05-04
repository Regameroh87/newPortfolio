import { RefObject, useEffect, useRef } from "react";

interface Dimensions {
    width: number;
    height: number;
  }
export const useDimensions = (ref: RefObject<HTMLElement>) => {
  const dimensions = useRef<Dimensions>({ width: 0, height: 0 });

  useEffect(() => {
    dimensions.current.width = ref.current!.offsetWidth;
    dimensions.current.height = ref.current!.offsetHeight;
  }, []);

  return dimensions.current;
};