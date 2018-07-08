import React from 'react'
import { withRouter } from 'react-router-dom'
import captureScreenshot from './screenshots/capture-screenshot.jpg'
import chatsterScreenshot from './screenshots/chatster-screenshot.jpg'
import newswireScreenshot from './screenshots/newswire-screenshot.jpg'


const projects = [
  {
    title: "Capture",
    screenshot: './screenshots/capture-screenshot.jpg',
    stack: "React, React-Router, Redux, Thunk, CSS, JWT Auth, Ruby on Rails, PostgreSQL",
    description: "Job search resource and application tracker equipped with searchable listings and tools for organizing relevant notes and research, including a digital notepad, relevant press and news feeds, and in-app bookmarking tool.",
    siteLink: "https://capture-jobs.herokuapp.com/login",
    demoLink: "https://www.youtube.com/watch?v=LtX2sFyvuFA&t=1s",
    githubLink: "https://github.com/siobhanpmahoney/capture-app",
  },
  {
    title: "Chatster",
    screenshot: './screenshots/chatster-screenshot.jpg',
    stack: 'Action Cable, Redis, React, React-Router, Redux, Thunk, CSS, JWT Auth, Ruby on Rails, PostgreSQL',
    description: 'Online chat application featuring real-time message delivery with search and filtering tools that optimize access to chats, message history, and friends',
    siteLink: 'https://chatster-app.herokuapp.com/login',
    demoLink: 'https://www.youtube.com/watch?v=EXL_lkLJs6M',
    githubLink: 'https://github.com/siobhanpmahoney/chatster-app',
  },
  {
    title: 'NYTimes NewsWire',
    screenshot: './screenshots/newswire-screenshot.jpg',
    stack: 'React, Isomorphic-Fetch, NYTimes API, CSS',
    description: 'Single Page Application featuring <i>New York Times</i> article feed with real-time updates, curated recommendations, and bookmarking tool.',
    siteLink: 'https://news-wire.herokuapp.com/',
    demoLink: 'https://www.youtube.com/watch?v=14PjvsMuZkU&t=2s',
    githubLink: 'https://github.com/siobhanpmahoney/newswire-app', 
  }
]


class Portfolio extends React.Component {
  render() {
    return (
      <div className="portfolio">
        <div className="portfolioHeader section-header">Portfolio</div>

        <div className="portfolio-content">
          <section className="captureContent">
            <div className="screenshot">
              <img src={captureScreenshot} class="proj-screenshots"></img>
            </div>

            <div className="description">
              <span className="project-title">Capture</span>

              <p className="stack">Stack: React, React-Router, Redux, Thunk, CSS, JWT Auth, Ruby on Rails, PostgreSQL</p>

              <p>Job search resource and application tracker equipped with searchable listings and tools for organizing relevant notes and research, including a digital notepad, relevant press and news feeds, and in-app bookmarking tool.</p>

              <div class="links">
                <a href="https://capture-jobs.herokuapp.com/login" target="_blank" target="_blank">live app</a> |
                  <a href="https://www.youtube.com/watch?v=LtX2sFyvuFA&t=1s" target="_blank">demo</a> |
                    <a href="https://github.com/siobhanpmahoney/capture-app" target="_blank">code</a>
                  </div>


                </div>

              </section>


              <div className="chatsterContent">

                <div className="descriptionOpp">
                  <span className="project-titleOpp">Chatster</span>

                  <p className="stack">Stack: Action Cable, Redis, React, React-Router, Redux, Thunk, CSS, JWT Auth, Ruby on Rails, PostgreSQL</p>

                  <p>Online chat application featuring real-time message delivery with search and filtering tools that optimize access to chats, message history, and friends.</p>

                  <div class="linksOpp" style={{color: "#555"}}>
                    <a href="https://chatster-app.herokuapp.com/login" target="_blank">live app</a> |
                      <a href="https://www.youtube.com/watch?v=EXL_lkLJs6M" target="_blank">demo</a> |
                        <a href="https://github.com/siobhanpmahoney/chatster-app" target="_blank">code</a>
                      </div>


                    </div>
                    <div className="screenshotOpp">
                      <img src={chatsterScreenshot} class="proj-screenshots"></img>
                    </div>

                  </div>



                  <div className="newswireContent">
                    <div className="screenshot">
                      <img src={newswireScreenshot} class="proj-screenshots"></img>
                    </div>

                    <div className="description">
                      <span className="project-title">NYTimes NewsWire</span>

                      <p className="stack">Stack: React, Isomorphic-Fetch, NYTimes API, CSS </p>

                      <p>Single Page Application featuring <i>New York Times</i> article feed with real-time updates, curated recommendations, and bookmarking tool.</p>

                      <div class="links">
                        <a href="https://news-wire.herokuapp.com/" target="_blank" target="_blank">live app</a> |
                          <a href="https://www.youtube.com/watch?v=14PjvsMuZkU&t=2s" target="_blank">demo</a> |
                            <a href="https://github.com/siobhanpmahoney/newswire-app" target="_blank">code</a>
                          </div>


                        </div>

                      </div>
                    </div>
                  </div>
                )
              }
            }

            export default Portfolio
