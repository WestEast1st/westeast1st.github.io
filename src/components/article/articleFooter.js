import * as React from "react"
import Bio from "../common/bio"
import Share from "../common/share"
import PostTag from "../common/postTag"

const ArticleFooter = ({ tags, title, url, excerpt }) => {
    return (
        <footer>
          <small>Tags: {tags.map(tag => {
            return (
              <PostTag key={tag} postTagName={tag} />
            )
          })}</small>
          <Share 
            title={title}
            url={url}
            description={`${excerpt.slice(0, 70)}…`}
           />
          <Bio />
          <hr />
        </footer>
    )
}

export default ArticleFooter