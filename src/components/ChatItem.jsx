import { faCheckDouble } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import CheckIcon from "./icon/CheckIcon";

export default function ChatItem({ chatSelected }) {
  return (
    <div
      onClick={chatSelected}
      className="flex cursor-pointer items-center mb-4  space-x-3 text-[#E9ECEC] px-3"
    >
      <img src="/public/mark.jpg" className="w-10 rounded-full h-10 object-fill" alt="" />
      <div className="border-b border-slate-600 pb-2 w-full ">
        <div className="flex items-center justify-between">
          <span className="font-semibold">Bedul</span>
          <span className="text-xs">19:00</span>
        </div>
        <div className="flex items-center space-x-1">
          <CheckIcon />
          <span>Oke</span>
        </div>
      </div>
    </div>
  );
}
