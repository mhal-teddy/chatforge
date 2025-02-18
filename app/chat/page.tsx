"use client";

import ChatInput from "@/components/ChatInput";
import Message from "@/components/Message";
import { MessageType } from "@/types/type";
import { useState } from "react";

const ChatPage = () => {
  const [messages, setMessages] = useState<MessageType[]>([]);

  const handleMessage = (newMessage: MessageType) => {
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  return (
    <div className="flex flex-col justify-center h-full p-5 overflow-hidden">
      <div className="flex-1 overflow-y-scroll pt-10">
        <Message messages={messages} />
      </div>
      <ChatInput handleMessage={handleMessage} />
    </div>
  );
};

export default ChatPage;