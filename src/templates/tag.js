import React from "react"
import PropTypes from "prop-types"

// Components
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"


const TagPosts = ({ pageContext, data }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with 🏷️ "${tag}"`
  return (
    <Layout location title={siteTitle}>
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{tagHeader}</h1>
        </header>
        <ol style={{ listStyle: `none` }}>
            {edges.map(({ node }) => {
                const { slug } = node.fields
                const { title } = node.frontmatter
                return (
                    <li key={slug}>
                    <article
                        className="post-list-item"
                        itemScope
                        itemType="http://schema.org/Article"
                    >
                        <header>
                        <small>{node.frontmatter.updateDate || node.frontmatter.createDate}</small>
                        <h2>
                            <Link to={slug} itemProp="url">
                            <span itemProp="headline">📝 {title}</span>
                            </Link>
                        </h2>
                        <small>tags: {node.frontmatter.tags.map((tag) => {return (<Link key={tag} to={`/tags/${tag}`} className="taglink">🏷️ {tag}</Link>)})}</small>

                        </header>
                        <section>
                        <p
                            dangerouslySetInnerHTML={{
                            __html: node.excerpt || "aaaa",
                            }}
                            itemProp="description"
                        />
                        </section>
                    </article>
                    </li>
                )
            })}
            <Link className="blog-link" to="/">📝 TopPage</Link> / <Link className="blog-link" to="/tags">🏷️ Tags</Link>
        </ol>
      </article>
    </Layout>
  )
}

TagPosts.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default TagPosts

export const pageQuery = graphql`
  query($tag: String) {
    site {
        siteMetadata {
            title
        }
    }
    allMarkdownRemark(
      limit: 2000
      sort: {frontmatter: {createDate: DESC}}
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            createDate(formatString: "MMMM DD, YYYY")
            updateDate(formatString: "MMMM DD, YYYY")
            title
            tags
          }
          excerpt
        }
      }
    }
  }
`