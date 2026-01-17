export default function ChatHistory({
  chats,
  activeChatId,
  onSelect,
  onNewChat,
}) {
  return (
    <div className="w-62 border-l border-white/10 bg-[#020617] flex flex-col">
      <div className="p-4 border-b border-white/20">
        <button
          onClick={onNewChat}
          className="w-full bg-black text-white py-2 rounded-lg"
        >
          + New Chat
        </button>
      </div>

      <div className="flex-1 overflow-y-auto">
        {chats.map((chat) => (
          <div
            key={chat.id}
            onClick={() => onSelect(chat.id)}
            className={`px-4 py-3 cursor-pointer border-white/10 border-b text-sm ${
              activeChatId === chat.id
                ? "bg-gray-900 font-medium"
                : "hover:bg-gray-900"
            }`}
          >
            {chat.title}
          </div>
        ))}
      </div>
    </div>
  );
}
