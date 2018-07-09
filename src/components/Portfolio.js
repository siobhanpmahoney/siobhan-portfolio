import React from 'react'
import { withRouter } from 'react-router-dom'
import captureScreenshot from './screenshots/capture-screenshot.jpg'
import chatsterScreenshot from './screenshots/chatster-screenshot.jpg'
import newswireScreenshot from './screenshots/newswire-screenshot.jpg'
import RenderedProject from './projects/RenderedProject'
import { projectList } from './projects/projectList'




class Portfolio extends React.Component {

  render() {
    console.log(projectList)
    console.log(projectList[0])

    console.log(projectList)
    return (
      <div className="portfolio">
        <div className="section-header">Projects</div>
        {projectList.map((proj, i) => {
          return <RenderedProject project = {proj} styleId={i+1} key={i} />
        })}
      </div>
    )
  }
}

export default Portfolio
