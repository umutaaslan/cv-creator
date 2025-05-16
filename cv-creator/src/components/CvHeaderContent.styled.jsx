import styled from "styled-components";

const CvHeaderContent = () => {
    return ( 
        <Wrapper>
            <Title>Title</Title>
            <Item>
                <ItemTitle>Address</ItemTitle>
                <ItemContent>My address is ...</ItemContent>
            </Item>
            <Item>
                <ItemTitle>Title 2</ItemTitle>
                <ItemContent>My contact is ...</ItemContent>
            </Item>
        </Wrapper>
     );
}
 


const Wrapper = styled.div`
    color: white;
`

const Title = styled.div`
    font-weight: inherit;
    font-size: 1.1rem;
    width: 100%;
    border-bottom: 1px solid white;
    padding-bottom: 5px;
    margin-bottom: 8px;
`
const Item = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 8px;

`
const ItemTitle = styled.div`
    font-weight: 700;
    font-size: small;
    font-size: .65rem;
`

const ItemContent = styled.div`
    font-size: .5rem;
`

export default CvHeaderContent;