import React from 'react';
import Header from 'react-bootstrap/ModalHeader';
import Container from 'react-bootstrap/Container'


const HeaderDetails = ({type, text}) => {
    return (
    <div className="p-5 bg-primary">
      <Header className="masthead text-black">
            <div className="masthead-content md-ml-5 md-pl-5">
                <Container className="container-fluid md-px-5">
                    <h1 className="masthead-heading mb-0 text-white">Jonathan Ogwumike</h1>
                    <br />
                    <h6 className="masthead-subheading mb-0">{text}</h6>
                    <a className="btn btn-warning btn-xl rounded-pill mt-5" href="#scroll">{type}</a>
                </Container>
            </div>
        </Header>
    </div>
  )
}

export default HeaderDetails;
