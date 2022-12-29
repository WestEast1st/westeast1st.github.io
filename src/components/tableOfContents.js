import React from "react"

const TableOfContents = ({ html }) => {
  return <div className="toc" dangerouslySetInnerHTML={{ __html: html }} />
}
export default TableOfContents 