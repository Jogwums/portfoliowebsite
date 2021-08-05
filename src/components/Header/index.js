import React from 'react';
import Header from 'react-bootstrap/ModalHeader';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import FormControl from 'react-bootstrap/FormControl';

const HeaderDetails = () => {
    return (
    <Jumbotron class="m-5 p-5 text-center">
      <Header class="masthead text-center text-white">
            <div class="masthead-content">
                <Container class="px-5">
                    <h1 class="masthead-heading mb-0">Jonathan Ogwumike</h1>
                    <br />
                    <h6 class="masthead-subheading mb-0">Front-End Systems Developer</h6>
                    <a class="btn btn-warning btn-xl rounded-pill mt-5" href="#scroll">Projects</a>
                </Container>
            </div>
            <div class="bg-circle-1 bg-circle"></div>
            <div class="bg-circle-2 bg-circle"></div>
            <div class="bg-circle-3 bg-circle"></div>
            <div class="bg-circle-4 bg-circle"></div>
        </Header>
    </Jumbotron>
  )
}

export default HeaderDetails;
