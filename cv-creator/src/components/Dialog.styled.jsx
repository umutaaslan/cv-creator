import { Dialog } from "radix-ui";
import { useState } from "react";
import styled from "styled-components";

const DialogElement = ({title, children, open, setOpen}) => {
    
    return (
	<Dialog.Root
        open={open}
        onOpenChange={setOpen}
        modal="true"
    >
		<Dialog.Trigger asChild><StyledAddItemButton>+ Add Item +</StyledAddItemButton></Dialog.Trigger>
		<Dialog.Portal>
			<StyledDialogOverlay />
			<StyledDialogContent>
                <Dialog.Description></Dialog.Description>
				<StyledDialogTitle>Add a new item</StyledDialogTitle>
				<Dialog.Close asChild><CloseButton><img src="/closeIcon.svg" alt="close" style={{height: 100 + "%", width: 100 + "%"}}/></CloseButton></Dialog.Close>
                {children}
			</StyledDialogContent>
		</Dialog.Portal>
	</Dialog.Root>
)}
 

const StyledDialogOverlay = styled(Dialog.Overlay)`
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    inset: 0;

`

const StyledDialogTitle = styled(Dialog.Title)`
    

`

const StyledAddItemButton = styled.button`
    background-color: #4CAF50;
    border: none;
    color: white;
    font-size: 1.2rem;
    font-weight: 500;
    border-radius: 4px;
    padding: 6px 8px;
    margin: 20px 0 8px 24px;
    cursor: pointer;
    transition: 0.1s;

    &:hover {
        scale: 1.1;
    }
`

const StyledDialogContent = styled(Dialog.Content)`
width: max-content;
height: max-content;
padding: 12px 24px;
padding-right: 144px;
position: fixed;
background-color: #1e1d1d;
color: white;
top: 0;
right: 0;
bottom: 0;
left: 0;
margin: auto;
display: flex;
flex-direction: column;
border-radius: 6px;
`

const CloseButton = styled.button`
width: 48px;
height: 48px;
background: none;
border-radius: 50%;
border: none;
position: absolute;
top: 4px;
right: 4px;
filter: invert(100%) sepia(25%) saturate(123%) hue-rotate(235deg) brightness(117%) contrast(100%);

&:hover{
    border: 1px solid blue;
}
`
export default DialogElement;