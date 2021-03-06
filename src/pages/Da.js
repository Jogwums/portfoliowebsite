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
                        link={"https://app.powerbi.com/view?r=eyJrIjoiMWNkYzJkOGYtNDlhZS00NTVjLWEyNTgtYzNiMmUyZDEzNGE5IiwidCI6ImUyOGUyY2RlLWYzN2YtNDVkYi1iYWNlLWE0YjFkZDI3NzYyMyJ9"} />

        <Card
            image={image3}
            text={"World Population Report"}
            text2={"You will be redirected to the report"}
            link={"https://app.powerbi.com/view?r=eyJrIjoiMTU4NGU1MjQtMmUxMy00NzNhLTgxMGYtMzVhZmVhNWZmMzRlIiwidCI6ImUyOGUyY2RlLWYzN2YtNDVkYi1iYWNlLWE0YjFkZDI3NzYyMyJ9"}
        />
        <Card
            image={image2}
            text={"Plane Crashes Worldwide"}
            text2={"You will be redirected to the report"}
            link={"https://app.powerbi.com/view?r=eyJrIjoiMjJmNTcxNmMtOGE1NS00NzhjLTg5MmMtZGEwYzE3NjIxNTA5IiwidCI6ImUyOGUyY2RlLWYzN2YtNDVkYi1iYWNlLWE0YjFkZDI3NzYyMyJ9"}
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
