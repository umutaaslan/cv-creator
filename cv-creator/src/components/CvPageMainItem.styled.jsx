import styled from "styled-components";

const CvPageMainItem = () => {
    return ( 
        <Wrapper>
            <Role>Web Developer</Role>
            <Employer>Amazon</Employer>
            <Description>Designed and developed responsive websites and web applications using HTML, CSS, JavaScript, and React.js. Implemented backend functionality using Python and Django. Collaborated with designers and project managers to ensure on-time delivery of projects.</Description>
            <StyledDate>10/2021 - Present</StyledDate>
        </Wrapper>
     );
}
 

const Wrapper = styled.div`
    position: relative;
    padding-bottom: 24px;
    &::before{
        content: "";
        position: absolute;
        border: .5px solid black;
        height: 100%;
        left: -12px;
    };
    &::after{
        content: "";
        position: absolute;
        width: 10px;
        height: 10px;
        border: 1.5px solid #1a202c;
        background-color: white;
        border-radius: 50%;
        top: 0;
        left: -16.5px;
    }
`

const Role = styled.div`
    font-size: .8rem;

`

const Employer = styled.div`
    font-size: .7rem;
    margin-bottom: 8px;
`

const Description = styled.div`
    font-size: .5rem;

`

const StyledDate = styled.div`
    font-size: .6rem;
    position: absolute;
    right: 0;
    top: 0;
`

export default CvPageMainItem;