import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import PostTag from "../common/postTag"
const Tags = () => {
    const data = useStaticQuery(graphql`
    query TagQuery {
        allMarkdownRemark(limit: 10){
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
                return (<PostTag key={tag.fieldValue} postTagName={tag.fieldValue} />)
            })}
            <Link to="/tags">and more...</Link>
        </p>
      )
}

export default Tags