import { useRef } from "react";
import { Accordion } from "./components";
import { AccodionRefProps } from "./components/Accordion/Root";

function App() {
  const accordionRef = useRef<AccodionRefProps>(null);
  const handleClickAllOpen = () => {
    accordionRef?.current?.triggerAllOpen();
  };
  return (
    <>
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

        {/* {dummyAccordionData.map(({ title, value, content }) => (
          <>
            <Accordion.Trigger value={value}>{title}</Accordion.Trigger>
            <Accordion.Content value={value}>{content}</Accordion.Content>
          </>
        ))} */}
      </Accordion.Root>
      <button onClick={handleClickAllOpen}>다 열어줘</button>
    </>
  );
}

export default App;
