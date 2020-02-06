import React from 'react'
import Typist from 'react-typist'

export default function Index() {
  const hours = new Date().getHours()
  const isNoon = hours > 11 && hours < 18
  const isEvening = (hours >= 0 && hours <= 4) || (hours >= 18 && hours <= 23)

  let welcome = 'Good morning'
  if (isNoon) welcome = 'Good afternoon'
  else if (isEvening) welcome = 'Good evening'

  return (
    <>
      <div className="hero">
        <Typist startDelay={2000} cursor={{ element: '▍' }}>
          Hey,
          <Typist.Backspace count={4} delay={500} />
          {welcome},
          <br />
          <Typist.Delay ms={500} />
          <b>
            I build pixel-perfect <span className="nowrap">pages 👌</span>{' '}
            smooth <span className="nowrap">animations 🦄</span> and performant
            iOS <span className="nowrap">applications 💯</span>{' '}
          </b>
          <br />
          <Typist.Delay ms={500} />
          <br />
          <Typist.Delay ms={500} />I{' '}
          <a href="https://twitter.com/alperenunal68" target="_blank">
            tweet
          </a>
          , take{' '}
          <a href="https://www.instagram.com/alperenunal23" target="_blank">
            photos
          </a>
          , push{' '}
          <a href="https://github.com/alperen23230" target="_blank">
            code
          </a>{' '}
          and share{' '}
          <a href="https://medium.com/@alperenunal68" target="_blank">
            blog posts
          </a>{' '}
        </Typist>
      </div>

      <style jsx>{`
        .hero {
          padding: 2rem;
          font-size: 8vw;
        }
        @media (min-width: 700px) {
          .hero {
            padding: 3rem;
            font-size: 5vw;
          }
        }
      `}</style>
      <style global jsx>{`
        .Cursor {
          display: inline-block;
          margin-left: 5px;
          opacity: 1;
          animation: blink 1s linear infinite;
        }
        @keyframes blink {
          to {
            opacity: 0;
          }
        }
      `}</style>
    </>
  )
}
