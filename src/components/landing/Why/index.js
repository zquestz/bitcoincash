import React from 'react'

import Content from 'components/layout/Content'

import FastIcon from './fast.svg'
import ReliableIcon from './reliable.svg'
import CheapIcon from './cheap.svg'

import { mobileWidth } from 'utils/breakpoints'

const SVGMask = () => (
  <svg width="0" height="0">
    <defs>
      <clipPath 
        id="why-bg-mask" 
        clipPathUnits="objectBoundingBox"
      >
        <polygon 
          points="0 0, 1 0, 1 0.9, 0 1" 
        />
      </clipPath>
    </defs>
  </svg>
)

const Why = () => (
  <div className="bg why">
    <SVGMask />

    <Content>
      <h3>
        Why Bitcoin Cash?
      </h3>

      <ul>
        <li>
          <FastIcon />
          <h4>
            Fast & simple
          </h4>
          <p>
            Transactions on Bitcoin Cash are confirmed in minuted instead of hours.
          </p>
        </li>
        <li>
          <ReliableIcon />
          <h4>
            Reliable
          </h4>
          <p>
            A network that runs without congestion and scales dynamically.
          </p>
        </li>
        <li>
          <CheapIcon />
          <h4>
            Actual low fees
          </h4>
          <p>
            Send money for pennies. Not dollars.
          </p>
        </li>
      </ul>
    </Content>

    <style jsx>{`
      .bg {
        background-color: #DCECE1;
        padding-bottom: 70px;
        -webkit-clip-path: url("#why-bg-mask");
        clip-path: url("#why-bg-mask");
        will-change: transform; /* For Safari */
      }
      h3 {
        font-size: 22px;
        color: rgba(105,123,111,0.83);
        padding: 30px 0;
        text-align: center;
      }
      ul {
        display: flex; 
        align-items: baseline;
        margin: 40px 0;
      }
      li {
        text-align: center;
        vertical-align: top;
        flex-grow: 1;
        flex-basis: 0;
        margin: 0 20px;
      }
      h4 {
        font-size: 18px;
        color: #6A9176;
        margin: 15px 0;
      }
      p {
        font-size: 15px;
        color: rgba(103,124,109,0.63);
        line-height: 24px;
      }

      @media (max-width: ${mobileWidth}px) {
        ul {
          flex-direction: column;
          align-items: center;
          margin-top: 5px;
        }
        li {
          margin: 20px 0;
        }
      }
    `}</style>
  </div>
)

export default Why

