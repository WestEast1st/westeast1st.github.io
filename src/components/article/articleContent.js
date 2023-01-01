import * as React from "react"


const ArticleContent = ({ content, className }) => {
    return (
        <section
            className={className}
            dangerouslySetInnerHTML={{ __html: content }}
            itemProp="articleBody"
        />
    )
}

export default ArticleContent