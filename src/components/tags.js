import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const Tags = () => {
    const data = useStaticQuery(graphql`
    query TagQuery {
        allMarkdownRemark{
          group(field: {frontmatter: {tags: SELECT}}){
            totalCount
            fieldValue
          }
        }
      }
    `)

    data.allMarkdownRemark.group.sort((groupA, groupB) => {
        return groupB.totalCount - groupA.totalCount
    })

    return (
        <p>
            TagList: 
            {data.allMarkdownRemark.group.map(tag => {
                return (<Link className="taglink" key={tag.fieldValue} to={`/tags/${tag.fieldValue}`}>{tag.fieldValue}</Link>)
            })}
        </p>
      )
}

export default Tags