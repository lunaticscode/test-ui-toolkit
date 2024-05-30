import { FC, PropsWithChildren } from "react";
import { useAccordionContext } from "./Root";

interface AccordionContentProps extends PropsWithChildren {
  value?: string;
}
const Content: FC<AccordionContentProps> = (props) => {
  const { children, value } = props;
  const { expandedValue } = useAccordionContext();
  const isExpanded = expandedValue?.includes(value || "");
  return isExpanded ? null : <div>{children}</div>;
};
export default Content;
