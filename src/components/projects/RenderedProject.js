import React from 'react'

class RenderedProject extends React.Component {

  styleClass = () => {
    if (parseInt(this.props.styleId) % 2 == 0) {
      return "projectItem even"
    } else {
      return "projectItem odd"
    }
  }

  render() {
    console.log(this.props.styleId)
    return (
      <div className={this.styleClass()}>
    <span className="project-title">{this.props.project.title}</span>
    <div className="overview-and-pic">
      <div className="projOverview">


        <div className="stack">Stack: {this.props.project.stack}</div>

        <div className="description">{this.props.project.description}</div>




          </div>
          <img src={this.props.project.screenshot} class="proj-screenshots"></img>
          </div>
          <div class="links">
            <a href={this.props.project.siteLink} target="_blank" target="_blank">live app</a> |
              <a href={this.props.project.demoLink} target="_blank">demo</a> |
                <a href={this.props.project.githubLink} target="_blank">code</a>
              </div>

          </div>
    )
  }
}

export default RenderedProject
