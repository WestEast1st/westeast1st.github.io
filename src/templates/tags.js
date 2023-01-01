import React from "react"

// Components
import { Link, graphql } from "gatsby"
import Layout from "../components/common/layout"
import ArticleIcon from "../components/common/articleIcon"

const Tags = ({ pageContext, data }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  
  data.allMarkdownRemark.group.sort((groupA, groupB) => {
    return groupB.totalCount - groupA.totalCount
  })

  const tagHeader = `All Tags 🏷️`
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
            {data.allMarkdownRemark.group.map(({ fieldValue, totalCount }) => {
              const taglink = `/tags/${fieldValue}/`
              return (<li key={fieldValue}>
                <article
                    className="post-list-item"
                    itemScope
                    itemType="http://schema.org/Article"
                >
                    <header>
                    <h2>
                        <Link to={taglink} itemProp="url">
                        <span itemProp="headline"><ArticleIcon tags={fieldValue}/> {fieldValue} : {totalCount}</span>
                        </Link>
                    </h2>
                    </header>
                </article>
                </li>)
            })}
            <Link className="blog-link" to="/">📝 TopPage</Link>
        </ol>
      </article>
    </Layout>
  )
}
export default Tags

export const pageQuery = graphql`
  {
    site {
        siteMetadata {
            title
        }
    }
    allMarkdownRemark(
      limit: 2000
      sort: {frontmatter: {createDate: DESC}}
    ) {
      group(field: {frontmatter: {tags: SELECT}}){
        totalCount
        fieldValue
      }
    }
  }
`