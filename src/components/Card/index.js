import React from 'react';

const Card = ({image, text, link}) => {
    return (
    <>
    <section id="scroll">
            <div class="container px-5">
                <div class="row gx-5 align-items-center">
                    <div class="col-lg-6 order-lg-2">
                        <a href={link} target="_blank" rel="noreferrer">
                        <div class="p-5"><img class="img-fluid rounded-circle" src={image} alt="..." /></div>
                        </a>
                    </div>
                    <div class="col-lg-6 order-lg-1">
                        <div class="p-5">
                            <h2 class="display-4">For those who love {text}</h2>
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
