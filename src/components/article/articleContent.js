import * as React from "react"


const ArticleContent = ({ content }) => {
    return (
        <section
            dangerouslySetInnerHTML={{ __html: content }}
            itemProp="articleBody"
        />
    )
}

export default ArticleContent