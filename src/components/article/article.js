import * as React from "react"

import ArticleHeader from "./articleHeader"
import ArticleFooter from "./articleFooter"
import ArticleContent from "./articleContent"
import TableOfContents from "./tableOfContents"

const Article = ({ title, date, createDate, tags, tableOfContents,  content, url, excerpt }) => {
    return (
        <article
            className="blog-post"
            itemScope
            itemType="http://schema.org/Article"
        >
            <ArticleHeader 
                title={title}
                date={date}
                createDate={createDate}
                tags={tags}
            />
            <TableOfContents 
                html={tableOfContents} 
            />
            <ArticleContent content={content} />
            <hr />
            <ArticleFooter
                tags={tags}
                title={title}
                url={url}
                excerpt={excerpt}
            />
        </article>
    )
}

export default Article