import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, activateUserId, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = imageDetails

  const onChange = () => {
    activateUserId(id)
  }

  const isActiveId = isActive ? `thumbnail active` : `thumbnail`

  return (
    <li className="list-items">
      <button type="button" className="btn">
        <img
          src={thumbnailUrl}
          className={isActiveId}
          alt={thumbnailAltText}
          onClick={onChange}
        />
      </button>
    </li>
  )
}
export default ThumbnailItem
