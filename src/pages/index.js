import * as React from "react"
import { Link } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css"
import Seo from "../components/seo"
import Occordion from "../components/Accordion"
import Cards from "../components/Cards"
import Head from "../components/Head"
import Content from "../components/Content"
import Form from "../components/Form"


const IndexPage = () => (
  <div className="full">
    <Seo title="Home" />

     <Head />
     <Occordion />
     <Cards />
     <Content />
     <Form />

 </div>
)

export default IndexPage
