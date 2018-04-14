import React from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';

const link = {
  width: '100px',
  paddingTop: '1em',
  paddingBottom: '1em',
  paddingLeft: '0.75em',
  paddingRight: '0.75em',
  marginTop: '1em',
  marginBottom: '1em',
  marginLeft: '0.75em',
  marginRight: '0.75em',
  color: '#484545',
  fontSize: '13px',
  alignText: "center",
  textDecoration: "none"
}

class NavBar extends React.Component {
  render() {
    return (
      <div className="navbar" style={{color:"#484545"}}>
        <span className="navLink"><NavLink to="/" exact style={link} activeStyle={{color:"#f26a6b", textDecoration:"underline"}}>
           Home
        </NavLink></span>

      <span className="navLink"><NavLink to="/portfolio" exact style={link} activeStyle={{color:"#f26a6b", textDecoration:"underline"}}>
           Portfolio
        </NavLink></span>

      <span className="navLink"><NavLink to="/" exact style={link} activeStyle={{color:"#f26a6b", textDecoration:"underline"}}>
           Blog
        </NavLink></span>
      </div>
    )
  }
}

export default withRouter(NavBar)
