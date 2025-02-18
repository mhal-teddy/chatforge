"use client";

import { useRouter } from "next/navigation";
import { FaPlus } from "react-icons/fa";

const NewChat = () => {
  const router = useRouter();
  
  const createNewChat = async() => {
    router.push(`/chat/`);
  };

  return (
    <button 
      onClick={createNewChat}
      className="
      flex items-center justify-center gap-2 w-full
      border border-white/50 text-xs md:text-base px-2 py-1 rounded-md
    text-white/80 hover:border-white/80 hover:text-white duration-300
    ">
      <FaPlus />
      New Chat
    </button>
  );
};

export default NewChat;