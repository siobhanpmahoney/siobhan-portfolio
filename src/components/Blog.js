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
    fetch("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40siobhanpmahoney&api_key=fgfu47vqlvoulntzy01nfyvkyvms4vzvit2lgolw&order_by=pubDate&order_dir=desc&count=20")
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

    return(
      <div className="blog">
        <div className="section-header">Blog Posts</div>

        <section className="blog-posts">
          {this.state.blogPosts.map((post) => {
            if(post.title.length > 1) {
            return <div className="postWrapper">
              <div className="blog">
              <div className="blogPostImgWrapper">
                <div className="blogPostImg" style={{backgroundImage: `url(${post.thumbnail})`}} />
              </div>

              <div className="blogTextWrapper">

                <div className="blogText">

                  <div className="blogPostDate">
                    {this.formattedDate(post.pubDate)}
                  </div>

              <div className="blogPostTitle">
                <a href={post.link} target="_blank">{post.title}</a>
              </div>

              <div className="blogPostTopic">
                Topics: {post.categories.map((t) => t).join(", ")}
              </div>





          </div>

            </div>

          </div>
            </div>
          }
          })}
        </section>
      </div>
    )
  }
}

export default withRouter(Blog)
