import React from "react"

// Components
import { graphql } from "gatsby"
import Layout from "../components/common/layout"


const Privacy = ({ pageContext, data }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  return (
    <Layout location title={siteTitle}>
      <article>
        <header className="privacy-policy">
          <h1 itemProp="headline">PRIVACY | プライバシーポリシー</h1>
          <h2>
            Cookieの取扱いについて
          </h2>
          <p>1. このサイトでは、Google Analyticsを利用しています。</p>
          <p>2. Google Analyticsは、当サイトの利用状況を収集するためにCookieを使用しています。</p>
          <p>3. このデータは、当サイトの改善のために利用されます。</p>
          <p>4. このデータは、個人を特定するものではありません。</p>
          <p>5. このデータは、Google社のサーバーに保存されます。</p>
          <p>6. このデータは、Google社のプライバシーポリシーに従って取り扱われます。</p>
          <h2>
            Google Analyticsの利用規約とプライバシーポリシー
          </h2>
          <p>
            このサイトで利用しているGoogle Analyticsの利用規約とプライバシーポリシーは、以下の通りです。
          </p>
          <p>Google Analyticsの利用規約については、<a href="https://marketingplatform.google.com/about/analytics/terms/jp/">こちら</a>をご覧ください。</p>
          <p>Google Analyticsのプライバシーポリシーについては、<a href="https://policies.google.com/privacy?hl=ja">こちら</a>をご覧ください。</p>
        </header>
      </article>
    </Layout>
  )
}
export default Privacy

export const pageQuery = graphql`
  {
    site {
        siteMetadata {
            title
        }
    }
    allMarkdownRemark(
      limit: 2000
      sort: {frontmatter: {createDate: DESC}}
    ) {
      group(field: {frontmatter: {tags: SELECT}}){
        totalCount
        fieldValue
      }
    }
  }
`