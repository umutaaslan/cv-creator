import styled from "styled-components";
import CvHeaderContent from "./CvHeaderContent.styled";
import CvPageMainItem from "./CvPageMainItem.styled";

const CvPage = ({cvInfo, setCvInfo}) => {
    
    return ( 
        <Wrapper>
            <Header>
                <StyledImage src="../../public/examplePp.jpg"></StyledImage>
                <HeaderContentWrapper>
                    <CvHeaderContent headerItems={cvInfo.headerItems} cvInfo={cvInfo} setCvInfo={setCvInfo}></CvHeaderContent>
                </HeaderContentWrapper>
            </Header>
            <Main>
                <Name>
                    {cvInfo.name || "Jonathan Doe"}
                </Name>
                <Occupation>
                    {cvInfo.occupation || "Web developer"}
                </Occupation>
                <About>
                    {cvInfo.about || "Highly motivated and results-oriented Web Developer with 4 years of experience in building user-friendly and responsive web applications. Proven ability to design, develop, and implement web applications using a variety of programming languages and frameworks. Passionate about creating innovative and performant web experiences."}
                </About>
                
                <Section>
                    <SectionTitle>
                    Employment
                    </SectionTitle>
                    <CvPageMainItem />
                    <CvPageMainItem />
                </Section>
                <Section>
                    <SectionTitle>
                    Education
                    </SectionTitle>
                    <CvPageMainItem />
                </Section>
            </Main>
        </Wrapper>
     );
}
 

const Wrapper = styled.div`
    border: 1px solid red;
    height: 100%;
    width: 100%;
    display: flex;
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
    gap: 2%;
;
`

const StyledImage = styled.img`
    height: 7rem;
    width: 7rem;
    border-radius: 50%;
    align-self: center;
`

const HeaderContentWrapper = styled.div`
   /* top one fixed, others space-evenly */
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 5%;
`

const Main = styled.main`
     border: 5px solid green;
     height: 100%;
     width: 100%;
     padding: 48px 24px;
     overflow-x: auto;
     overflow-y: hidden;

`

const Name = styled.div`
    font-size: 1.8rem;
`

const Occupation = styled.div`
    margin-top: 16px;
`

const About = styled.div`
    margin-top: 16px;
    font-size: .5rem;
    /* line-height: 1.5; */
`

const Section = styled.div`
    margin-top: 16px;
`

const SectionTitle = styled.div`
    font-weight: 500;
    border-bottom: 1px solid black;
    padding-bottom: 4px;
    margin-bottom: 16px;
`

export default CvPage;