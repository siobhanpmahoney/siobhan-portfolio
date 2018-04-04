import React from 'react'
import { withRouter } from 'react-router-dom'

class LandingPage extends React.Component {
  render() {
    return (
      <div className="landingPage">
        <span className="myName">Siobhan Mahoney</span>

        <div className="myHeadline">Brooklyn-based Full Stack Web Developer</div>
      </div>
    )
  }
}

export default withRouter(LandingPage)
