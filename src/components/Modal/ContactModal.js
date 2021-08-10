import React, { useState } from 'react'

import Form from './Form'

// import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Nav from 'react-bootstrap/Nav';
// import ModalDialog from 'react-bootstrap/ModalDialog'
// import ModalHeader from 'react-bootstrap/ModalHeader'
// import ModalBody from 'react-bootstrap/ModalBody'
// import ModalFooter from 'react-bootstrap/ModalFooter'

const ContactModal = ({text}) => {

    const [lgShow, setLgShow] = useState(false);


    return (
        <>  
            <div>
            <Nav.Link variant="dark" onClick={() => setLgShow(true)}>
                {text}
            </Nav.Link> 
            </div>
        <Modal
            size="lg"
            show={lgShow}
            onHide={() => setLgShow(false)}
            aria-labelledby="Contact Form"
        >
            <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
                Contact Form
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form />
            </Modal.Body>
      </Modal>
        

        </>
    )
}

export default ContactModal
