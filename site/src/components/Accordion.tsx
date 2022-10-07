import React from "react";
import AccordionItem from "./AccordionItem";
import { Accordion_wrapper, Accordion_container } from "./styles/Accordion";
import { data } from "../data";

interface D {
  title: string;
  about: string;
  benefit?: string;
  siteUrl: string;
  YouTube: string;
}
interface T {
  props: Array<D>;
}
interface P {
  searchValue: string;
}

const Accordion: React.FC<P> = (props: P) => {
  return (
    <Accordion_wrapper>
      {data.map((content) => {
        if (
          content.title
            .toLowerCase()
            .startsWith(props.searchValue.toLowerCase())
        ) {
          return <AccordionItem key={content.id} {...content} />;
        }
      })}
    </Accordion_wrapper>
  );
};

export default Accordion;
