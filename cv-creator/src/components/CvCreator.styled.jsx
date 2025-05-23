import styled from "styled-components";
import CvModifier from "./CvModifier.styled";
import Cv from "./Cv.styled";
import { useState } from "react";

const CvCreator = () => {
    const exampleCvInfo = {name: "", occupation: "", about: "", headerItems: [
{title: 'header1', isEditable: false, subItems: [ 
{id: '7fce0c67-ef1f-4ef5-a677-1a604f4db0e9', title: 'subtitle', detail: 'subdetail'}], id: '811199a9-c508-46d8-8276-3f25b417e971'}], 
main:[{title: 'Employment', isEditable: false, subItems: [{id: '', role: '', employer: '', description: '', date: ''}], id: ''}]}


    const [cvInfo, setCvInfo] = useState({name: "", occupation: "", about: "", headerItems: [{title: '', isEditable: false, subItems: [{id: '', title: '', detail: ''}], id: ''}], 
        main:[{title: '', isEditable: false, subItems: [{id: '', title: '', detail: ''}], id: ''}] });
    return ( 
        <Wrapper>
            <CvModifier cvInfo={cvInfo} setCvInfo={setCvInfo}></CvModifier>
            <Cv cvInfo={cvInfo} setCvInfo={setCvInfo}></Cv>
        </Wrapper>
     );
}

const Wrapper = styled.main`
    border: 1px solid red;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
 
export default CvCreator;