import styled from "styled-components";
import CvModifier from "./CvModifier.styled";
import Cv from "./Cv.styled";

const CvCreator = () => {
    return ( 
        <Wrapper>
            <CvModifier></CvModifier>
            <Cv></Cv>
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