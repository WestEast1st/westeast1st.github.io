import React from "react"

// Components
import { Link, graphql } from "gatsby"
import Layout from "../components/common/layout"
import BlogPosts from "../components/posts/blogPosts"
import ArticleIcon from "../components/common/articleIcon"

const TagPosts = ({ pageContext, data }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { tag } = pageContext
  const { totalCount } = data.allMarkdownRemark
  const posts = data.allMarkdownRemark.nodes
  const icon = <ArticleIcon tags={tag}/>
  const tagHeader = (
    <h2 itemProp="headline">
      {totalCount}{totalCount === 1 ? " post" : " posts"} tagged with {icon} "{tag}"
    </h2>
  )
  return (
    <Layout location title={siteTitle}>
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          {tagHeader}
        </header>
        <BlogPosts posts={posts} />
        <Link className="blog-link" to="/">📝 TopPage</Link> / <Link className="blog-link" to="/tags">🏷️ Tags</Link>
      </article>
    </Layout>
  )
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