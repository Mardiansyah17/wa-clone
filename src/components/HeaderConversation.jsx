import { faCircle, faEllipsisV, faMessage, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import StatusIcon from "./icon/StatusIcon";
import mark from "/public/mark.jpg";
export default function HeaderConversation() {
  return (
    <div className="flex justify-between items-center bg-[#202C33] p-2">
      <img src={mark} className="w-10 rounded-full h-10 object-fill" alt="" />
      <div className="text-[#AEBAC1] text-md grid grid-cols-4 gap-4">
        <FontAwesomeIcon icon={faUserGroup} />
        <StatusIcon />
        <FontAwesomeIcon icon={faMessage} />
        <FontAwesomeIcon icon={faEllipsisV} />
      </div>
    </div>
  );
}
