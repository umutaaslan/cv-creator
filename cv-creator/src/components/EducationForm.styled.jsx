import styled from "styled-components";
import DialogElement from "./Dialog.styled";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import EducationSubItem from "./EducationSubItem.styled"


const EducationForm = ({cvInfo, setCvInfo}) => {
    const [open, setOpen] = useState(false);

    const [subItems, setSubItems] = useState([]);
    const [itemTitle, setItemTitle] = useState("");


    const handleAddSubItem = () => {
        const newSubItems = [...subItems];
        const newSubItem = {
            id: uuidv4(),
            role: '', 
            employer: '', 
            description: '', 
            date: ''
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
            main: [...cvInfo.main, newItem]
        }
        setCvInfo(newCvInfo);
        setSubItems([]);
        setOpen(false);
    }

    const handleItemTitleChange = (e) => {
        setItemTitle(e.target.value);
    }

    const toggleEditability = (e) => {
        const itemId = e.target.getAttribute("data-id");
        const resultMain = cvInfo.main.map(el => {
            if(el.id === itemId){
                let newEl;
                if(el.isEditable){
                    newEl = {...el, isEditable: false};
                }
                else{
                    newEl = {...el, isEditable: true};
                }
                return newEl;
            }
            else{
                return el;
            }
        })
        const resultCvInfo = {...cvInfo, main: resultMain};
        setCvInfo(resultCvInfo);
    }


    const handleEdit = (e) => {
       toggleEditability(e);
    }

    const handleSave = (e) => {
        toggleEditability(e);
    }
    
    const handleDeleteItem = (e) => {
        const itemId = e.target.getAttribute("data-id");
        const newMain = cvInfo.main.filter(el => el.id !== itemId);
        setCvInfo({...cvInfo, main: newMain});
    }

    return ( 
        <Wrapper>
            <DialogElement open={open} setOpen={setOpen}>
                <label style={{marginBottom: 24 + "px"}}>
                    <h2>Title</h2>
                    <input type="text" name="title" value={itemTitle} onChange={(e) => handleItemTitleChange(e)}/>
                 </label>
                 
                 
                {subItems.map((item, index) => {
                    return <EducationSubItem key={item.id} index={index} item={item} subItems={subItems} setSubItems={setSubItems} />
                })}
                <button onClick={handleAddItem}>ADD</button>
                <AddSubItemButton onClick={handleAddSubItem}>+ Sub Item</AddSubItemButton>

            </DialogElement>

            <ModifierWrapper>
            {cvInfo.main.map(item => {
                return (
                    <ModifierItem key={item.id}>
                        <span>{item.title}</span>
                        <DeleteIcon src="/delete.svg" data-id={item.id} onClick={(e) => handleDeleteItem(e)} />
                        {!item.isEditable ? <EditIcon src="/editIcon.svg" alt="EDIT" data-id={item.id} onClick={(e) => handleEdit(e)}/> 
                        :  <SaveIcon src="/saveIcon.svg" alt="SAVE" data-id={item.id} onClick={(e) => handleSave(e)}/>}
                       
                    </ModifierItem>
                )
            })}
            </ModifierWrapper>
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
    border-bottom: 1px dotted blue;
    font-size: 1.5rem;
    font-weight: 500;
    padding: 16px 24px 16px 24px;
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

const SaveIcon = styled.img`
    scale: 1.5;
    display: inline-block;
    transition: 0.2s;
    cursor: pointer;

    &:hover{
        scale: 1.7;
    }
`
 
const DeleteIcon = styled.img`
    scale: 1.5;
    display: inline-block;
    transition: 0.2s;
    cursor: pointer;
    margin-left: auto;
    margin-right: 36px;

    &:hover{
        scale: 1.7;
    }
`

export default EducationForm;