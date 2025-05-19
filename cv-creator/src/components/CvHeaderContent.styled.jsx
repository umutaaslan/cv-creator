import styled from "styled-components";
import React from "react";

const CvHeaderContent = ({headerItems}) => {
    return ( 
        <Wrapper>
            {headerItems.map(item => {
                return (
                <React.Fragment key={item.id}>
                    <Title data-id={item.id}>{item.title}</Title>
                    {item.subItems.map(subItem => {
                    return(
                        <Item key={subItem.id} data-id={subItem.id}>
                            <ItemTitle>{subItem.title}</ItemTitle>
                            <ItemContent>{subItem.detail}</ItemContent>
                        </Item>
                    )
                })}
               
                </React.Fragment>
                
                )

            })}
            
            
            
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