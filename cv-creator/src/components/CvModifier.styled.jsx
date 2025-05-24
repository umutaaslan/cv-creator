import styled from "styled-components";
import AccordionElement from "./Accordion.styled";
import PersonalDetailsForm from "./PersonalDetailsForm.styled";
import HeaderForm from "./HeaderForm.styled";
import EducationForm from "./EducationForm.styled";

const CvModifier = ({cvInfo, setCvInfo, componentRef}) => {
    
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
                        header={"Education & Experience"}
                        value="item-3"
                        key="item-3"
                    ><EducationForm cvInfo={cvInfo} setCvInfo={setCvInfo} /></AccordionElement>
            </AccordionWrapper>
            </Wrapper>
        </>
     );
}



const Wrapper = styled.div`
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
