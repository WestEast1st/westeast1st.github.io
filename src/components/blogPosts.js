import * as React from "react"
import { Link } from "gatsby"
import PostCard from "../components/postCard"

const BlogPosts = ({posts}) => {
    return (
        <ol style={{ listStyle: `none` }}>
            {posts.map(post => {
            if (post.frontmatter.title === "About Me") return
            const title = post.frontmatter.title || post.fields.slug

            return (
                <li key={post.fields.slug}>
                <PostCard post={post} title={title} />
                </li>
            )
            })}
        </ol>
  )
}
export default BlogPosts