import * as React from "react"

import ArticleHeader from "./articleHeader"
import ArticleFooter from "./articleFooter"
import ArticleContent from "./articleContent"
import TableOfContents from "./tableOfContents"

const Article = ({ title, date, createDate, tags, tableOfContents,  content, url, excerpt, className }) => {
    return (
        <article
            className={className ? `blog-post ${className}` : "blog-post"}
            itemScope
            itemType="http://schema.org/Article"
        >
            <ArticleHeader 
                title={title}
                date={date}
                createDate={createDate}
                tags={tags}
            />
            {
                !tags.includes("letter") ? <br /> : <TableOfContents 
                    html={tableOfContents} 
                />
            }
            
            <ArticleContent className={!tags.includes("letter") ? "letter-content" : "blog-content"} content={content} />
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