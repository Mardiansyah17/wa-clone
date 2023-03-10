import { faMicrophone, faPaperclip, faSmile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function InputChat() {
  return (
    <div className="flex items-center h-[11%] px-3 bg-[#202C33] py-3">
      <FontAwesomeIcon icon={faSmile} className="mr-4" size="xl" />
      <FontAwesomeIcon icon={faPaperclip} className="mr-4" size="xl" />
      <input
        type="text"
        placeholder="Ketik pesan"
        className="w-full border-none outline-none text-[#D1D7DB] bg-[#2a3942] rounded-md p-3 "
      />
      <FontAwesomeIcon icon={faMicrophone} className="ml-4" size="xl" />
    </div>
  );
}
