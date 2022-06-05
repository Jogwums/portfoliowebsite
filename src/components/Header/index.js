import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'


const HeaderDetails = ({main, type, text}) => {
    return (
    // <div className="px-5 mx-auto bg-primary">
    //   <Header className="masthead text-black">
    //         <div className="masthead-content md-ml-5 md-pl-5">
    //             <Container className="container-fluid md-px-5">
    //                 <h1 className="masthead-heading mb-0 text-white fst-italic">{main}</h1>
    //                 <br />
    //                 <h6 className="masthead-subheading mb-0">{text}</h6>
    //                 <a className="btn btn-warning btn-xl rounded-pill mt-5" href="#scroll">{type}</a>
    //             </Container>
    //         </div>
    //     </Header>
    // </div>
    <Jumbotron fluid className='px-5 mx-auto bg-primary'>
      <Container >
        <h1>{type}</h1>
        <p>
               
        </p>
        
      </Container>
    </Jumbotron>
  )
}

export default HeaderDetails;
