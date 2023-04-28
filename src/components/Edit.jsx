import React, {useState, useEffect} from "react";
import Modal from './Modal.js';

function Edit({title, body, updateEdit}) {
    const [isModal, setModal] = useState(false);
    const [titleValue, setTitleValue] = useState('')
    const [contentValue, setContentValue] = useState('')
    const [updateClick, setUpdateClick] = useState(0)

    const handleEditChange = () => {
        setUpdateClick(updateClick + 1)
        updateEdit(titleValue, contentValue, updateClick)
    }

    return (
        <>
            <button onClick={() => setModal(true)}>Edit</button>
            <Modal
                isVisible={isModal}
                title=<textarea className="addModal-title" onChange={(e) => {
                    setTitleValue(e.target.value)
                }} placeholder="Your Title">{title}</textarea>

                content=<textarea className="addModal-content" onChange={(e) => {
                    setContentValue(e.target.value)
                }} placeholder="Your text" >{body}</textarea>
                footer={<button>Cancel</button>}
                onClose={() => setModal(false)}

                create = {<button className="button" onClick={handleEditChange}>Update</button>}
            />
        </>
    )
}

export default Edit;