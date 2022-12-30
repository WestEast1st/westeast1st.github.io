import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header
  header = (
    <div>
      <h1 className="main-heading">
       <Link to="/">{title}<StaticImage
        className="title-avatar"
        formats={["auto", "webp", "avif"]}
        src="../images/profile-pic.jpeg"
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
      /></Link>
      </h1>
      <Link className="header-link" to="/">Posts</Link> / 
      <Link className="header-link" to="/tags/">Tags</Link> / 
      <Link className="header-link" to="/README/">About Me</Link> / 
      <Link className="header-link" to="https://twitter.com/a_zara_n">Twitter</Link> / 
      <Link className="header-link" to="https://github.com/a-zara-n">GitHub</Link> / 
      <Link className="header-link" to="https://app.hackthebox.com/users/208274">HackTheBox</Link>
    </div>
  )


  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
