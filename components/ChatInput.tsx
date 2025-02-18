"use client";

import { MessageType } from "@/types/type";
import React, { useState } from "react";
import { ImArrowUpRight2 } from "react-icons/im";
import { TbPaperclip } from "react-icons/tb";

type Props = {
  handleMessage: (message: MessageType) => void,
};

const ChatInput = ({ handleMessage }: Props) => {
  const [prompt, setPrompt] = useState("");

  const sendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!prompt) return;

    handleMessage({ avatar: "user", text: prompt });
    setPrompt("");

    try {
      const res = await fetch("/api/askchat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: prompt.trim(),
          modelName: "gpt-4o-mini",
        }),
      });
      
      const data = await res.json();
      if (res.status === 200) {
        handleMessage({ avatar: "ai", text: data.answer });
      } else {
        console.error(data.error);
      }
    } catch (error) {
      console.error("Error sending message", error);
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center mx-auto pt-3 px-4">
      <form 
        onSubmit={(e) => sendMessage(e)}
        className="bg-white/10 rounded-full flex items-center px-4 py-2.5 w-full"
      >
        <TbPaperclip className="text-2xl -rotate-45 text-white" />
        <input 
          type="text" 
          placeholder="Message..." 
          onChange={(e) => setPrompt(e.target.value)}
          value={prompt}
          className="bg-transparent text-white placeholder:text-gray-400 font-medium tracking-wide px-3 outline-none w-full" 
        />
        <button 
          type="submit"
          disabled={!prompt} 
          className="p-2.5 rounded-full text-black bg-white disabled:bg-white/30"
        >
          <ImArrowUpRight2 className="text-sm -rotate-45 text-black/80"/>
        </button>
      </form>

      <p className="text-xs mt-2 font-medium tracking-wide">LLM can make mistakes. Check important info.</p>
    </div>
  );
};

export default ChatInput;