import { useEffect, useState } from "react";
import { usePopoverContext } from "../Root";

const usePosition = () => {
  const { anchor, position = "bottom-left" } = usePopoverContext();

  const [positionXY, setPositionXY] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const getPosition = () => {
    const rect = anchor?.current?.getBoundingClientRect();
    console.log(rect);
    // if(position === "bottom-left"){

    // }
    // if(position === "bottom-right"){

    // }
  };
  useEffect(() => {
    console.log(anchor);
    if (anchor?.current) {
      getPosition();
    }
  }, [anchor]);
  return {
    x: positionXY.x,
    y: positionXY.y,
  };
};

export default usePosition;
