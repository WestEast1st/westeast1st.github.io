import * as React from "react"
import { graphql } from "gatsby"

import Article from "../components/article/article"
import Seo from "../components/common/seo"
import Layout from "../components/common/layout"
import ArticleNavigation from "../components/article/articleNavigation"

const BlogPostTemplate = ({
  data: { previous, next, site, markdownRemark: post },
  location,
}) => {
  const siteTitle = site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <Article 
        className="article"
        title={post.frontmatter.title}
        date={post.frontmatter.date}
        createDate={post.frontmatter.createDate}
        tags={post.frontmatter.tags}
        tableOfContents={post.tableOfContents}
        content={post.html}
        url={`${location.origin}${post.fields.slug}`}
        excerpt={post.excerpt}
      />
      <ArticleNavigation 
        prev={previous}
        next={next}
      />
    </Layout>
  )
}

export const Head = ({ data: { markdownRemark: post } }) => {
  return (
    <Seo
      title={post.frontmatter.title}
      description={post.frontmatter.description || post.excerpt}
    />
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      fields {
        slug
      }
      id
      excerpt(pruneLength: 160)
      html
      tableOfContents(
        absolute: false
      )
      frontmatter {
        title
        createDate(formatString: "MMMM DD, YYYY")
        date(formatString: "MMMM DD, YYYY")
        description
        tags
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
