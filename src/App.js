import React, { useEffect, useRef } from 'react'
import { TweenMax, TimelineLite, Power3 } from 'gsap'
import arrow from './images/arrow-right.svg'
import imgWoman from './images/girl.webp'
import imgMan from './images/boy.webp'
import './App.scss'

function App() {
  let app = useRef()
  let images = useRef()
  let content = useRef()
  const animationTimeline = new TimelineLite({ delay: 0.8 })

  useEffect(
    function () {
      // Get the exact image DOM node from the images ref.
      const womanImage = images.firstElementChild
      const manImage = images.lastElementChild

      // Get the exact div DOM node wrapped by h1 from the content ref.
      const headlineFirst = content.children[0].children[0]
      const headLineSecond = headlineFirst.nextSibling
      const headLineThird = headLineSecond.nextSibling
      const paragraph = content.children[1]
      const button = content.children[2]

      // Remove the initial flash when the page is loaded.
      TweenMax.to(app, 0, { css: { visibility: 'visible' } })

      // Set the animation for the image elements.
      animationTimeline
        .from(womanImage, 1.2, { y: 1280, ease: Power3.easeOut }, 'loadAnimation')
        .from(womanImage, 2, { scale: 1.6, ease: Power3.easeOut }, 0.2)
        .from(manImage, 1.2, { y: 1280, ease: Power3.easeOut }, 0.2)
        .from(manImage, 2, { scale: 1.6, ease: Power3.easeOut }, 0.2)

      // Set the animation for the headline, paragraph, and button elements.
      animationTimeline
        .staggerFrom(
          [headlineFirst.children, headLineSecond.children, headLineThird.children],
          1, { y: 44, ease: Power3.easeOut, delay: 0.8 }, 0.15, 'loadAnimation'
        )
        .from(paragraph, 1, { y: 20, opacity: 0, ease: Power3.easeOut }, 1.4)
        .from(button, 1, { y: 20, opacity: 0, ease: Power3.easeOut }, 1.6)
    },
    [animationTimeline]
  )

  return (
    <div className='hero' ref={(element) => (app = element)}>
      <header className='container'>
        <div className='hero-inner'>
          <section className='hero-content'>
            <div
              className='hero-content-inner'
              ref={(element) => (content = element)}>
              <h1>
                <div className='hero-content-line'>
                  <div className='hero-content-line-inner'>
                    Relieving the burder
                  </div>
                </div>

                <div className='hero-content-line'>
                  <div className='hero-content-line-inner'>
                    of disease caused
                  </div>
                </div>

                <div className='hero-content-line'>
                  <div className='hero-content-line-inner'>by behavior.</div>
                </div>
              </h1>

              <p>
                Better treats serious cardiometabolic diseases to transform
                lives and reduce healthcare utilization through the use of
                digital therapeutics.
              </p>

              <section className='btn-row'>
                <button className='explore-button'>
                  Explore
                  <div className='arrow-icon'>
                    <img src={arrow} alt='arrow' />
                  </div>
                </button>
              </section>
            </div>
          </section>

          <section className='hero-images'>
            <div
              className='hero-images-inner'
              ref={(element) => (images = element)}>
              <div className='hero-image woman'>
                <img src={imgWoman} alt='woman' />
              </div>
              <div className='hero-image man'>
                <img src={imgMan} alt='man' />
              </div>
            </div>
          </section>
        </div>
      </header>
    </div>
  )
}

export default App
