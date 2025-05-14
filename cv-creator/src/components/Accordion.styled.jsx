import styled from "styled-components";
import { Accordion } from "radix-ui"
import { ChevronDownIcon } from "@radix-ui/react-icons";



const AccordionElement = ({header, Content, value}) => {
    return ( 
        <StyledAccordionRoot
                    type="single"
                    collapsible
                    defaultValue="item-1"
                >

                    <StyledAccordionItem value={value}>
                        <StyledAccordionHeader>
                            <StyledAccordionTrigger>
                                <span>{header}</span>
                                <StyledChevronDownIcon className="AccordionChevron" aria-hidden/>
                            </StyledAccordionTrigger>
                        </StyledAccordionHeader>
                        <StyledAccordionContent>
                            <Content />   
                        </StyledAccordionContent>
                    </StyledAccordionItem>

                    
        </StyledAccordionRoot>
     );
}



const StyledChevronDownIcon = styled(ChevronDownIcon)`
    transition: transform 300ms;
    margin-left: auto;
    width: 2rem;
    height: 2rem;
`

const StyledAccordionRoot = styled(Accordion.Root)`

`

const StyledAccordionItem = styled(Accordion.Item)`
`

const StyledAccordionHeader = styled(Accordion.Header)`
    width: 100%;
    font-weight: 500;
`

const StyledAccordionTrigger = styled(Accordion.Trigger)`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid black;
    padding: 12px 18px;
    background-color: inherit;



    &[data-state="open"] > ${StyledChevronDownIcon} {
        transform: rotate(180deg);
    }
`

const StyledAccordionContent = styled(Accordion.Content)`
    background-color: red;
    overflow: clip;
    font-weight: 400;


    &[data-state="open"] {
	    animation: slideDown 300ms ease-out;
    }
    &[data-state="closed"] {
	    animation: slideUp 300ms ease-out;
    }

`





 
export default AccordionElement;