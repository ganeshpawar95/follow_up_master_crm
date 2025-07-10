import Image from "next/image";
export default function ChatCard({ user }: { user: any }) {
  return (
    <>
      <div
        key={user.id}
        className="bg-gradient-to-b from-[#1e2d24] to-[#22332a] border-2 border-[#3f5047] rounded-xl shadow-lg p-6 flex flex-col gap-3"
      >
        <div className="flex items-center gap-4">
          <img
            src={user.image}
            alt={user.name}
            className="w-12 h-12 rounded-full object-cover border-2 border-[#3f5047]"
          />
          <div>
            <div className="text-white font-semibold text-lg">{user.name}</div>
            <div className="text-green-400 text-sm font-medium">
              {user.conversationTitle}
            </div>
          </div>
        </div>
        <div className="text-gray-300 text-sm mt-2">{user.lastMessage}</div>
        <div className="text-gray-500 text-xs mt-1">{user.datetime}</div>
      </div>
    </>
  );
}
