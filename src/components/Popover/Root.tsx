import {
  Dispatch,
  FC,
  PropsWithChildren,
  RefObject,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

type PopoverPositions = "bottom-left" | "bottom-right";
interface PopoverRootProps extends PropsWithChildren {
  anchor?: RefObject<HTMLElement>;
  position?: PopoverPositions;
}
interface PopoverContextProps extends PopoverRootProps {
  setAnchor?: Dispatch<SetStateAction<RefObject<HTMLElement> | undefined>>;
}
const PopoverContext = createContext<PopoverContextProps>({
  anchor: undefined,
  position: "bottom-left",
  setAnchor: () => {},
});

export const usePopoverContext = () => {
  const context = useContext(PopoverContext);
  if (!context) {
    throw Error("(!) Popover 컨텍스트를 호출할 수 없는 범위입니다.");
  }
  return context;
};

const Root: FC<PopoverRootProps> = ({ children, anchor, position }) => {
  const [_, setAnchor] = useState<RefObject<HTMLElement>>();
  const contextValue = {
    anchor,
    setAnchor,
    position,
  };
  return (
    <PopoverContext.Provider value={contextValue}>
      {children}
    </PopoverContext.Provider>
  );
};

export default Root;
