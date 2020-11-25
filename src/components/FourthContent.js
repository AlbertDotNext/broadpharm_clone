import React, {useEffect, useState} from 'react';
import './FourthContent.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Carousel from 'react-elastic-carousel';
import { Collapse } from 'react-bootstrap';


const breakPoints = [
  {width: 1, itemsToShow: 3}
]

const FourthContent = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  const [showText, setShowText] = useState(false)

  const [showText1, setShowText1] = useState(false)

  const [showText2, setShowText2] = useState(false)

  const [showText3, setShowText3] = useState(false)

  const [showText4, setShowText4] = useState(false)

  const [showText5, setShowText5] = useState(false)

  return (
    <div className="FourthContent">
      <div className="FC-Title">
        <h3 data-aos="fade-right">Customer Feedback</h3>
      </div>
      <div data-aos="fade-up" className="feedback-items">
        <Carousel  breakPoints={breakPoints}

        >

          <div className="feedback-item1">



            <blockquote>
              <span>
              As for the feedback of your company's PEG products, please let me share some of the comments from our customers.
              The list contains more items than that of Japanese domestic company.
              It is very useful for upstream stage.
              </span>




          <Collapse in={showText} timeout={50}>

              <span>
              The brochure catalog is well organized and easy to check out the items.
              We want particle size · CMC information of reagents related to micelle formation.
              </span>


          </Collapse>
          <div className="readmore">
            {showText ? <a  onClick={() => setShowText(false)}>Read Less
            </a> : <a  onClick={() => setShowText(true)}>Read More
            </a>}
          </div>

          </blockquote>
          <p>
            <strong>~ Stephen McCraith</strong>
          </p>
          </div>

          <div className="feedback-item1"><blockquote>
              <span>
              As for the feedback of your company's PEG products, please let me share some of the comments from our customers.
              The list contains more items than that of Japanese domestic company.
              It is very useful for upstream stage.
              </span>




          <Collapse in={showText1} timeout={50}>

              <span>
              The brochure catalog is well organized and easy to check out the items.
              We want particle size · CMC information of reagents related to micelle formation.
              </span>


          </Collapse>
          <div className="readmore">
            {showText1 ? <a  onClick={() => setShowText1(false)}>Read Less
            </a> : <a  onClick={() => setShowText1(true)}>Read More
            </a>}
          </div>

          </blockquote>
          <p>
            <strong>~Stephen McCraith</strong>
          </p>
          </div>
          <div className="feedback-item1"><blockquote>
              <span>
              As for the feedback of your company's PEG products, please let me share some of the comments from our customers.
              The list contains more items than that of Japanese domestic company.
              It is very useful for upstream stage.
              </span>




          <Collapse in={showText2} timeout={50}>

              <span>
              The brochure catalog is well organized and easy to check out the items.
              We want particle size · CMC information of reagents related to micelle formation.
              </span>


          </Collapse>
          <div className="readmore">
            {showText2 ? <a  onClick={() => setShowText2(false)}>Read Less
            </a> : <a  onClick={() => setShowText2(true)}>Read More
            </a>}
          </div>

          </blockquote>
          <p>
            <strong>~Stephen McCraith</strong>
          </p>
          </div>
          <div className="feedback-item1"><blockquote>
              <span>
              As for the feedback of your company's PEG products, please let me share some of the comments from our customers.
              The list contains more items than that of Japanese domestic company.
              It is very useful for upstream stage.
              </span>




          <Collapse in={showText3} timeout={50}>

              <span>
              The brochure catalog is well organized and easy to check out the items.
              We want particle size · CMC information of reagents related to micelle formation.
              </span>


          </Collapse>
          <div className="readmore">
            {showText3 ? <a  onClick={() => setShowText3(false)}>Read Less
            </a> : <a  onClick={() => setShowText3(true)}>Read More
            </a>}
          </div>

          </blockquote>
          <p>
            <strong>~Stephen McCraith</strong>
          </p>
          </div>
          <div className="feedback-item1"><blockquote>
              <span>
              As for the feedback of your company's PEG products, please let me share some of the comments from our customers.
              The list contains more items than that of Japanese domestic company.
              It is very useful for upstream stage.
              </span>




          <Collapse in={showText4} timeout={50}>

              <span>
              The brochure catalog is well organized and easy to check out the items.
              We want particle size · CMC information of reagents related to micelle formation.
              </span>


          </Collapse>
          <div className="readmore">
            {showText4 ? <a  onClick={() => setShowText4(false)}>Read Less
            </a> : <a  onClick={() => setShowText4(true)}>Read More
            </a>}
          </div>

          </blockquote>
          <p>
            <strong>~Stephen McCraith</strong>
          </p>
          </div>
          <div className="feedback-item1"><blockquote>
              <span>
              As for the feedback of your company's PEG products, please let me share some of the comments from our customers.
              The list contains more items than that of Japanese domestic company.
              It is very useful for upstream stage.
              </span>




          <Collapse in={showText5} timeout={50}>

              <span>
              The brochure catalog is well organized and easy to check out the items.
              We want particle size · CMC information of reagents related to micelle formation.
              </span>


          </Collapse>
          <div className="readmore">
            {showText5 ? <a  onClick={() => setShowText5(false)}>Read Less
            </a> : <a  onClick={() => setShowText5(true)}>Read More
            </a>}
          </div>

          </blockquote>
          <p>
            <strong>~Stephen McCraith</strong>
          </p>
          </div>
        </Carousel>
      </div>

    </div>
  )
}

export default FourthContent;