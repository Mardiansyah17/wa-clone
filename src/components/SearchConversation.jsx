import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function SearchConversation() {
  return (
    <div className="mt-3 w-full flex items-center space-x-3 px-4">
      <div className="flex items-center w-full bg-[#26323A] px-3 py-2 space-x-3 rounded-lg">
        <FontAwesomeIcon className="" icon={faSearch} />
        <input
          type="text"
          placeholder="Cari atau mulai chat baru"
          className="border-none bg-transparent outline-none  w-full text-white"
        />
      </div>
      <FontAwesomeIcon icon={faBars} className="" />
    </div>
  );
}
