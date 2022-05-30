import React from 'react'

import Navigation from '../components/navbar'
import TitleDetails from '../components/Title/'
import Card from '../components/Card'

// images 
import image1 from '../assets/img/pbiprojects/pbi1.JPG'
import image2 from '../assets/img/pbiprojects/pbi2.JPG'
import image3 from '../assets/img/pbiprojects/pbi3.JPG'
import image4 from '../assets/img/pbiprojects/pbi4.JPG'

const Da = ({type, text}) => {

    return (
        <>
        <Navigation />
        <TitleDetails title="Power BI Reports" text=""/>
        <div className="card-deck">
        <Card image={image1} 
                        text={"Report on World Covid-19 Outbreak"} 
                        text2={"You will be redirected to the report"}
                        link={"https://app.powerbi.com/reportEmbed?reportId=131418d5-442b-488a-a088-3913e1255a84&autoAuth=true&ctid=e28e2cde-f37f-45db-bace-a4b1dd277623&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXNvdXRoLWFmcmljYS1ub3J0aC1hLXByaW1hcnktcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQvIn0%3D"} />

        <Card
            image={image3}
            text={"World Population Report"}
            text2={"You will be redirected to the report"}
            link={"https://app.powerbi.com/reportEmbed?reportId=283c0606-8fa6-4cb4-b66d-236157b1a667&autoAuth=true&ctid=e28e2cde-f37f-45db-bace-a4b1dd277623&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXNvdXRoLWFmcmljYS1ub3J0aC1hLXByaW1hcnktcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQvIn0%3D"}
        />
        <Card
            image={image2}
            text={"Plane Crashes Worldwide"}
            text2={"You will be redirected to the report"}
            link={"https://app.powerbi.com/reportEmbed?reportId=45bbd2da-2fef-4fc2-9c9e-f6af8da5328e&autoAuth=true&ctid=e28e2cde-f37f-45db-bace-a4b1dd277623&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXNvdXRoLWFmcmljYS1ub3J0aC1hLXByaW1hcnktcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQvIn0%3D"}
        />
        <Card
        image={image4}
        text={"Car Sales Analysis"}
        text2={"Report shows Client records and Inventory"}
         link={"https://app.powerbi.com/view?r=eyJrIjoiNzBjYTVlYzEtZDExMS00ZmRiLTg2MTQtMjY1ZGU1YWY4YTg5IiwidCI6ImUyOGUyY2RlLWYzN2YtNDVkYi1iYWNlLWE0YjFkZDI3NzYyMyJ9"}
         />
        </div>
        </>
    )
}

export default Da
