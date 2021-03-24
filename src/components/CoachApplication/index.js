import React, { useState } from 'react';
import "./index.css";
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import FirstPage from "./FirstPage/";

const CoachApplication = () => {
    const [area, setArea] = useState(<FirstPage/>)
    return( 
        
        <div id= "CoachAppPage">
            <div  id = "headerMessage" style = {{paddingTop:"50px", height: "80px"}}className = "col-sm-5 mx-auto">
                <h1>Apply and Start Your Health
                    <br/>and Wellness Coaching Journey with EvolvU!</h1>
            </div>

            {area} 
        </div>
    )

}

export default CoachApplication;