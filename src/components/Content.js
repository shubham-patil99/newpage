import * as React from "react"
import "./index.css"
import { StaticImage } from "gatsby-plugin-image"

const Content = () => 

(
    <>
    <div className="social1">
        <div className="social2"> 

        <h1 className="socialh1"> <span style={{color:"blue", backgroundColor: 'white' }} >Social</span> Learning</h1>
            <p className="contentp">
                 Promote collaboration and knowledge sharing. Create a culture of continuous learning and improvement across your organization. 
            </p>

     <StaticImage
      src="../images/overviewithree.webp"
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      className="headimg"
      className="contentimg"
      />   

        </div>
        
        <div className="contentdiv">
            
                <h1 className="contenth1">Live Training and automated recording with<span style={{color:`blue`, backgroundColor: `cornsilk`}}>  Zoom Integration</span></h1>
                <p className="contentp2">KloudLearn integrates with zoom to provide seamless live classes, automated meeting recording and virtual Instructor-Led Training.</p>
                <button type="button" className="btn btn-outline-primary" style={{marginBottom:`2rem`, marginTop:`2rem`, marginLeft:`3rem`}}>Learn more</button>
        </div>
      
    <StaticImage
      src="../images/landingZoom.webp"
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      className="contentimg1"
      />   
        
    
    </div> 
    
    </>

)    

export default Content