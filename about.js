import React from 'react'
import {Link} from "gatsby"
import Layout from './components/layout'
 const aboutpage = ()=>
{
    return(
       <Layout>
            <h1>About</h1>
            <p>I am learning Gatsby</p>
            <p>conact me ? :D<Link to="/contact">Here</Link></p>
       </Layout>
    )
}
export default aboutpage