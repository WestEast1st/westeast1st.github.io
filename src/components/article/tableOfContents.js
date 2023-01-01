import React from "react"

const TableOfContents = ({ html }) => {
  return (<div>
    <h2>📚 Table of Contents</h2>
    <div className="toc" dangerouslySetInnerHTML={{ __html: html }} />
  </div>)
}
export default TableOfContents 