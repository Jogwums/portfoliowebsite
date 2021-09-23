import React from 'react'

import Navigation from '../components/navbar'
import TitleDetails from '../components/Title/'

const Da = ({type, text}) => {

    // const link = `<iframe width="1140" height="541.25" src="https://app.powerbi.com/reportEmbed?reportId=283c0606-8fa6-4cb4-b66d-236157b1a667&autoAuth=true&ctid=e28e2cde-f37f-45db-bace-a4b1dd277623&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXNvdXRoLWFmcmljYS1ub3J0aC1hLXByaW1hcnktcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQvIn0%3D" frameborder="0" allowFullScreen="true"></iframe>`

    return (
        <>
        <Navigation />
        <TitleDetails title="PowerBi Report" text="Report on World Population. Data Source:'Worldometer (www.Worldometers.info)'"/>
        <div className="pbi-dashboards">
            {/* eslint-disable-next-line */}
            <iframe 
                width="1140" 
                height="541.25" 
                src="https://app.powerbi.com/reportEmbed?reportId=283c0606-8fa6-4cb4-b66d-236157b1a667&autoAuth=true&ctid=e28e2cde-f37f-45db-bace-a4b1dd277623&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXNvdXRoLWFmcmljYS1ub3J0aC1hLXByaW1hcnktcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQvIn0%3D" 
                frameborder="0" 
                allowFullScreen="true">

            </iframe>
        </div>
        </>
    )
}

export default Da
