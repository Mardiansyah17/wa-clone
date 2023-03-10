import { faEllipsisV, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function HeaderChat() {
  return (
    <div className="flex justify-between bg-[#202C33] py-2 px-10 w-full h-[9%]">
      <div className="flex items-center space-x-3 text-base font-semibold text-white">
        <img src="/public/mark.jpg" className="w-10 rounded-full h-10 object-fill" alt="" />
        <h3>Bedul</h3>
      </div>
      <div className="flex items-center space-x-10 text-xl">
        <FontAwesomeIcon icon={faSearch} />
        <FontAwesomeIcon icon={faEllipsisV} />
      </div>
    </div>
  );
}
