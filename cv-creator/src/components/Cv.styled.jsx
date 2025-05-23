import styled from "styled-components";
import CvPage from "./CvPage.styled";

const Cv = ({cvInfo, setCvInfo, componentRef}) => {
    return ( 
        <>
            <Wrapper>
                <CvPage cvInfo={cvInfo} setCvInfo={setCvInfo} componentRef={componentRef}>

                </CvPage>
            </Wrapper>
        </>
     );
}
 
const Wrapper = styled.div`
    width: 50%;
    height: 100%;
    padding: 0.5%;
    margin-left: 4%;
    position: relative;
`
 
export default Cv;
