import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Tags from "../components/tags"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Tags />
      <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          if (post.frontmatter.title === "About Me") return
          const title = post.frontmatter.title || post.fields.slug

          return (
            <li key={post.fields.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <small>{post.frontmatter.updateDate||post.frontmatter.createDate}</small>
                  <h2>
                    <Link to={post.fields.slug} itemProp="url">
                      <span itemProp="headline">📝 {title}</span>
                    </Link>
                  </h2>
                  <small>tags: {post.frontmatter.tags.map((tag) => {return (<Link className="taglink" key={tag} to={`/tags/${tag}`} >🏷️ {tag}</Link>)})}</small>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </section>
              </article>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogIndex

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="All posts" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { frontmatter: { createDate: DESC } }
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          createDate(formatString: "MMMM DD, YYYY")
          updateDate(formatString: "MMMM DD, YYYY")
          title
          tags
          description
        }
      }
    }
  }
`
