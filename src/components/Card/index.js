import React from 'react';

const Card = ({image, text, link}) => {
    return (
    <>
    <section id="scroll">
            <div className="container px-5">
                <div className="row gx-5 align-items-center">
                    <div className="col-lg-6 order-lg-2">
                        <a href={link} target="_blank" rel="noreferrer">
                        <div className="p-5">
                            <img className="img-fluid rounded-circle" src={image} alt="..." /></div>
                        </a>
                    </div>
                    <div className="col-lg-6 order-lg-1">
                        <div className="p-5">
                            <h2 className="hero">For those who love {text}</h2>
                            <p>Click the image to view more, you'll be redirected to the project website.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Card;
