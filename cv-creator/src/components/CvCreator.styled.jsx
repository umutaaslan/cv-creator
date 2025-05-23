import styled from "styled-components";
import CvModifier from "./CvModifier.styled";
import Cv from "./Cv.styled";
import { useState } from "react";

const CvCreator = () => {

   
    const emptyCvInfo = {
        name: "", 
        occupation: "", 
        about: "", 

        headerItems: [{title: '', isEditable: false, 
            subItems: [{id: '', title: '', detail: ''}], id: ''}], 

        main:[{title: '', isEditable: false, 
            subItems: [{id: '', role: '', employer: '', description: '', date: ''}], id: ''}] 
    }

    const [cvInfo, setCvInfo] = useState(emptyCvInfo);
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