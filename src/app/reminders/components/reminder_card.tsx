type ReminderCardProps = {
  item: {
    reminder: string;
    reminder_description: string;
    lead_name: string;
    lead_image: string;
    assigned_agent: string;
    reminder_type: string;
    reminder_date: string;
    reminder_time: string;
    reminder_status: string;
  };
  idx?: number;
};

export default function ReminderCard({ item, idx }: ReminderCardProps) {
  return (
    <div
      key={idx}
      className="bg-gradient-to-b from-[#1e2d24] to-[#22332a] border-2 border-[#3f5047] rounded-xl shadow-lg p-6 flex flex-col gap-3 relative overflow-hidden"
    >
      {/* Decorative chat bubble tail */}
      <div className="absolute left-8 -bottom-3 w-6 h-6 bg-[#22332a] rounded-br-xl rotate-45 z-0"></div>
      <div className="flex items-center gap-4 z-10">
        <img
          src={item.lead_image}
          alt={item.lead_name}
          className="w-14 h-14 rounded-full object-cover border-2 border-[#3f5047] shadow"
        />
        <div>
          <div className="font-semibold text-lg text-[#e0f2e9]">
            {item.lead_name}
          </div>
          <div className="text-sm text-[#b6cfc3]">{item.assigned_agent}</div>
        </div>
      </div>
      <div className="z-10">
        <div className="font-medium text-[#e0f2e9] text-base">
          {item.reminder}
        </div>
        <div className="text-sm text-[#b6cfc3]">
          {item.reminder_description}
        </div>
      </div>
      <div className="flex flex-wrap gap-2 text-xs z-10">
        <span className="bg-[#2b3630] px-2 py-1 rounded-full text-[#e0f2e9] font-medium">
          {item.reminder_type}
        </span>
        <span className="bg-[#2b3630] px-2 py-1 rounded-full text-[#e0f2e9] font-medium">
          {item.reminder_date}
        </span>
        <span className="bg-[#2b3630] px-2 py-1 rounded-full text-[#e0f2e9] font-medium">
          {item.reminder_time}
        </span>
      </div>
      <div className="flex items-center justify-between mt-2 z-10">
        <button
          className={`flex items-center justify-center rounded-full h-8 px-4 text-white text-sm font-semibold shadow transition ${
            item.reminder_status === "Pending"
              ? "bg-[#3f5047] hover:bg-[#2b3630]"
              : "bg-green-700 hover:bg-green-800"
          }`}
        >
          <span className="truncate">{item.reminder_status}</span>
        </button>
        <span className="text-[#b6cfc3] font-bold cursor-pointer hover:underline transition">
          Edit/Delete
        </span>
      </div>
    </div>
  );
}
