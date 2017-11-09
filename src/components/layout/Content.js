import React from 'react'

const Content = ({ children, style }) => (
  <div className="content" style={style}>
    {children}

    <style jsx>{`
      .content {
        max-width: 900px;
        padding: 15px;
        margin: 0 auto;
      }
    `}</style>
  </div>
)

export default Content
