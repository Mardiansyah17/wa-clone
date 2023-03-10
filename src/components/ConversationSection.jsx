import { faArchive, faCheckDouble, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ChatItem from "./ChatItem";
import HeaderConversation from "./HeaderConversation";
import SearchConversation from "./SearchConversation";

export default function ConversationSection({ chatSelected }) {
  return (
    <div className=" basis-[30%] bg-[#111B21]  border-r border-[#1d2429]">
      <HeaderConversation />
      <SearchConversation />
      <div className="flex items-center space-x-3 mt-4 text-lg px-4">
        <FontAwesomeIcon icon={faArchive} className="text-[#038E72]" />
        <h4 className=" w-full border-b border-slate-600">Diarsipkan</h4>
      </div>
      <div className="mt-5">
        <ChatItem chatSelected={chatSelected} />
        <ChatItem chatSelected={chatSelected} />
        <ChatItem chatSelected={chatSelected} />
        <ChatItem chatSelected={chatSelected} />
        <ChatItem chatSelected={chatSelected} />
      </div>
    </div>
  );
}
