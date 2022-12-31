import * as React from "react"

const ArticleIcon = ({tags}) => {
    const arrayConverter = ((t)=>{
        if (!Array.isArray(t)) return new Array(t)
        return t
    })

    const icon = ((tags) => {
        tags = tags.map((tag) => {
            return tag.toLowerCase()
        })
        if (tags.includes("linux".toLowerCase())) return "🐧"
        if (tags.includes("windows".toLowerCase())) return "🪟"
        if (tags.includes("macos".toLowerCase())) return "🍎"
        if (tags.includes("android".toLowerCase())) return "🤖"
        if (tags.includes("ios".toLowerCase())) return "📱"
        if (tags.includes("web".toLowerCase())) return "🌐"
        if (tags.includes("network".toLowerCase())) return "🌐"
        if (tags.includes("programming".toLowerCase())) return "👨‍💻"
        if (tags.includes("security".toLowerCase())) return "🔐"
        if (tags.includes("hacking".toLowerCase())) return "🔐"
        if (tags.includes("ctf".toLowerCase())) return "🚩"
        if (tags.includes("writeup".toLowerCase())) return "🚩"
        if (tags.includes("crypto".toLowerCase())) return "🔑"
        if (tags.includes("forensic".toLowerCase())) return "🔍"
        if (tags.includes("reversing".toLowerCase())) return "🔎"
        if (tags.includes("pwn".toLowerCase())) return "🔫"
        if (tags.includes("web".toLowerCase())) return "🌐"
        if (tags.includes("misc".toLowerCase())) return "🔧"
        if (tags.includes("miscellaneous".toLowerCase())) return "🔧"
        if (tags.includes("diary".toLowerCase())) return "📔"
        if (tags.includes("note".toLowerCase())) return "📝"
        if (tags.includes("post".toLowerCase())) return "📖"
        if (tags.includes("blog".toLowerCase())) return "📖"
        if (tags.includes("article".toLowerCase())) return "📖"
        if (tags.includes("review".toLowerCase())) return "📖"
        if (tags.includes("book".toLowerCase())) return "📖"
        if (tags.includes("movie".toLowerCase())) return "🎬"
        if (tags.includes("anime".toLowerCase())) return "🎬"
        if (tags.includes("game".toLowerCase())) return "🎮"
        if (tags.includes("music".toLowerCase())) return "🎵"
        if (tags.includes("photo".toLowerCase())) return "📷"
        if (tags.includes("picture".toLowerCase())) return "📷"
        if (tags.includes("image".toLowerCase())) return "🌅"
        if (tags.includes("video".toLowerCase())) return "📹"
        return "🏷️"
    })(arrayConverter(tags))
    return (<span>{icon}</span>)
}

export default ArticleIcon