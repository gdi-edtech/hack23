import React from "react";
import Avatar from "react-avatar";

const UserAvatar = ({ name, size = "70" }) => {
  return <Avatar size={size} round={true} name={name} />;
};

export default UserAvatar;
