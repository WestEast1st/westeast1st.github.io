import * as React from "react"

import ArticleIcon from "../common/articleIcon"
import PostTag from "../common/postTag"

const ArticleHeader = ({ title, date, createDate, tags }) => {
    return (
        <header>
            <h1 itemProp="headline"><ArticleIcon tags={tags}/> {title}</h1>
            <small>
                投稿 🕒: {createDate} / 更新 🕒: {date || createDate}
            </small><br/>
            <small>Tags: {
                tags.map(tag => {
                    return (<PostTag key={tag} postTagName={tag} />)
                })
            }
          </small>
        </header>
    )
}

export default ArticleHeader