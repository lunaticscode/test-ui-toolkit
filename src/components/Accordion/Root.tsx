import {
  PropsWithChildren,
  createContext,
  forwardRef,
  useContext,
  useImperativeHandle,
  useState,
} from "react";

interface AccordionRootProps extends PropsWithChildren {}
interface AccordionContextProps {
  expandedValue?: string[];
  handleClickTrigger?: (contentValue: string) => void;
}
const AccordionContext = createContext<AccordionContextProps>({});

export const useAccordionContext = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw Error("(!) Accordion 컨텍스트를 호출할 수 없는 범위입니다.");
  }
  return context;
};
export interface AccodionRefProps {
  triggerAllOpen: () => void;
}
const Root = forwardRef<AccodionRefProps, AccordionRootProps>(
  ({ children }, ref) => {
    const [expandedValue, setExpandedValue] = useState<string[]>([]);

    const handleClickTrigger = (contentValue: string) => {
      const isContainValue = expandedValue.includes(contentValue);
      if (isContainValue) {
        setExpandedValue((prev) =>
          prev.filter((prevValue) => prevValue !== contentValue)
        );
      } else {
        setExpandedValue((prev) => [...prev, contentValue]);
      }
    };

    useImperativeHandle(ref, () => ({
      triggerAllOpen: () => setExpandedValue([]),
    }));

    const contextValue: AccordionContextProps = {
      expandedValue,
      handleClickTrigger,
    };

    return (
      <AccordionContext.Provider value={contextValue}>
        {children}
      </AccordionContext.Provider>
    );
  }
);
export default Root;
