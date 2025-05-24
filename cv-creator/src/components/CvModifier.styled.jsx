import styled from "styled-components";
import AccordionElement from "./Accordion.styled";
import PersonalDetailsForm from "./PersonalDetailsForm.styled";
import HeaderForm from "./HeaderForm.styled";
import EducationForm from "./EducationForm.styled";
import html2pdf from "html2pdf.js"

const CvModifier = ({cvInfo, setCvInfo, componentRef}) => {
    const handleClick = () => {
        const isAnyItemEditable = cvInfo.headerItems.some(el => {
            return el.isEditable;
        })
        if(!isAnyItemEditable){
            const original = componentRef.current;
            console.log(original)

            const clone = original.cloneNode(true);
            console.log(clone)
            clone.style.width = "794px";
            clone.style.height = "1123px";
            
            

            document.body.appendChild(clone);

            html2pdf()
            .set({
                margin: 0,
                filename: "cv.pdf",
                image: { type: "jpeg", quality: 0.98 },
                html2canvas: { scale: 10 },
                jsPDF: {
                unit: "px",
                format: [794, 1123],
                orientation: "portrait",
                },
            })
            .from(clone)
            .save()
            .then(() => clone.remove());
        }
        else{
            alert("You need to save every item first");
        }
        



    }
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
            <button onClick={handleClick}>Save</button>
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
