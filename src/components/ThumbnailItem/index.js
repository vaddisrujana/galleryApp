import './index.css'

const ThumbnailItem = props => {
  const {imagesList, onclick} = props
  const {thumbnailUrl, id, thumbnailAltText} = imagesList

  const clicked = () => {
    onclick(id)
  }
  return (
    <li>
      <button type="button" onClick={clicked} className="button">
        <img src={thumbnailUrl} alt={thumbnailAltText} />
      </button>
    </li>
  )
}
export default ThumbnailItem
