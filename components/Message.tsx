import { MessageType } from "@/types/type";
import { PiUserBold } from "react-icons/pi";
import { RiRobot2Line } from "react-icons/ri";

const Message = ({ messages }: { messages: MessageType[] }) => {
  return (
    <div className="gap-2">
      {messages.map((message, index) => (
        <div key={index} className="flex flex-row gap-5 max-w-4xl mx-auto my-2">
          {message.avatar === "ai" ? (
            <RiRobot2Line className="w-9 h-9 p-1 border border-gray-600 rounded-full" />
          ) : (
            <PiUserBold className="w-9 h-9 p-1 border border-gray-600 rounded-full" />
          )}
          <p className="px-2 py-1 bg-zinc-700 rounded-md">{message.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Message;