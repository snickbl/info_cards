import React, {useEffect, useState} from "react";
import Modal from "./Modal";

function AddArticle({updateData}) {
    const [isModal, setModal] = useState(false);
    const [titleValue, setTitleValue] = useState('')
    const [contentValue, setContentValue] = useState('')
    const [createClick, setCreateClick] = useState(0)

    useEffect(() => {
        handleTitleChange()
    }, [createClick])

    const handleTitleChange = () => {
        updateData(titleValue, contentValue, createClick)
    }

    return (
        <>
            <button className="button" onClick={() => setModal(true)}>Add Article</button>
            <Modal
                isVisible={isModal}

                title=<textarea className="addModal-title" onChange={(e) => {
                    setTitleValue(e.target.value)
                }} placeholder="Your Title"></textarea>

                text=<textarea className="addModal-content" onChange={(e) => {
                    setContentValue(e.target.value)
                }} placeholder="Your text" ></textarea>

                footer={<button>Cancel</button>}

                onClose={() => setModal(false)}

                create = {<button className="button" onClick={() => {
                    setCreateClick(createClick + 1)
                }}>Create</button>}
            />

        </>
    )
}

export default AddArticle;