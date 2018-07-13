import React from 'react'
import { withRouter } from 'react-router-dom'
import captureScreenshot from './screenshots/capture-screenshot.jpg'
import chatsterScreenshot from './screenshots/chatster-screenshot.jpg'
import newswireScreenshot from './screenshots/newswire-screenshot.jpg'
import RenderedProject from './projects/RenderedProject'
import { projectList } from './projects/projectList'
import Slider from "react-slick";




class Portfolio extends React.Component {

  render() {
    const settings = {
      dots: true,
      slidesToShow: 1,
      speed: 500,
fade: true,
cssEase: 'linear'


};
    return (
      <div className="portfolio">
        <div className="section-header">Projects</div>
          <Slider {...settings}>
                  {projectList.map((proj, i) => {
                    return <RenderedProject project = {proj} styleId={i+1} key={i} />
                  })}
                  </Slider>
      </div>
    )
  }
}

export default Portfolio
