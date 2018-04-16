import React from 'react'
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer-content">
        <div className="social-icons">
          <a href="mailto:siobhan.p.mahoney@gmail.com" target="_blank"><i class="far fa-envelope" style={{fontSize:"18px", margin: "0em 1em", color:"#484545", padding:"0.25em 0em" }}></i></a>

        <a href="https://www.linkedin.com/in/siobhan-mahoney-6a107b33/" target="_blank">
          <i className="fab fa-linkedin-in" style={{fontSize:"18px", margin: "0em 1em", color:"#484545", padding:"0.25em 0em" }}></i></a>

            <a href="https://github.com/siobhanpmahoney" target= "_blank"><i className="fab fa-github" style={{fontSize:"18px", margin: "0em 1em", color:"#484545", padding:"0.25em 0em" }}></i></a>


        <a href="https://medium.com/@siobhanpmahoney/latest" target="_blank">
        <i className="fab fa-medium-m" style={{fontSize:"18px", margin: "0em 1em", color:"#484545", padding:"0.25em 0em" }}></i></a>





        </div>
      </div>
    )
  }
}

export default withRouter(Footer)
