import styled from "styled-components";
import CvPage from "./CvPage.styled";

const Cv = ({cvInfo, setCvInfo}) => {
    return ( 
        <>
            <Wrapper>
                <CvPage cvInfo={cvInfo} setCvInfo={setCvInfo}>

                </CvPage>
            </Wrapper>
        </>
     );
}
 
const Wrapper = styled.div`
    border: 1px solid blue;
    width: 50%;
    height: 80%;
    padding: 0.5%;
`
 
export default Cv;
