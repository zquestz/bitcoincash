import React from 'react'

import GitHubIcon from './social-github.svg'
import RedditIcon from './social-reddit.svg'
import TwitterIcon from './social-twitter.svg'

import Content from 'components/layout/Content'

const Footer = () => (
  <footer>
    <Content style={{
      borderTop: '1px solid rgba(55,92,71,0.16)',
      boxShadow: '0 1px 0 0 rgba(255,255,255,0.40)',
    }}>
      <p>
        © bitcoincash.org
      </p>

      <div className="social">
        <a href="https://github.com/bitcoincashorg/website" target="_blank">
          <GitHubIcon />
        </a>
        <a href="https://www.reddit.com/r/Bitcoincash/" target="_blank">
          <RedditIcon />
        </a>
      </div>
    </Content>

    <style jsx>{`
      footer {
        padding-bottom: 40px;
      }
      p {
        font-size: 15px;
        color: rgba(128,144,132,0.86);
        float: left;
        margin-top: 3px;
      }
      .social {
        float: right;
      }
      a {
        margin: 0 7px;
      }
    `}</style>
  </footer>
)

export default Footer
