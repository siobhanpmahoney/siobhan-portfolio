import React from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';
import Resume from './Resume.pdf'

const link = {
  width: '100px',
  paddingTop: '8px',
  paddingBottom: '8px',
  paddingLeft: '8px',
  paddingRight: '8px',
  marginTop: '8px',
  marginBottom: '8px',
  marginLeft: '8px',
  marginRight: '8px',
  color: '#767171',
  fontSize: '8px',
  textAlign: "center",
  textDecoration: "none"
}

const activestyle = {
  color: "#8E9295",
  boxSizing: "borderBox",
  border: "0.25px solid #8E9295"
}

class NavBar extends React.Component {
  render() {
    return (
      <div className="navbar" style={{color:"#6d6868"}}>
        <span className="navLink"><NavLink to="/" exact style={link} activeStyle={activestyle}>
           Home
        </NavLink></span>

      <span className="navLink"><a href={Resume} target="_blank" style={link}>
             Resume
        </a></span>

      <span className="navLink"><NavLink to="/portfolio" exact style={link} activeStyle={activestyle}>
           Portfolio
        </NavLink></span>

      <span className="navLink"><NavLink to="/blog" exact style={link} activeStyle={activestyle}>
           Blog
        </NavLink></span>


      </div>
    )
  }
}

export default withRouter(NavBar)
