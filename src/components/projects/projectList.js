import React from 'react'
import captureScreenshot from '../screenshots/capture-screenshot.jpg'
import chatsterScreenshot from '../screenshots/chatster-screenshot.jpg'
import newswireScreenshot from '../screenshots/newswire-screenshot.jpg'
import draftjsScreenshot from '../screenshots/draftjs-screenshot.jpg'


export const projectList = [
  {
    title: "Draft.js Demo",
    screenshot: draftjsScreenshot,
    stack: "Draft.js, React, Redux, Thunk, CSS, Ruby on Rails, PostgreSQL",
    description: "Demo of WYSIWYG rich text editor built using Draft.js framework",
    siteLink: "https://draftjs-demo.herokuapp.com/login",
    demoLink: "#",
    githubLink: "https://github.com/siobhanpmahoney/draftjs-demo-ongoing",
  },
  {
    title: "Capture",
    screenshot: captureScreenshot,
    stack: "React, React-Router, Redux, Thunk, CSS, JWT Auth, Ruby on Rails, PostgreSQL",
    description: "Job search resource and application tracker equipped with searchable listings and tools for organizing relevant notes and research, including a digital notepad, relevant press and news feeds, and in-app bookmarking tool.",
    siteLink: "https://capture-jobs.herokuapp.com/login",
    demoLink: "https://www.youtube.com/watch?v=LtX2sFyvuFA&t=1s",
    githubLink: "https://github.com/siobhanpmahoney/capture-app",
  },
  {
    title: "Chatster",
    screenshot: chatsterScreenshot,
    stack: 'Action Cable, Redis, React, React-Router, Redux, Thunk, CSS, JWT Auth, Ruby on Rails, PostgreSQL',
    description: 'Online chat application featuring real-time message delivery with search and filtering tools that optimize access to chats, message history, and friends',
    siteLink: 'https://chatster-app.herokuapp.com/login',
    demoLink: 'https://www.youtube.com/watch?v=EXL_lkLJs6M',
    githubLink: 'https://github.com/siobhanpmahoney/chatster-app',
  },
  {
    title: 'NYTimes NewsWire',
    screenshot: newswireScreenshot,
    stack: 'React, Isomorphic-Fetch, NYTimes API, CSS',
    description: 'Single Page Application featuring New York Times article feed with real-time updates, curated recommendations, and bookmarking tool.',
    siteLink: 'https://news-wire.herokuapp.com/',
    demoLink: 'https://www.youtube.com/watch?v=14PjvsMuZkU&t=2s',
    githubLink: 'https://github.com/siobhanpmahoney/newswire-app',
  }
]
