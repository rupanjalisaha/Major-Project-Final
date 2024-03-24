
import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"
import { ArrowDownRight, ArrowRight } from "react-feather"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='Best Online Education Expertise' />
            <p>We avail free courses for needy students here so that they can study,<br/> practice and prepare themselves for placement.</p>
            <div className='button'>
              <button className='primary-btn'>
                GET STARTED NOW <ArrowRight/>
              </button><br/>
              <button>
                VIEW COURSE <ArrowRight/>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
