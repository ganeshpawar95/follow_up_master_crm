// Removed DatePicker and ChatInput, improved card layout with user image, conversation title, details, and datetime
"use client";
import { CustomHeaderFilter, CustomPagination } from "@/components";

const leadUsers = [
  {
    id: 1,
    name: "John Doe",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    conversationTitle: "Meeting Reminder",
    lastMessage: "See you tomorrow!",
    datetime: "2024-06-10 14:32",
  },
  {
    id: 2,
    name: "Jane Smith",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    conversationTitle: "Document Submission",
    lastMessage: "Sent the documents.",
    datetime: "2024-06-10 13:15",
  },
  {
    id: 3,
    name: "Alex Johnson",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    conversationTitle: "Thank You Note",
    lastMessage: "Thank you!",
    datetime: "2024-06-09 18:45",
  },
];

export default function ConversationsPage() {
  return (
    <div className="layout-content-container flex flex-col flex-1 ">
      <CustomHeaderFilter
        title="Conversations"
        add_title="Add Conversation"
        selectBoxes={[
          {
            options: [
              { label: "Lead", value: "Lead" },
              { label: "New", value: "new" },
            ],
            selectedOption: "Lead",
            onChange: (value) => console.log("Selected:", value),
          },
          {
            options: [
              { label: "Date", value: "Date" },
              { label: "New", value: "new" },
            ],
            selectedOption: "Date",
            onChange: (value) => console.log("Selected:", value),
          },
        ]}
      />

      {/* Card view for leads */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 p-4">
        {leadUsers.map((user) => (
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
                <div className="text-white font-semibold text-lg">
                  {user.name}
                </div>
                <div className="text-green-400 text-sm font-medium">
                  {user.conversationTitle}
                </div>
              </div>
            </div>
            <div className="text-gray-300 text-sm mt-2">{user.lastMessage}</div>
            <div className="text-gray-500 text-xs mt-1">{user.datetime}</div>
          </div>
        ))}
      </div>
      <CustomPagination
        currentPage={1}
        totalPages={10}
        onPageChange={function (page: number): void {
          throw new Error("Function not implemented.");
        }}
      />
    </div>
  );
}
