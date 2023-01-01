import React from "react"

// Components
import { graphql } from "gatsby"
import Layout from "../components/common/layout"


const Contact = ({ pageContext, data }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  return (
    <Layout location title={siteTitle}>
      <article>
        <header className="privacy-policy">
          <h1 itemProp="headline">Contact | 問い合わせ</h1>
          <h2>
            問い合わせ
          </h2>
          <p>
            ご意見、ご感想、ご質問などございましたら、下記のメールアドレスまでお気軽にご連絡ください。
          </p>
          <p>
            <a href="mailto:azarashi.contact@gmail.com">azarashi.contact@gmail.com</a>
          </p>
          <h2>
            お問い合わせの際の注意事項
          </h2>
          <p>
            1. お問い合わせの際には、必ず「お名前」「メールアドレス」「お問い合わせ内容」をご記入ください。
          </p>
          <p>
            2. お問い合わせ内容によっては、お返事が遅れる場合がございます。
          </p>
          <p>
            3. お問い合わせ内容によっては、お返事ができない場合がございます。
          </p>
          <p>
            4. お問い合わせ内容によっては、お返事ができない場合がございます。
          </p>
        </header>
      </article>
    </Layout>
  )
}
export default Contact

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