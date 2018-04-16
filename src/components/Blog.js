import React from 'react'
import {withRouter} from 'react-router-dom'
import BlogFeed from './BlogFeed'


class Blog extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      blogPosts: []
    }
  }

  componentDidMount() {
    fetch("http://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40siobhanpmahoney%2F")
    .then(response => response.json())
    .then(json => this.setState({
      blogPosts: json.items
    }))
  }


  render() {
    if (this.state.blogPosts === []) {
      return <div>Loading..</div>
    }
    console.log(this.state.blogPosts)
    debugger
    return(
      <div className="blog">
        <div className="section-header">Blog Posts</div>
      </div>
    )
  }
}

export default withRouter(Blog)
