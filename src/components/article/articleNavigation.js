import * as React from "react"
import { Link } from "gatsby"
const ArticleNavigation = ({ prev, next }) => {

    return (
        <nav className="blog-post-nav">
            <ul
            style={{
                display: `flex`,
                flexWrap: `wrap`,
                justifyContent: `space-between`,
                listStyle: `none`,
                padding: 0,
            }}
            >
            <li>
                {prev && (
                <Link className="prev-link" to={prev.fields.slug} rel="prev">
                    ⬅️ {prev.frontmatter.title}
                </Link>
                )}
            </li>
            <li>
                {next && (
                <Link className="next-link" to={next.fields.slug} rel="next">
                    {next.frontmatter.title} ➡️
                </Link>
                )}
            </li>
            </ul>
        </nav>
    )
}

export default ArticleNavigation