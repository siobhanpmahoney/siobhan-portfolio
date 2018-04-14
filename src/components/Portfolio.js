import React from 'react'
import { withRouter } from 'react-router-dom'
import captureScreenshot from './screenshots/capture-screenshot.jpg'

class Portfolio extends React.Component {
  render() {
    return (
      <div className="portfolio">
        <div className="portfolioHeader section-header">Portfolio</div>

        <div className="portfolio content">
          <div className="captureContent">
            <div className="screenshot">
              <img src={captureScreenshot} class="proj-screenshots"></img>
            </div>

            <div className="description">
                <span className="project-title">Capture</span>

              <p className="stack">Stack: React, React-Router, Redux, Thunk, CSS, JWT Auth, Ruby on Rails, PostgreSQL</p>

              <p>Job search resource and application tracker equipped with searchable listings and tools for organizing relevant notes and research, including a digital notepad, relevant press and news feeds, and in-app bookmarking tool.</p>

              <div class="links">
                  <a href="https://capture-jobs.herokuapp.com/login" target="_blank">live app</a> |
                  <a href="https://www.youtube.com/watch?v=LtX2sFyvuFA&t=1s">demo</a> |
                  <a href="https://github.com/siobhanpmahoney/capture-app">code</a>
              </div>


          </div>

          </div>
        </div>
      </div>
    )
  }
}

export default Portfolio
