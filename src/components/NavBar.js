import React from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';

class NavBar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <span className="navLink"><NavLink to="/" exact>
           Home
        </NavLink></span>

        <span className="navLink"><NavLink to="/portfolio">
           Portfolio
        </NavLink></span>

        <span className="navLink"><NavLink to="/" exact>
           Blog
        </NavLink></span>
      </div>
    )
  }
}

export default withRouter(NavBar)
