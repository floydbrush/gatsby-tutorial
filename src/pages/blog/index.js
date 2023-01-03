import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { Link, graphql } from "gatsby"

const BlogPage = ({ data }) => {
  console.log('data', data);
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
      {
        data.allMdx.nodes.map(node => (
            <article key={node.id}>
                <Link to={`/blog/${node.frontmatter.slug}`}><h2>{node.frontmatter.title}</h2></Link>
                <p>Posted: {node.frontmatter.date}</p>
                <p>ok</p>
            </article>
        ))
      }
      </ul>
    </Layout>
  )
}

export const Head = () => <Seo title="My Blog Posts" />

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC }}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        id
      }
    }
  }
`

export default BlogPage