import * as React from "react"
import { graphql } from "gatsby"

import Bio from "../components/common/bio"
import Layout from "../components/common/layout"
import Seo from "../components/common/seo"
import Tags from "../components/posts/tags"
import BlogPosts from "../components/posts/blogPosts"

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
        <BlogPosts posts={posts} />
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
          date(formatString: "MMMM DD, YYYY")
          title
          tags
          description
        }
        excerpt
      }
    }
  }
`
