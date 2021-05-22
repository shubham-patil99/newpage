import * as React from "react"
import "./index.css"
import { StaticImage } from "gatsby-plugin-image"

const Head = () => 

(


<div className="main" style={{backgroundColor:`#e8f4f6`}}>

 <div className="head1">
    <h1 className="h1head">Platform Overview</h1>

    <p className="phead1" >KloudLearn provides a powerful LMS for employee onboarding, training, and <br />continuous development.</p>
</div>

<StaticImage
      src="../images/overviewione.webp"
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      className="headimg"
      
    />

</div>


)

export default Head
//<img src={Image3} className="headimg" alt="" />