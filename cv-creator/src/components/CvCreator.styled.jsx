import styled from "styled-components";
import CvModifier from "./CvModifier.styled";
import Cv from "./Cv.styled";
import { useState } from "react";
import { useRef } from "react";
import html2pdf from "html2pdf.js"
import { exampleCvInfo, emptyCvInfo } from "../extra/cvInfos"

const CvCreator = () => {
    
    const [isExampleActive, setIsExampleActive] = useState(true);
    
    const [cvInfo, setCvInfo] = useState(exampleCvInfo);
    
    const componentRef = useRef();
    
    const handleClick = () => {
        const newValue = isExampleActive ? false : true;
        setIsExampleActive(newValue);

        const usedCvInfo = newValue ? exampleCvInfo : emptyCvInfo;
        setCvInfo(usedCvInfo);
    }
    
    let buttonText = isExampleActive ? "Clear the example" : "See an example";

    const handleSaveClick = () => {
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
            <StyledButton onClick={handleClick}>{buttonText}</StyledButton>
            <StyledSaveButton onClick={handleSaveClick}>Save</StyledSaveButton>
            <Wrapper>
                <CvModifier cvInfo={cvInfo} setCvInfo={setCvInfo} componentRef={componentRef}></CvModifier>
                <Cv cvInfo={cvInfo} setCvInfo={setCvInfo} componentRef={componentRef}></Cv>
            </Wrapper>
        </>
     );
}

const Wrapper = styled.main`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const StyledButton = styled.button`
    background-color: #242424;
    border: none;
    color: white;
    padding: 8px;
    position: absolute;
    left: 12px;
    top: 12px;
    border-radius: 6px;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
        padding: 12px;
    }
`

const StyledSaveButton = styled.div`
    background-color: #2196F3;

    &:hover{
        background-color: #1976D2;
    }
`

 
export default CvCreator;