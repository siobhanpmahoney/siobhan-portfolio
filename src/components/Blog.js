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
    fetch("https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fmedium.com%2Ffeed%2F%40siobhanpmahoney%2F")
    .then(response => response.json())
    .then(json => this.setState({
      blogPosts: json.items
    }))
  }

    formattedDate = (date) => {
      let theDate = new Date(date).toLocaleDateString()

      return `${theDate}`
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

        <section className="blog-posts">
          {this.state.blogPosts.map((post) => {
            return<div className="post">
              <div className="blogPostImg">
                <img className="blogPostImg" src={post.thumbnail} />
              </div>
              <div className="blogPostTitle"><a href={post.link} target="_blank">{post.title}</a></div>
              <div className="blogPostDate">{this.formattedDate(post.pubDate)}</div>

            <div className="blogPostTopic">
              Topics: {post.categories.map((t) => t).join(", ")}
            </div>

            </div>
          })}
        </section>
      </div>
    )
  }
}

export default withRouter(Blog)
