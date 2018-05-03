import React from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';
import Resume from './Resume.pdf'

const link = {
  width: '100px',
  paddingTop: '1em',
  paddingBottom: '1.5em',
  paddingLeft: '0.75em',
  paddingRight: '0.75em',
  marginTop: '1em',
  marginBottom: '1.5em',
  marginLeft: '0.75em',
  marginRight: '0.75em',
  color: '#484545',
  fontSize: '13px',
  textAlign: "center",
  textDecoration: "none"
}

class NavBar extends React.Component {
  render() {
    return (
      <div className="navbar" style={{color:"#484545"}}>
        <span className="navLink"><NavLink to="/" exact style={link} activeStyle={{color:"#7fd1da", textDecoration:"underline"}}>
           Home
        </NavLink></span>

      <span className="navLink"><a href={Resume} target="_blank" style={link}>
             Resume
        </a></span>

      <span className="navLink"><NavLink to="/portfolio" exact style={link} activeStyle={{color:"#7fd1da", textDecoration:"underline"}}>
           Portfolio
        </NavLink></span>

      <span className="navLink"><NavLink to="/blog" exact style={link} activeStyle={{color:"#7fd1da", textDecoration:"underline"}}>
           Blog
        </NavLink></span>


      </div>
    )
  }
}

export default withRouter(NavBar)
