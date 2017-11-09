import React from "react"

import Content from 'components/layout/Content'

import { tabletWidth, mobileWidth } from 'utils/breakpoints'

export default ({ data }) => {
  const { html, frontmatter } = data.markdownRemark
  const { title, description, layout } = frontmatter;

  return (
    <div className="container">
      <Content>
        <h2>
          {title}
        </h2>
        <p>
          {description}
        </p>

        <div 
          className="content"
          data-card={(layout === "card")}
          dangerouslySetInnerHTML={{ __html: html }} 
        />
      </Content>

      <style jsx>{`
        .container {
          padding-top: 110px;
          text-align: center;
        }
        h2 {
          font-weight: 600;
          text-align: center;
          font-size: 22px;
          font-style: italic;
          color: #56AC6F;
        }
        p {
          font-size: 16px;
          color: rgba(95,118,102,0.83);
          margin: 20px 0;
        }
        .content {
          margin: 40px 0;
        }
        .content[data-card="true"] {
          background-color: white;
          padding: 30px;
          box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.22);
          border-radius: 2px;
          text-align: left;
        }
        .content :global(ul) {
          text-align: left;
        }
        .content :global(li) {
          display: inline-block;
          width: calc(25% - 23px);
          margin: 20px 10px;
          vertical-align: middle;
          text-align: center;
          transition: transform 0.1s;
          position: relative;
        }
        .content :global(li::after) {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 0px;
          background-color: #f29d38;
          transition: height 0.1s;
        }
        .content :global(li:hover::after) {
          height: 4px;
        }
        .content :global(li a) {
          background: #FFFFFF;
          box-shadow: 0 1px 3px 0 rgba(0,0,0,0.18);
          border-radius: 2px;
          width: 100%;
          height: 85px;
          display: block;
          vertical-align: middle;
        }
        .content :global(li img) {
          position: relative;
          top: 50%;
          transform: translateY(-50%) scale(0.8);
          max-width: 100%;
        }

        .content :global(h3) {
          color: rgb(131, 146, 135);
          margin: 20px 0;
          font-size: 20px;
          margin-top: 30px;
          color: #2c38328a;
          font-weight: 400;
          border-top: 1px solid #00000021;
          padding-top: 40px;
        }
        .content :global(h3:first-child) {
          margin-top: 0;
          border-top: none;
          padding-top: 0;
        }
        .content :global(p) {
          line-height: 33px;
          font-weight: 400;
          color: rgba(0, 0, 0, 0.7);
        }

        @media (max-width: ${tabletWidth}px) {
          .content :global(li) {
            width: calc(33% - 21px);
          }
        }

        @media (max-width: ${mobileWidth}px) {
          .content :global(li) {
            width: calc(50% - 16px);
            margin: 10px 7px;
          }
        }
      `}</style>
    </div>
  )
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
        layout
      }
    }
  }
`
