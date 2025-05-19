import styled from "styled-components";
import CvModifier from "./CvModifier.styled";
import Cv from "./Cv.styled";
import { useState } from "react";

const CvCreator = () => {
    const [cvInfo, setCvInfo] = useState({name: "", occupation: "", about: "", headerItems: [], });
    return ( 
        <Wrapper>
            <CvModifier cvInfo={cvInfo} setCvInfo={setCvInfo}></CvModifier>
            <Cv cvInfo={cvInfo}></Cv>
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