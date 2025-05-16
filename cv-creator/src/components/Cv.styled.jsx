import styled from "styled-components";
import CvPage from "./CvPage.styled";

const Cv = () => {
    return ( 
        <>
            <Wrapper>
                <CvPage>

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
