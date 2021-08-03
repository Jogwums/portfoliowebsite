import React from 'react';
import Header from 'react-bootstrap/ModalHeader';
import Jumbotron from 'react-bootstrap/Jumbotron'
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import FormControl from 'react-bootstrap/FormControl';

const HeaderDetails = () => {
    return (
    <Jumbotron class="bg-info m-5 p-5">
      <Header class="masthead text-center text-white">
            <div class="masthead-content">
                <div class="container px-5">
                    <h1 class="masthead-heading mb-0">My Personal Portfolio</h1>
                    <h2 class="masthead-subheading mb-0">FrontEnd Systems Developer</h2>
                    <a class="btn btn-warning btn-xl rounded-pill mt-5" href="#scroll">Learn More</a>
                </div>
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
