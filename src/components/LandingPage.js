import React from 'react'
import { withRouter } from 'react-router-dom'

class LandingPage extends React.Component {
  render() {
    return (
    <div className="landingPage">
      <section className="landingPageContent">
        <div className="myName">Siobhan Mahoney</div>

        <div className="myHeadline">Brooklyn-based Full Stack Web Developer</div>
      </section>

    
    </div>
    )
  }
}

export default withRouter(LandingPage)
