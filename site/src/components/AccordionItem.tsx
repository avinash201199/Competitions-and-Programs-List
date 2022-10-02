
import React, { useState } from 'react'
import {
    Accordion_Item_Wrapper,
    Accordion_Item_Title,
    Accordion_Item_Content,
} from "./styles/AccordionItem";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";


const AccordionItem: React.FC<any> = ({ ...props }) => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleClick = () => {

    }

    return (
        <Accordion_Item_Wrapper>
            <Accordion_Item_Title onClick={() => setIsOpen(!isOpen)}>
                <ArrowRightIcon style={{ fontSize: "3rem"  }} className={isOpen ? "open" : ""} />
                <h5>{props.title}</h5>
            </Accordion_Item_Title>
            <Accordion_Item_Content className={isOpen ? "show" : ""}>
                <h5>About</h5>
                <section>{props.about}</section>

                {props.siteUrl ? (
                    <>
                        <h5>Official Website</h5>
                        <a href={props.siteUrl}>{props.siteUrl}</a>
                    </>
                ) : (
                    " "
                )}
                {props.YouTube ? (
                    <>
                        <h5>Explanation on Youtube</h5>
                        <a href={props.YouTube}>{props.YouTube}</a>
                    </>
                ) : (
                    " "
                )}
            </Accordion_Item_Content>
        </Accordion_Item_Wrapper>
    );
}

export default AccordionItem