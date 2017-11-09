import React from 'react'

import Content from 'components/layout/Content'

import bgUrl from './bg.jpg'
import Avatars from './artwork-avatars.svg'
import Connections from './artwork-connection.svg'
import coinUrl from './artwork-coin.png'

import { mobileWidth } from 'utils/breakpoints'

const scrollTo = (element, to, duration) => {
  if (duration <= 0) return;

  const difference = to - element.scrollTop;
  const perTick = difference / duration * 10;

  setTimeout(() => {
    element.scrollTop = element.scrollTop + perTick;
    if (element.scrollTop === to) return;
    scrollTo(element, to, duration - 10);
  }, 10);
}

class Top extends React.Component {
  scrollToNext = () => {
    const el = document.querySelector('.why');
    const headerHeight = document.querySelector('header').offsetHeight;

    scrollTo(document.documentElement, el.offsetTop - headerHeight, 200);
  }

  render() {
    return (
      <div className="top">
        <Content style={{
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
        }}>
          <div className="text">
            <h2>
              Peer-to-peer <br />
              electronic cash
            </h2>

            <h3>
              Bitcoin Cash brings low fees & <br />
              reliable confirmations to users and merchants
            </h3>

            <button onClick={this.scrollToNext}>
              Get started
            </button>
          </div>

          <div className="artwork">
            <Connections style={{
              position: 'absolute',
              top: 0,
              left: 0,
            }} />
            <Avatars style={{
              position: 'absolute', 
              top: -40,
              left: -40,
              zIndex: 2,
            }} />
            <div className="coin" />
          </div>
        </Content>

        <style jsx>{`
          .top {
            background-color: #4CA868;
            background-image: url(${bgUrl});
            background-size: cover;
            background-position: center center;
            color: white;
            padding-top: 160px;
            padding-bottom: 90px;
          }
          h2 {
            font-weight: 600;
            font-size: 40px;
            line-height: 57px;
          }
          h3 {
            font-size: 18px;
            line-height: 31px;
            font-weight: 300;
            margin-top: 30px;
          }
          .text,
          .artwork {
            display: inline-block;
            vertical-align: top;
          }
          .text {
            flex-grow: 1;
          }
          .artwork {
            position: relative;
            width: 284px;
            height: 227px;
          }
          .coin {
            background-image: url(${coinUrl});
            width: 30px;
            height: 30px;
            display: inline-block;
            background-size: 100%;
            position: absolute;
            top: 50px;
            left: -5px;
            animation: coinSend 4s infinite;
          }
          @keyframes coinSend {
            0% {
              top: 45px;
              left: -5px;
            }
            33% {
              top: 192px;
              left: 150px;
            }
            66% {
              top: -10px;
              left: 189px;
            }
            100% {
              top: 45px;
              left: -5px;
            }
          }

          button {
            background-color: #FFDB60;
            box-shadow: 
              0 5px 12px 0 rgba(0,0,0,0.08), 
              0 2px 5px 0 rgba(0,0,0,0.16);
            border-radius: 32px;
            font-size: 15px;
            font-weight: 500;
            color: #667D6D;
            text-transform: uppercase;
            padding: 14px 34px;
            margin-top: 35px;
            transition: background-color 0.1s, box-shadow 0.1s, transform 0.2s;
          }
          button:hover {
            background-color: #fddc6c;
            box-shadow: 
              0 8px 19px 0 rgba(0,0,0,0.08), 
              0 4px 9px 0 rgba(0,0,0,0.16);
            transform: translateY(-1px);
          }

          @media (max-width: ${mobileWidth}px) {
            .top {
              padding-top: 120px;
              padding-bottom: 15px;
            }
            .text {
              margin-top: 20px;
            }
            .top :global(.content) {
              flex-direction: column;
              text-align: center;
            }
            .artwork {
              margin: 80px 0;
              margin-bottom: 40px;
              margin-left: 70px;
            }
          }
        `}</style>
      </div>
    )
  }
}

export default Top
