import * as React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import "./index.css"


const Form = () => 

(
    <div  className="formdiv1" >
        <div className="formdiv2" >
            <div className="formdiv3" >
                <h1 className="formh1" >Schedule for a <span style={{color:`blue`}}>KloudLearn</span> Demo</h1>
                <p className="formp" >See how KloudLearn can help transform your enterprise training and provide an engaging learning experience.</p>


            </div>


            <form className="form">
            <div class="mb-3">
                <input type="text" placeholder="Your Name" className="form-control" id="exampleName1" aria-describedby="emailHelp"/>
            </div>

            <div class="mb-3">
                <input type="email" placeholder="Your Email Id" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>

            <div class="mb-3">
                <input type="textArea" placeholder="Type your massage"  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{height:`6rem`}}/>
            </div>

            <button type="submit" className="btn btn-primary">Send Massage</button>
            </form>
        </div>
</div>


)

export default Form