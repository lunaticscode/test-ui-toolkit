import { FC, PropsWithChildren } from "react";
import { useAccordionContext } from "./Root";

interface TriggerProps extends PropsWithChildren {
  value?: string;
}
const Trigger: FC<TriggerProps> = (props) => {
  const { children, value } = props;
  const { handleClickTrigger } = useAccordionContext();
  const onClickTrigger = () => {
    handleClickTrigger?.(value || "");
  };
  return <button onClick={onClickTrigger}>{children}</button>;
};
export default Trigger;
