import React from 'react'

import Link from 'gatsby-link'

import Content from 'components/layout/Content'
import LogotypeIcon from './logotype.svg'
import MenuIcon from './menu.svg'

import { tabletWidth } from 'utils/breakpoints';

const greenColor = '#56AC6F';

const Announcement = ({ text, link }) => (
  <a href={link} target="_blank">
    {text}

    <style jsx>{`
      a {
        background-color: #7cc74d;
        margin-top: -7px;
        display: block;
        padding: 10px;
        padding-top: 13px;
        color: white;
        text-align: center;
        text-decoration: none;
        font-weight: 400;
      }
      a:hover {
        text-decoration: underline;
      }
    `}</style>
  </a>
)

class Header extends React.Component {
  constructor(props) {
    super()

    this.state = {
      solid: props.solid,
      showMenu: false, // Mobile only
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('resize', this.handleResize)

    this.handleResize()
  }

  handleResize = () => {
    const { solid } = this.props
    if (solid) return;

    const isSmall = (window.matchMedia(`(max-width: ${tabletWidth}px)`).matches)

    this.setState({
      solid: isSmall,
    })
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    const { solid } = this.props
    const isSmall = (window.matchMedia(`(max-width: ${tabletWidth}px)`).matches)

    if (solid || isSmall) return;

    const scrollTop = document.documentElement.scrollTop

    this.setState({
      solid: (scrollTop > 100),
    })
  }

  toggleMenu = () => {
    const { showMenu } = this.state

    this.setState({
      showMenu: !showMenu,
    })
  }

  hideIfClickOnLink = e => {
    if (e.target.tagName === "A") {
      this.toggleMenu()
    }
  }

  render() {
    const { solid, showMenu } = this.state

    return (
      <header data-solid={solid}>

        {/* This can be commented out if there's no special announcement to make */}
        <Announcement
          text="The Bitcoin Cash network upgrade is scheduled for November 13th, 2017."
          link="https://www.bitcoinabc.org/november"
        />

        <Content style={{
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          paddingTop: 18,
          paddingBottom: 18,
        }}>
          <Link to="/" style={{
            flexGrow: 1,
          }}>
            <LogotypeIcon />
          </Link>

          <button className="menu-button" onClick={this.toggleMenu}>
            <MenuIcon />
          </button>

          <nav data-show={showMenu} onClick={this.hideIfClickOnLink}>
            <Link to="/wallets">
              Wallets
            </Link>
            <Link to="/exchanges">
              Exchanges
            </Link>
            <span className="dropdown">
              Community
              <div className="box">
                <Link to="/services" className="dropdown">
                  Services
                </Link>
                <Link to="/projects" className="dropdown">
                  Projects
                </Link>
              </div>
            </span>
            <Link to="/clients">
              Clients
            </Link>
            <Link to="/faq">
              FAQ
            </Link>
          </nav>
        </Content>

        <style jsx>{`
          header {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 10;
            transition: background-color 0.3s;
          }
          header[data-solid="true"] {
            background-color: white;
            box-shadow: 0 1px 2px 0 rgba(0,0,0,0.10);
          }
          header[data-solid="true"] :global(#logomark),
          header[data-solid="true"] :global(#cash) {
            fill: ${greenColor};
            fill-opacity: 1;
          }
          header[data-solid="true"] :global(#bitcoin) {
            fill: #565d59;
          }
          header[data-solid="true"] nav :global(a),
          header[data-solid="true"] nav :global(span) {
            color: #7A817C;
          }
          header[data-solid="true"] nav :global(a:hover) {
            color: #4e524f;
          }

          nav {
            flex-grow: 1;
            text-align: right;
          }
          nav :global(a),
          nav :global(span) {
            display: inline-block;
            padding: 6px 8px;
            font-size: 15px;
            color: rgba(255,255,255,0.85);
            margin: 0 6px;
            text-transform: uppercase;
            text-decoration: none;
            cursor: pointer;
          }
          nav :global(a:hover),
          nav :global(span:hover) {
            color: white;
          }

          .dropdown {
            position: relative;
          }
          .dropdown:hover .box {
            display: block;
          }
          nav :global(.dropdown:hover) {
            background-color: rgba(0, 0, 0, 0.1);
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
          }
          header[data-solid="true"] nav :global(.dropdown:hover) {
            background-color: #56ac6f;
            color: white;
          }
          .box {
            position: absolute;
            border: 1px solid #95ab9b;
            border-radius: 3px;
            border-top-left-radius: 0;
            padding: 5px 0;
            top: 100%;
            left: 0;
            min-width: 120%;
            text-align: left;
            background-color: white;
            display: none;
          }
          .box :global(a) {
            font-size: 14px;
          }
          .box :global(.dropdown) {
            display: block;
            margin: 0;
            border-radius: 0 !important;
          }
          header[data-solid="false"] .box :global(a) {
            color: #737d76;
          }

          .menu-button {
            margin-right: 10px;
            display: none;
          }

          @media (max-width: ${tabletWidth}px) {
            .menu-button {
              display: block;
            }
            nav {
              position: absolute;
              top: 69px;
              background-color: white;
              left: 0;
              right: 0;
              text-align: center;
              border-top: 1px solid #00000026;
              box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.08);
              display: none;
            }
            nav[data-show="true"] {
              display: block;
            }
            nav :global(a),
            nav :global(span) {
              display: block;
              color: #566156;
              padding: 18px 0;
            }
            .dropdown {
              padding-bottom: 0;
              line-height: 45px;
              padding-top: 2px;
            }
            .box {
              position: relative;
              min-width: 0;
            }
            .box :global(.dropdown) {
              text-align: center;
              padding: 5px;
            }
          }
        `}</style>
      </header>
    )
  }
}

export default Header
