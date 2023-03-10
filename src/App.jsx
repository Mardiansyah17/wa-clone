import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import Content from "./components/Content";
import ConversationSection from "./components/ConversationSection";

export default function App() {
  const [openChat, setOpenChat] = useState(false);
  useEffect(() => {
    document.addEventListener("keydown", function (event) {
      if (event.key === `Escape`) {
        setOpenChat(false);
      }
    });
  }, []);

  return (
    <>
      <div
        className="hidden bg-[#222E35] h-screen w-screen sm:flex text-[#697881]
    "
      >
        <ConversationSection chatSelected={() => setOpenChat(true)} />
        <Content openChat={openChat} />
      </div>
    </>
  );
}
