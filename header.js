import { Link,graphql,useStaticQuery } from "gatsby"
import React from "react"
import * as headerStyles from './header.module.scss'
const Header= () =>{
    const data= useStaticQuery(graphql`
    query{
        site{
            siteMetadata{
            title
        }
      }
    }`)
    return(
        <header className={headerStyles.header}>
            <h1>
                <Link className= {headerStyles.title}to="/" >
                {data.site.siteMetadata.title}
                </Link>
            </h1>
            <nav>
                <ul  className={headerStyles.navlist}> 
                    <li>
                        <Link className={headerStyles.navitem} activeClassName={headerStyles.activenavitem} to="/">Home</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navitem}  activeClassName={headerStyles.activenavitem} to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navitem} activeClassName={headerStyles.activenavitem} to="/about">About</Link>
                    </li>
                    <li>
                          <Link className={headerStyles.navitem} activeClassName={headerStyles.activenavitem}  to="/blog">blog</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header