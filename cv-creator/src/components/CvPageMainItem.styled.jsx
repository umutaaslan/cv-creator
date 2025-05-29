import {css, styled} from "styled-components";

const CvPageMainItem = ({id, role, employer, description, date, isEditable, cvInfo, setCvInfo}) => {


    const handleChange = (e) => {
        
            const currItem = cvInfo.main.find(el => el.id === e.target.parentNode.parentNode.getAttribute("data-id"));
            const currSubItem = currItem.subItems.find(el => el.id === id);

            const newSubItem = {...currSubItem, [e.target.name]: e.target.value};

            const newMain = cvInfo.main.map(el => {
                if(el.id === currItem.id){
                    const newSubItems = el.subItems.map(subEl => {
                        if(subEl.id === newSubItem.id){
                            return newSubItem;
                        }
                        return subEl;
                    });

                    console.log(el.subItems);
                    console.log(newSubItems);
                    return {...el, subItems: newSubItems};
                }
                else{
                    return el;
                }
            })
            setCvInfo({...cvInfo, main: newMain});
    }


    return ( 
        <Wrapper>
            {!isEditable ?
            <> 
                <Role>{role}</Role>
                <Employer>{employer}</Employer>
                <Description>{description}</Description>
                <StyledDate>{date}</StyledDate>
            </>
            : 
            <>
                <EditableRole value={role} name="role" onChange={(e) => handleChange(e)} />
                <EditableEmployer value={employer} name="employer" onChange={(e) => handleChange(e)} />
                <EditableDescription value={description} name="description" onChange={(e) => handleChange(e)} />
                <EditableStyledDate value={date} name="date" onChange={(e) => handleChange(e)} />
            </>
            }
            
            
        </Wrapper>
     );
}


 const sharedInputStyles = css`
    background: none;
    border: none;
    color: black;
    width: 100%;


    &:focus{
        outline: none;
    }
    &::placeholder{
        color: black;
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



const EditableRole = styled.input.attrs(props => ({
    type: "text",
}))`
    ${sharedInputStyles};
    font-size: .8rem;
    width: 50%;

`

const EditableEmployer = styled.input.attrs(props => ({
    type: "text",
}))`
    ${sharedInputStyles};
    font-size: .7rem;
    margin-bottom: 8px;
`

const EditableDescription = styled.textarea.attrs(props => ({
    rows: "5",
    cols: "50"
}))`
    resize: none;
    ${sharedInputStyles};
    font-size: .5rem;

`

const EditableStyledDate = styled.input.attrs(props => ({
    type: "text",
}))`
    ${sharedInputStyles};
    font-size: .6rem;
    position: absolute;
    right: 0;
    top: 0;
    width: 50%;
    text-align: right;
`


export default CvPageMainItem;