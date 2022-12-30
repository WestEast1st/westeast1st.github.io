import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  const twitterIcon = (<StaticImage
    className="tool-icon"
    formats={["auto", "webp", "avif"]}
    src="../images/twitter.png"
    alt="Profile picture"
  />)

  const githubIcon = (<StaticImage
    className="tool-icon"
    formats={["auto", "webp", "avif"]}
    src="../images/github.png"
    alt="Profile picture"
  />)

  const hacktheboxIcon = (<StaticImage
    className="tool-icon"
    formats={["auto", "webp", "avif"]}
    src="../images/hackthebox.png"
    alt="Profile picture"
  />)

  const rssIcon = (<StaticImage
    className="tool-icon"
    formats={["auto", "webp", "avif"]}
    src="../images/rss.png"
    alt="Profile picture"
  />)
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
      <Link className="header-link" to="/">📝 Posts</Link> / 
      <Link className="header-link" to="/tags/">🏷️ Tags</Link> / 
      <Link className="header-link" to="/README/">👤 About Me</Link> <br/>
      <Link className="header-link" target="_blank" to="https://twitter.com/a_zara_n">{twitterIcon} Twitter</Link> / 
      <Link className="header-link" target="_blank" to="https://github.com/a-zara-n">{githubIcon} GitHub</Link> / 
      <Link className="header-link" target="_blank" to="https://app.hackthebox.com/users/208274">{hacktheboxIcon} HackTheBox</Link> / 
      <a className="header-link" target="_blank" href="/rss.xml">{rssIcon} RSS</a>
    </div>
  )


  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        © 2022 misc.azara.jp All Rights Reserved. | 
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a> | <b><Link to="/privacy">プライバシーポリシー</Link></b>
      </footer>
    </div>
  )
}

export default Layout
