import React from 'react';
import PropTypes from "prop-types";
import { red, green, item } from './FriendListItem.module.css';

const FriendListItem = ({avatar, isOnline, name}) => {
    return (
       <li className={item}>
          <span className={isOnline? green : red }></span>
          <img className="avatar" src={avatar} alt={name} width="48" />
          <p className="name">{name}</p>
        </li> 
    );
}

export default FriendListItem;

FriendListItem.propTypes = {
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
}