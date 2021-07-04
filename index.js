import React from "react"
import { Link } from "gatsby"

import Layout from "./components/layout"
const Indexpage = () =>{
  return(
    <Layout>
          <h1>Hello I am Devansh</h1>
      <h2>A student of CS engineering</h2>
      <p>Need a developer?<a href="/contact">Call me</a></p>
      <p>Need a developer?<Link to="/contact">Call me</Link></p>
    </Layout>
   
   
  )
}
export default Indexpage
