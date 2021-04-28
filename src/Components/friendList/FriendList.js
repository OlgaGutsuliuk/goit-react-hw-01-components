import React from "react";
import PropTypes from "prop-types";
import FriendListItem from "./friendListItem/FriendListItem";
import {friend} from './friendListItem/FriendListItem.module.css'

const FriendList = ({ friends }) => {
  return (
    <ul className={friend}>
      {friends.map(friend => (
        <FriendListItem  {...friend} key={friend.id} />
      ))}
    </ul>
  );
};

export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.object
  ).isRequired,
};
