import React from 'react'
import { withRouter } from 'react-router-dom'

class Portfolio extends React.Component {
  render() {
    return (
      <div className="portfolio">
        <div className="portfolioHeader section-header">Portfolio</div>

        <div className="portfolio content">
          <div className="captureContent">
            <div className="captureVideo">vrrrrrrrrr</div>
            <div className="captureDescription">Capture<br />
              Job search resource and application tracker equipped with searchable listings and tools for organizing relevant notes and research, including a digital notepad, relevant press and news feeds, and in-app bookmarking tool.
  • Modeled database schema and API with Active Record, PostgreSQL, and Ruby on Rails
  • Developed multi-route frontend using React.js
  • Leveraged Redux and Thunk middleware to manage frontend state and asynchronous server communication
  • Authenticated users at login by encrypting identifying account information via JWT
  • Accessed and rendered real-time data from two third-party APIs
          </div>

          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Portfolio)
