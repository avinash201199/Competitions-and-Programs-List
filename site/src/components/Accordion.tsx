import React from 'react'
import AccordionItem from './AccordionItem'
import {Accordion_wrapper, Accordion_container} from './styles/Accordion'
import { data } from "../data";


interface D {
    title: string;
    about: string;
    benefit?: string;
    siteUrl: string;
    YouTube: string;
}
interface T {
    props: Array<D>
}


const Accordion: React.FC = () => {
    return (
        <Accordion_wrapper>
            {data.map(content => (
                <AccordionItem key={content.id} {...content}/>
            ))}
        </Accordion_wrapper>
    )
}

export default Accordion