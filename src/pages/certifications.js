import React from 'react'

import Navigation from '../components/navbar'
import TitleDetails from '../components/Title/'



const Certs = ({type, text}) => {

    return (
        <>
        <Navigation />
        <TitleDetails title="Certifications" text=""/>
        <div className="card-deck bg-white">
         <iframe
            loading='lazy'
            title='Certificate '
            src="http://credentials.corporatefinanceinstitute.com/embed/2506cb31-d02f-4415-812f-0146f242caa5"
            width="800"
            height="600"
            frameborder="0"
            allowfullscreen>
        </iframe>
        </div>
        </>
    )
}

export default Certs




