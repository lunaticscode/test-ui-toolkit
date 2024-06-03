import {
  FC,
  useRef,
  HTMLAttributes,
  forwardRef,
  useImperativeHandle,
  SVGAttributes,
  useState,
} from "react";
import { Accordion } from "./components";
import { AccodionRefProps } from "./components/Accordion/Root";
import Popover from "./components/Popover";

function App() {
  const accordionRef = useRef<AccodionRefProps>(null);
  // const handleClickAllOpen = () => {
  //   accordionRef?.current?.triggerAllOpen();
  // };
  const [active, setActive] = useState<boolean>(false);
  const handleClickTrigger = () => {
    targetButtonRef?.current?.customFunction();
    console.log(targetButtonRef?.current?.nowTime);
  };
  const popoverAnchorRef = useRef<HTMLButtonElement>(null);
  const targetButtonRef = useRef<ButtonCustomRef>(null);
  return (
    <>
      <button ref={popoverAnchorRef}>anchor</button>
      <Accordion.Root ref={accordionRef}>
        <Accordion.Trigger value={"1"}>#1 trigger</Accordion.Trigger>
        <Accordion.Content value={"1"}>
          #1 This is AccordionContent
        </Accordion.Content>
        <Accordion.Trigger value={"2"}>#2 trigger</Accordion.Trigger>
        <Accordion.Content value={"2"}>
          #2 This is AccordionContent
        </Accordion.Content>
        <Accordion.Trigger value={"3"}>#3 trigger</Accordion.Trigger>
        <Accordion.Content value={"3"}>
          #3 This is AccordionContent
        </Accordion.Content>
      </Accordion.Root>
      <Popover.Root anchor={popoverAnchorRef}>
        <Popover.Portal></Popover.Portal>
      </Popover.Root>
    </>
  );
}

export default App;
interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {}
interface ButtonCustomRef {
  customFunction: () => void;
  nowTime: number;
}
const Button = forwardRef<ButtonCustomRef, ButtonProps>(
  ({ children, ...props }, ref) => {
    useImperativeHandle(ref, () => ({
      customFunction: () => console.log("exec customFunction..."),
      nowTime: new Date().getTime(),
    }));
    return <button {...props}>{children}</button>;
  }
);

const Page = () => {
  return (
    <>
      <button>TriggerButton</button>
      <Button>TagetButton</Button>
    </>
  );
};
export const KakaoIcon: FC<SVGAttributes<SVGSVGElement>> = (styleProps) => {
  return (
    <svg
      width="62"
      height="62"
      viewBox="0 0 62 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...styleProps}
    >
      <circle cx="30.5854" cy="30.5854" r="30.5854" fill="#F9E000" />
      <g clip-path="url(#clip0_593_2067)">
        <path
          d="M31.228 16.0137C23.4157 16.0137 17.0469 21.078 17.0469 27.2581C17.0469 30.9491 19.3396 34.4253 23.1609 36.5283C22.524 38.9746 20.0614 41.5496 20.019 41.5926C19.9765 41.6354 19.9341 41.7642 19.9765 41.8071C20.019 41.8929 20.1039 41.9359 20.1888 41.9359C24.0525 41.8071 28.1286 38.8029 28.723 38.3309C29.5722 38.4596 30.3789 38.5024 31.228 38.5024C39.0404 38.5024 45.4092 33.4383 45.4092 27.2581C45.4092 21.078 39.0404 16.0137 31.228 16.0137Z"
          fill="#47292B"
        />
      </g>
      <defs>
        <clipPath id="clip0_593_2067">
          <rect
            width="29.7805"
            height="27.3659"
            fill="white"
            transform="translate(16 15.2927)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
