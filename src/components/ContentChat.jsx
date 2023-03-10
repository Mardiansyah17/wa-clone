import React from "react";

function ChatPeople() {
  return (
    <div class="flex items-center mb-4 w-fit">
      <div class="flex-none flex flex-col items-center space-y-1 mr-4">
        <img class="rounded-full w-10 h-10" src="/public/mark.jpg" />
      </div>
      <div class="flex-1 bg-[#202c33] text-white p-2 rounded-lg mb-2 relative">
        <div>Pasti tidak bisa chating</div>

        <div class="absolute left-0 top-1/2 transform -translate-x-1/2 rotate-45 w-2 h-2 bg-[#202c33]"></div>
      </div>
    </div>
  );
}
function ChatMe() {
  return (
    <div className="flex justify-end">
      <div class="flex items-center flex-row-reverse mb-4 w-fit">
        <div class="flex-none flex flex-col items-center space-y-1 mr-4">
          <img class="rounded-full w-10 h-10 ml-4" src="/public/mark.jpg" />
        </div>
        <div class="flex-1 bg-[#005C4B] text-white p-2 rounded-lg mb-2 relative">
          <div>Lagi ngelawak?</div>

          <div class="absolute right-0 top-1/2 transform translate-x-1/2 -rotate-45 w-2 h-2 bg-[#005C4B]"></div>
        </div>
      </div>
    </div>
  );
}

export default function ContentChat() {
  return (
    <div className=" p-3 h-[80%] ">
      <ChatPeople />
      <ChatMe />
    </div>
  );
}
