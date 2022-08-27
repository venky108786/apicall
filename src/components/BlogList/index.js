// Write your JS code herec
import './index.css'
import {Component} from 'react'
import BlogItem from '../BlogItem'

class BlogList extends Component {
  state = {blogList: []}

  componentDidMount() {
    this.blogListData()
  }

  blogListData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    console.log(data)
    const updateBlogListData = {
      id: data.id,
      title: data.title,
      topic: data.topic,
      author: data.author,
      avatarUrl: data.avatar_url,
      imageUrl: data.image_url,
    }
    this.setState({blogList: updateBlogListData})
  }

  render() {
    const {blogList} = this.state
    return (
      <ul className="bg">
        {blogList.map(each => (
          <BlogItem each={each} key={each.id} />
        ))}
      </ul>
    )
  }
}
export default BlogList
