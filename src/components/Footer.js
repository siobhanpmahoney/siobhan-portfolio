import React from 'react'
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer-content">
        <div className="social-icons">
        <i class="far fa-envelope" style={{fontSize:"18px", margin: "0em 1em", color:"#484545", padding:"0.25em 0em" }}></i>
        <i className="fab fa-medium-m" style={{fontSize:"18px", margin: "0em 1em", color:"#484545", padding:"0.25em 0em" }}></i>
        <i className="fab fa-linkedin-in" style={{fontSize:"18px", margin: "0em 1em", color:"#484545", padding:"0.25em 0em" }}></i>
        <i className="fab fa-github" style={{fontSize:"18px", margin: "0em 1em", color:"#484545", padding:"0.25em 0em" }}></i>
        </div>
      </div>
    )
  }
}

export default withRouter(Footer)
