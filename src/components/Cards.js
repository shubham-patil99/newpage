import * as React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import Image2 from "../images/image1.jpg"
import "./index.css"


const Cards = () => 

(

<div>
<div className="cards" >


<div style={{ marginTop:`4rem` }}>
<h1  className="cardh1" style={{ textAlign:`center`, marginTop:`4rem` }}>Find the perfect plan for <br></br> your <span style={{color:`blue`}}>Training needs</span></h1>
</div>

<div style={{marginTop:`6rem`}}>
<div className="card1" >
  <img src={Image2} class="card-img-top" alt="" />
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
</div>
</div>

<div className="card2">
  <img src={Image2} class="card-img-top" alt="" />
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
</div>
</div>

<div className="card3">
  <img src={Image2} className="card-img-top" alt="" />
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
</div>
</div>
</div>
<div style={{ textAlign:`center`, marginTop:`2rem` }}><button type="button" className="btn btn-outline-primary" >Learn more</button></div>
</div>
</div>



)

export default Cards