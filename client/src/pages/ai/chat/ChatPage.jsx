import { useState } from "react";
import ChatWindow from "./ChatWindow";
import ChatInput from "./ChatInput";
import ChatHistory from "./ChatHistory";

export default function ChatPage() {
  const [chats, setChats] = useState([
    {
      id: 1,
      title: "First Chat",
      messages: [
        { role: "assistant", content: "Hi! How can I help you?" },
      ],
    },
  ]);

  const [activeChatId, setActiveChatId] = useState(1);

  const activeChat = chats.find((c) => c.id === activeChatId);

  const sendMessage = (message) => {
    setChats((prev) =>
      prev.map((chat) =>
        chat.id === activeChatId
          ? {
              ...chat,
              messages: [...chat.messages, message],
            }
          : chat
      )
    );
  };

  const createNewChat = () => {
    const newChat = {
      id: Date.now(),
      title: "New Chat",
      messages: [],
    };
    setChats([newChat, ...chats]);
    setActiveChatId(newChat.id);
  };

  return (
    <div className="flex h-[calc(100vh-64px)] bg-[#020617]">
      {/* Chat Area */}
      <div className="flex flex-col flex-1">
        <ChatWindow messages={activeChat?.messages || []} />
        <ChatInput onSend={sendMessage} />
      </div>

      {/* Right Sidebar */}
      <ChatHistory
        chats={chats}
        activeChatId={activeChatId}
        onSelect={setActiveChatId}
        onNewChat={createNewChat}
      />
    </div>
  );
}
