import * as React from "react"
import { Link } from "gatsby"
import ArticleIcon from "./articleIcon"

const PostTag = ({ postTagName }) => {
  
    return (
      <Link className="taglink" to={`/tags/${postTagName}`}><ArticleIcon tags={postTagName}/> {postTagName}</Link>
    )
  }
  
  export default PostTag
  