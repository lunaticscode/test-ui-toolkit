import { createPortal } from "react-dom";
import { usePopoverContext } from "./Root";
import { FC, PropsWithChildren } from "react";
import usePosition from "./hooks/usePosition";

interface PopoverPortalProps extends PropsWithChildren {}
const Portal: FC<PopoverPortalProps> = ({ children }) => {
  const { x, y } = usePosition();
  const { anchor } = usePopoverContext();
  const PortalElement = createPortal(
    children,
    (anchor?.current || document.body) as Element
  );
  return PortalElement;
};
export default Portal;
