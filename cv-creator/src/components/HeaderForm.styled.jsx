import styled from "styled-components";
import DialogElement from "./Dialog.styled";
import SubItem from "./SubItem.styled"
import { use, useState } from "react";
import { v4 as uuidv4 } from 'uuid';


const HeaderForm = ({cvInfo, setCvInfo}) => {
    const [open, setOpen] = useState(false);

    const [subItems, setSubItems] = useState([]);
    const [itemTitle, setItemTitle] = useState("")


    const handleAddSubItem = () => {
        const newSubItems = [...subItems];
        const newSubItem = {
            id: uuidv4(),
            title: "",
            detail: ""
        }
        setSubItems([...newSubItems, newSubItem]);
    }

    const handleAddItem = () => {
        const newItem = {
            title: itemTitle,
            subItems: subItems,
            id: uuidv4(),
            isEditable: false
        }
        const newCvInfo = {
            ...cvInfo,
            headerItems: [...cvInfo.headerItems, newItem]
        }
        setCvInfo(newCvInfo);
        setOpen(false);
        
    }

    const handleItemTitleChange = (e) => {
        setItemTitle(e.target.value);
    }


    const handleEdit = (e) => {
        const itemId = e.target.getAttribute("data-id");
        const resultHeaderItems = cvInfo.headerItems.map(el => {
            if(el.id === itemId){
                let newEl;
                if(el.isEditable){
                    newEl = {...el, isEditable: false};
                }
                else{
                    console.log(el.isEditable)
                    newEl = {...el, isEditable: true};
                }
                return newEl;
            }
            else{
                return el;
            }
        })
        const resultCvInfo = {...cvInfo, headerItems: resultHeaderItems};
        setCvInfo(resultCvInfo);

    }

    
    return ( 
        <Wrapper>
            <ModifierWrapper>
            {cvInfo.headerItems.map(item => {
                return (
                    <ModifierItem key={item.id}>
                        <span>{item.title}</span>
                        <EditIcon src="../../public/editIcon.svg" alt="EDIT" data-id={item.id} onClick={(e) => handleEdit(e)}/>
                    </ModifierItem>
                )
            })}
            </ModifierWrapper>
            <DialogElement open={open} setOpen={setOpen}>
                <label style={{marginBottom: 24 + "px"}}>
                    <h2>Title</h2>
                    <input type="text" name="title" value={itemTitle} onChange={(e) => handleItemTitleChange(e)}/>
                 </label>
                 
                 
                {subItems.map((item, index) => {
                    return <SubItem key={item.id} index={index} item={item} subItems={subItems} setSubItems={setSubItems} />
                })}
                <button onClick={handleAddItem}>ADD</button>
                <AddSubItemButton onClick={handleAddSubItem}>+ Sub Item</AddSubItemButton>

            </DialogElement>
        </Wrapper>
     );
}
 

const Wrapper = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
`

const ModifierWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const ModifierItem = styled.div`
    border: 1px solid blue;
    font-size: 1.5rem;
    font-weight: 500;
    padding: 8px 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const AddSubItemButton = styled.button`
    position: absolute;
    top: 64px;
    right: 4px;
    width: 48px;
    height: 96px;
`


const EditIcon = styled.img`
    scale: 1.5;
    display: inline-block;
    transition: 0.2s;

    &:hover{
        transform: rotate(30deg);
        cursor: pointer;
    }
`

export default HeaderForm;