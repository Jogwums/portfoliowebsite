import React from 'react';
import Header from 'react-bootstrap/ModalHeader';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import FormControl from 'react-bootstrap/FormControl';

const HeaderDetails = () => {
    return (
    <Jumbotron className="p-5">
      <Header className="masthead text-black">
            <div className="masthead-content md-ml-5 md-pl-5">
                <Container className="px-5">
                    <h1 className="masthead-heading mb-0">Jonathan Ogwumike</h1>
                    <br />
                    <h6 className="masthead-subheading mb-0">Front-End Systems Developer</h6>
                    <a className="btn btn-warning btn-xl rounded-pill mt-5" href="#scroll">Projects</a>
                </Container>
            </div>
            <div className="bg-circle-1 bg-circle"></div>
            <div className="bg-circle-2 bg-circle"></div>
            <div className="bg-circle-3 bg-circle"></div>
            <div className="bg-circle-4 bg-circle"></div>
        </Header>
    </Jumbotron>
  )
}

export default HeaderDetails;
