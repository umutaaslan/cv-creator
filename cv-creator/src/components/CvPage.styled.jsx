import styled from "styled-components";
import CvHeaderContent from "./CvHeaderContent.styled";
import CvPageMainItem from "./CvPageMainItem.styled";

const CvPage = ({cvInfo, setCvInfo, componentRef}) => {
    
    return ( 
        <Wrapper ref={componentRef}>
            <Header>
                {cvInfo.userImageURL && <StyledImage src={cvInfo.userImageURL} />}
                <HeaderContentWrapper>
                    <CvHeaderContent headerItems={cvInfo.headerItems} cvInfo={cvInfo} setCvInfo={setCvInfo} ></CvHeaderContent>
                </HeaderContentWrapper>
            </Header>
            <Main>
                <Name>
                    {cvInfo.name}
                </Name>
                <Occupation>
                    {cvInfo.occupation}
                </Occupation>
                <About>
                    {cvInfo.about}
                </About>
                
                {cvInfo.main[0] && cvInfo.main[0].title != "" && cvInfo.main.map(item => {
                    return (
                        <Section key={item.id} data-id={item.id}>
                            <SectionTitle>
                                {item.title}
                            </SectionTitle>
                            {item.subItems.map(subItem => {
                                return <CvPageMainItem key={subItem.id} id={subItem.id} role={subItem.role} employer={subItem.employer} description={subItem.description} date={subItem.date} isEditable={item.isEditable} cvInfo={cvInfo} setCvInfo={setCvInfo}/>
                            })}
                         </Section>
                )
                })}
            </Main>
        </Wrapper>
     );
}
 

const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
`

const Header = styled.div`
    height: 100%;
    width: 32%;
    background-color: hsl(219 21% 25%);
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
     height: 100%;
     border: 1px solid #323B4D;
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