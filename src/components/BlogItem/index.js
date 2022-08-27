// Write your JS code hereimpo
import './index.css'

const BlogItem = props => {
  const {each} = props
  const {title, id, author, imageUrl, avatarUrl, topic} = each
  return (
    <li className="li">
      <div className="blog-container">
        <div>
          <img src={imageUrl} alt={`imageUrl${id}`} className="Img" />
        </div>
        <div className="Img-side">
          <p>{title}</p>
          <p>{topic}</p>
          <div className="author-session">
            <img src={avatarUrl} alt={`avatarUrl${id}`} className="avatarImg" />
            <p>{author}</p>
          </div>
        </div>
      </div>
    </li>
  )
}
export default BlogItem
