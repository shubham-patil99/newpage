import * as React from "react"
import Image4 from "../images/overviewithree.webp"
import Image5 from "../images/landingZoom.webp"
import "./index.css"

const Content = () => 

(
    <>
    <div style={{background:`white`}}>
        <div style={{textAlign:`center`, marginTop:`5rem`, backgroundColor: 'white'}}> 

        <h1 style={{backgroundColor: 'white'}}> <span style={{color:"blue", backgroundColor: 'white' }} >Social</span> Learning</h1>
            <p className="contentp">
                 Promote collaboration and knowledge sharing. Create a culture of continuous learning and improvement across your organization. 
            </p>

            <img src={Image4} className="contentimg"/>   

        </div>
        
        <div className="contentdiv">
            
                <h1 style={{marginTop:`2rem`, marginLeft:`3rem`, marginRight:`8rem`, background:`white`}}>Live Training and automated recording with<span style={{color:`blue`, background:`white`}}>  Zoom Integration</span></h1>
                <p style={{marginTop:`2rem`, marginLeft:`3rem`, marginRight:`8rem`, background:`white`}}>KloudLearn integrates with zoom to provide seamless live classes, automated meeting recording and virtual Instructor-Led Training.</p>
                <button type="button" className="btn btn-outline-primary" style={{marginBottom:`2rem`, marginTop:`2rem`, marginLeft:`3rem`}}>Learn more</button>
        </div>
      
        <img src={Image5} className="contentimg1" alt="" />   
        
    
    </div> 
    
    </>

)    

export default Content