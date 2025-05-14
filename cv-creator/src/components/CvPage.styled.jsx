import styled from "styled-components";
import CvHeaderContent from "./CvHeaderContent.styled";

const CvPage = () => {
    return ( 
        <Wrapper>
            <Header>
                <StyledImage src="../../public/examplePp.jpg"></StyledImage>
                <HeaderContentWrapper>
                    <CvHeaderContent></CvHeaderContent>
                    <CvHeaderContent></CvHeaderContent>
                    <CvHeaderContent></CvHeaderContent>
                    <CvHeaderContent></CvHeaderContent>
                </HeaderContentWrapper>
            </Header>
        </Wrapper>
     );
}
 

const Wrapper = styled.div`
    border: 1px solid red;
    height: 100%;
    width: 100%;
`

const Header = styled.div`
    height: 100%;
    width: 32%;
    background-color: hsl(219 21% 25%);
    border: 1px solid yellow;
    padding: 16px;
    padding-left: 20px;
    display: flex;
    flex-direction: column;
`

const StyledImage = styled.img`
    height: 6rem;
    width: 6rem;
    border-radius: 50%;
    align-self: center;
`

const HeaderContentWrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

`

export default CvPage;