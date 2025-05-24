import { useState } from "react";
import styled from "styled-components";

const PersonalDetailsForm = ({cvInfo, setCvInfo}) => {


    const handleChange = (e) => {
        setCvInfo(prev => {return {...prev, [e.target.name]: e.target.value}});
    }

    const handleImageInputChange = (e) => {
        setCvInfo({...cvInfo, userImageURL: URL.createObjectURL(e.target.files[0])})
    }


    return ( 
        <Wrapper>
            <UpWrapper>
                <label>
                    <h3>Name</h3>
                    <input type="text" name="name" value={cvInfo.name} onChange={(e) => handleChange(e)}/>
                </label>
                <label>
                    <h3>Occupation</h3>
                    <input type="text" name="occupation" value={cvInfo.occupation} onChange={(e) => handleChange(e)}/>
                </label>
            </UpWrapper>
            <BottomWrapper>
                <label>
                    <h3>About</h3>
                    <textarea rows="8" cols="40" name="about" value={cvInfo.about} onChange={(e) => handleChange(e)} style={{resize: "none"}}/>
                </label>
                <StyledLabelButton>
                    <input type="file" accept="image/*" onChange={(e) => handleImageInputChange(e)} style={{display: "none"}}/>
                    Upload Image
                </StyledLabelButton>
            </BottomWrapper>
        </Wrapper>
     );
}

const Wrapper = styled.div`
    padding: 24px;

`
const UpWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
`
const BottomWrapper = styled.div`
    margin-top: 12px;
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    gap: 12px;
`

const StyledLabelButton = styled.label`
    background-color: hsl(200, 70%, 50%);
    color: white;
    border: none;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 1.2rem;
    font-weight: 500;
    cursor: pointer;
    transition: 0.1s;

    &:hover {
        scale: 1.1;
        background-color: hsl(200, 70%, 42%);
    }
`
 

export default PersonalDetailsForm;