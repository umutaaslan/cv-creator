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
            id: uuidv4()
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

    
    return ( 
        <Wrapper>
            <p>sagjnkadn</p>
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
const AddSubItemButton = styled.button`
    position: absolute;
    top: 64px;
    right: 4px;
    width: 48px;
    height: 96px;
`


export default HeaderForm;