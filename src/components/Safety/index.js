import './index.css'
import { Tabs, Tab } from 'react-bootstrap';
import React, {useState} from 'react';



const Safety = () => {
    const [key, setKey] = useState('overview');

    return(
        
        <div id = "testimonialPage">
       
            <div id = "SafetyHeader">Trust and Safety</div>

            <div id = "Body">


                <div id = "subHeader">Your Trust and Safety are our Priority</div>


                <div className="profile-tabs">
                    <Tabs defaultActiveKey={"overview"}>

                        <Tab eventKey="overview" title="Overview" tabClassName="profile-tabitem">

                            <div id = "centerBlock">  
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                                 erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanc
                                 tus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidu
                                 nt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clit
                                 a kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr
                                 , sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et ju
                                 sto duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est 
                                <br/>
                                <br/>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquy
                                am erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata s
                                anctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor inv
                                idunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet c
                                lita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing eli
                                tr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et j
                                usto duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est 
                            </div>

                            <br/>

                        </Tab>

                        <Tab eventKey="clients" title="Clients" tabClassName="profile-tabitem">

                            <div id = "centerBlock">  
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam 
                                erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctu
                                s est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt u
                                t labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
                                 gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed di
                                 am nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo do
                                 lores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est 
                            </div>

                        </Tab>

                        <Tab eventKey="coaches" title="Coaches" tabClassName="profile-tabitem">

                            <div id = "centerBlock">  
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam 
                                erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctu
                                s est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt u
                                t labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
                                 gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed di
                                 am nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo d
                                 olores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est 
                            </div>

                        </Tab>
                        
                        <Tab eventKey="community" title="Community" tabClassName="profile-tabitem">

                            <div id = "centerBlock">  
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore 
                                et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita 
                                kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing 
                                elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et 
                                accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. 
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna 
                                aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea 
                                takimata sanctus est 
                            </div>

                            <br/>

                        </Tab>

                        <Tab eventKey="students" title="Students" tabClassName="profile-tabitem">

                            <div id = "centerBlock">  
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam 
                                erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata 
                                sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor 
                                invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet 
                                clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing e
                                litr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et 
                                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est 
                            </div>             

                        </Tab>

                    </Tabs>
                </div>

                <div id = "subHeader">Safety by Design: Safety in Mind</div>

                <div id = "safetyRow" className = "row d-flex justify-content-center">

                    <div id = "safetyCol" className = "col-sm-4 mx-auto">
                        <div id= "imagePlaceHolder">Image</div>
                    </div>
                    
                    <div id = "safetyCol" className = "col-sm-4 mx-auto">
                        <div id= "imagePlaceHolder">Image</div>
                    </div>
                    
                    <div id = "safetyCol" className = "col-sm-4 mx-auto">
                        <div id= "imagePlaceHolder">Image</div>
                    </div>


                </div>

            </div>

        </div>
    )

}

export default Safety;