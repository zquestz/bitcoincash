import React from 'react'

import Content from 'components/layout/Content'

import scalableImage from './scalable.png'
import signatureImage from './signature.png'
import edaImage from './eda.png'
import DecentralizedImage from './decentralized.svg'

import { tabletWidth } from 'utils/breakpoints'

const Section = ({ title, text, namespace }) => (
  <section>
    <div className="text">
      <h4>
        {title}
      </h4>
      <p>
        {text}
      </p>
    </div>
    <div className={`artwork ${namespace}`} />

    <style jsx>{`
      section {
        text-align: center;
        margin: 80px 0;
        display: flex;
      }
      h4,
      p {
        max-width: 420px;
      }
      .text {
        text-align: left;
        display: inline-block;
        flex-grow: 1;
      }
      section:nth-child(odd) {
        flex-direction: row-reverse;
      }
      section:nth-child(even) .text {
        margin-right: 80px;
      }
      section:nth-child(odd) .text {
        margin-left: 80px;
      }
      .artwork {
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center center;
        display: inline-block;
        flex-basis: 325px;
        width: 325px;
        min-width: 325px;
      }
      .artwork.on-chain {
        background-image: url(${scalableImage});        
        height: 208px;
      }
      .artwork.signature {
        background-image: url(${signatureImage});
        height: 192px;
      }
      .artwork.eda {
        background-image: url(${edaImage});
        height: 181px;
      }

      @media (max-width: ${tabletWidth}px) {
        section {
          margin: 40px 0;
        }
        section,
        section:nth-child(odd) {
          flex-direction: column;
        }
        section:nth-child(even) .text,
        section:nth-child(odd) .text {
          margin: 0;  
        }
        .text {
          text-align: center;
        }
        h4,
        p {
          max-width: none;
        }
        .artwork {
          margin: -50px auto;
          width: 240px !important;
          height: 60px !important;
          min-width: 0;
        }
        .artwork.signature {
          width: 270px !important;
        }
      }
    `}</style>
  </section>
)

const Features = () => (
  <div className="features">
    <Content style={{
      textAlign: 'center',
      overflow: 'hidden',
    }}>
      <h3>
        Added Features
      </h3>

      <Section
        namespace="on-chain"
        title="On-chain scalability"
        text={<span>
          Bitcoin Cash follows the Nakamoto roadmap of global adoption with on-chain scaling. 
          As a first step, the blocksize limit has been made adjustable, with an increased default of 8MB. <a href="https://github.com/BitcoinUnlimited/BUIP/blob/master/065.mediawiki">Research is underway to allow massive future increases</a>.
        </span>}
      />

      <Section
        namespace="signature"
        title="New transaction signatures"
        text="A new SigHash type provides replay protection, improved hardware wallet security, and elimination of the quadratic hashing problem."
      />

      <Section
        namespace="eda"
        title="Emergency Difficulty Adjustment (EDA)"
        text="Responsive Proof-of-Work difficulty adjustment allows miners to migrate from the legacy Bitcoin chain as desired, while providing protection against hashrate fluctuations."
      />

      <section>
        <h4>
          Decentralized development
        </h4>
        <p>
          With multiple independent teams of developers providing software implementations, the future is secure. Bitcoin Cash is resistant to political and social attacks on protocol development. No single group or project can control it. The <a href="https://lists.linuxfoundation.org/mailman/listinfo/bitcoin-ml">bitcoin-ml mailing list</a> is a good venue for making proposals for changes that require coordination across development teams.
        </p>
        <DecentralizedImage className="global-artwork" />
      </section> 

    </Content>

    <style jsx>{`
      h3 {
        background-color: rgba(114,202,97,0.13);
        border-radius: 27px;
        display: inline-block;
        font-size: 19px;
        color: rgba(96,200,77,0.85);
        padding: 12px 44px;
        margin-top: 20px;
        margin-bottom: 40px;
      }
      .features :global(h4) {
        font-size: 24px;
        color: rgba(105,123,111,0.83);
        margin-bottom: 40px;
      }
      .features :global(p) {
        font-size: 16px;
        color: rgba(128,144,132,0.86);
        line-height: 35px;
      }
      .features :global(.global-artwork) {
        margin: 40px 0;
      }

      @media (max-width: ${tabletWidth}px) {
        .features :global(h4) {
          margin-bottom: 20px;
        }
        .features :global(.global-artwork) {
          position: relative;
          left: 50%;
          transform: translateX(-50%);
          margin-left: 45px;
        }
      }
    `}</style>
  </div>
)

export default Features
