import styled from "styled-components";
import AccordionElement from "./Accordion.styled";
import PersonalDetailsForm from "./PersonalDetailsForm.styled";
import HeaderForm from "./HeaderForm.styled";

const CvModifier = ({cvInfo, setCvInfo}) => {
    return ( 
        <>
            <Wrapper>
                <AccordionWrapper>
                    <AccordionElement 
                        header={"Personal Details"}
                        value="item-1"
                        key="item-1"
                    ><PersonalDetailsForm cvInfo={cvInfo} setCvInfo={setCvInfo} /></AccordionElement>

                    <AccordionElement 
                        header={"Header"}
                        value="item-2"
                        key="item-2"
                    ><HeaderForm cvInfo={cvInfo} setCvInfo={setCvInfo} /></AccordionElement>

                    <AccordionElement 
                        header={"Personal Details3"}
                        value="item-3"
                        key="item-3"
                    ><PersonalDetailsForm cvInfo={cvInfo} setCvInfo={setCvInfo} /></AccordionElement>
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