import React from 'react'
import PropTypes from 'prop-types';
import style from './Profile.module.css';

const Profile = ({user}) => {
    return (
        <div className={style.profile}>
  <div className="description">
    <img
      src={user.avatar} 
      alt={user.name}
      className={style.avatar}
    />
    <p className={style.name}>{user.name}</p>
          <p className={style.tag}>@{user.tag}</p>
    <p className={style.locat}>{user.location}</p>
  </div>

  <ul className={style.list}>
    <li className={style.item}>
      <span className="label">Followers</span>
      <span className="quantity">{user.stats.followers}</span>
    </li>
    <li className={style.item}>
      <span className="label">Views</span>
      <span className="quantity">{user.stats.views}</span>
    </li>
    <li className={style.item}>
      <span className="label">Likes</span>
      <span className="quantity">{user.stats.likes}</span>
    </li>
  </ul>
</div>
    );
}

export default Profile;

Profile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
    })
    }).isRequired,
};
