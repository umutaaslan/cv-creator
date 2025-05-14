import styled from "styled-components";
import AccordionElement from "./Accordion.styled";
import PersonalDetailsForm from "./PersonalDetailsForm.styled";

const CvModifier = () => {
    return ( 
        <>
            <Wrapper>
                <AccordionWrapper>
                    <AccordionElement 
                        header={"Personal Details"}
                        Content={PersonalDetailsForm}
                        value="item-1"
                        key="item-1"
                    />
                    <AccordionElement 
                        header={"Personal Details2"}
                        Content={PersonalDetailsForm}
                        value="item-2"
                        key="item-2"
                    />
                    <AccordionElement 
                        header={"Personal Details3"}
                        Content={PersonalDetailsForm}
                        value="item-3"
                        key="item-3"
                    />
            </AccordionWrapper>
            </Wrapper>
        </>
     );
}



const Wrapper = styled.div`
    /* border: 1px solid red; */
    width: 40%;
    height: 70%;

`
 
const AccordionWrapper = styled.div`
    & > div:nth-last-child(1) > div > h3 > button{
        border: none;
    }
    border: 1px solid gray;
    border-radius: 4px;
`

export default CvModifier;



//add radix primitives accordion (to learn how to use and configure 'em)