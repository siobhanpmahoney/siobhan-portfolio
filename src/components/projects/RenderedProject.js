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
      <div className="screenshot">
        <img src={this.props.project.screenshot} class="proj-screenshots"></img>
      </div>

      <div className="description">
        <span className="project-title">{this.props.project.title}</span>

        <p className="stack">Stack: {this.props.project.stack}</p>

        <p>{this.props.project.description}</p>

        <div class="links">
          <a href={this.props.project.siteLink} target="_blank" target="_blank">live app</a> |
            <a href={this.props.project.demoLink} target="_blank">demo</a> |
              <a href={this.props.project.githubLink} target="_blank">code</a>
            </div>


          </div>

          </div>
    )
  }
}

export default RenderedProject
