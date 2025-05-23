import {styled, css} from "styled-components";
import React from "react";

const CvHeaderContent = ({headerItems, cvInfo, setCvInfo}) => {
    
    const handleChange = (e) => {
        if(e.target.name === "mainTitle"){
            const currItem = headerItems.find(el => el.id === e.target.getAttribute("data-id"));
            const newItem = {...currItem, title: e.target.value};
            const newHeaderItems = headerItems.map(el => {
                return el.id === newItem.id ? newItem : el;
            })
            setCvInfo({...cvInfo, headerItems: newHeaderItems});
        } 
        else{
            const currItem = headerItems.find(el => el.id === e.target.parentNode.getAttribute("data-id-main"));
            const currSubItem = currItem.subItems.find(el => el.id === e.target.getAttribute("data-id"));
            const newSubItem = {...currSubItem, [e.target.name]: e.target.value};

            const newHeaderItems = headerItems.map(el => {
                if(el.id === currItem.id){
                    const newSubItems = el.subItems.map(subEl => {
                        if(subEl.id === newSubItem.id){
                            return newSubItem;
                        }
                        else subEl;
                    });
                    return {...el, subItems: newSubItems};
                }
                else{
                    return el;
                }
            })
            setCvInfo({...cvInfo, headerItems: newHeaderItems});

        }
    }
    return ( 
        <Wrapper>
            {headerItems[0] && headerItems[0].title != "" && headerItems.map(item => {
                if(!item.isEditable){
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

            }

            if(item.isEditable){
                return (
                <React.Fragment key={item.id}>
                    <EditableTitle data-id={item.id} name="mainTitle" value={item.title} onChange={(e) => handleChange(e)} />
                    {item.subItems.map(subItem => {
                    return(
                            <EditableItem key={subItem.id} data-id={subItem.id} data-id-main={item.id}>
                                <EditableItemTitle value={subItem.title} name="title" data-id={subItem.id} onChange={(e) => handleChange(e)} />
                                <EditableItemContent value={subItem.detail} name="detail" data-id={subItem.id} onChange={(e) => handleChange(e)} />
                            </EditableItem>
                        
                    )
                })}
               
                </React.Fragment>
                )
            }

            })}
            
            
            
        </Wrapper>
     );
}
 

const sharedTitleStyles = css`
    font-weight: inherit;
    font-size: 1.1rem;
    width: 100%;
    border-bottom: 1px solid white;
    padding-bottom: 5px;
    margin-bottom: 8px;
`;


const sharedItemStyles = css`
    display: flex;
    flex-direction: column;
    margin-top: 8px;
    margin-bottom: 12px;
`;

const sharedItemTitleStyles = css`
    font-weight: 700;
    font-size: small;
    font-size: .65rem;
`;

const sharedItemContentStyles = css`
    font-size: .5rem;

`;

const sharedInputStyles = css`
    background: none;
    border: none;
    color: white;
    width: 100%;


    &:focus{
        outline: none;
    }
    &::placeholder{
        color: white;
    }
    &:hover{
        outline: 1px solid green;
        border-radius: 4px;
        &::placeholder{
            opacity: 0.5;
        }
    }
`

const Wrapper = styled.div`
    color: white;
`

const Title = styled.div`
    ${sharedTitleStyles};
`
const Item = styled.div`
    ${sharedItemStyles};
`
const ItemTitle = styled.div`
    ${sharedItemTitleStyles};
`

const ItemContent = styled.div`
    ${sharedItemContentStyles};

`

const EditableTitle = styled.input.attrs(props => ({
    type: "text",
}))`
    ${sharedInputStyles};
    ${sharedTitleStyles}
    &:hover{
        border-radius: 4px 4px 0 0;
    }
    margin-bottom: 0px;
`

const EditableItem = styled(Item)`
    ${sharedItemStyles};
`

const EditableItemTitle = styled.input.attrs(props => ({
    type: "text",
}))`
    ${sharedInputStyles};
    ${sharedItemTitleStyles}
`

const EditableItemContent = styled.input.attrs(props => ({
    type: "text",
}))`
    ${sharedInputStyles};
    ${sharedItemContentStyles}
`

export default CvHeaderContent;




// change the CvPageMain inspiring from cvPage header