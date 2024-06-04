import {MdDelete} from 'react-icons/md'
import './index.css'

const TracksList = props => {
  const {eachTrack, onClickDeleteIcon} = props
  const {id, imageUrl, name, genre, duration} = eachTrack

  const onClickDelete = () => {
    onClickDeleteIcon(id)
  }

  return (
    <li className="track-list-container">
      <div className="logo-and-name-container">
        <img src={imageUrl} alt="track" className="image" />
        <div className="name-container">
          <p className="name-heading">{name}</p>
          <p className="genre-name">{genre}</p>
        </div>
      </div>
      <div className="delete-container">
        <p className="duration">{duration}</p>
        <button
          type="button"
          className="delete-icon-button"
          onClick={onClickDelete}
          data-testid="delete"
        >
          <MdDelete className="delete-icon" />.
        </button>
      </div>
    </li>
  )
}

export default TracksList
