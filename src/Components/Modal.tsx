import React from 'react'

type ModalProps = {
    onClose: () => void,
    children: React.ReactNode,
    title: string,
    description: string,
    isOpen: boolean,

}

const Modal:React.FC<ModalProps> = ({children, title, description, isOpen, onClose}) => {

    const onChange = (isOpen: boolean) => {
        if(isOpen){
            onClose();
        }
    }
    
       
    

    return (
        <div>
            {children}
        </div>
    )
}



export default Modal