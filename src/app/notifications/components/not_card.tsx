export default function NotificationsCard() {
  return (
    <div className="p-4 cursor-pointer">
      <div className="flex items-stretch justify-between gap-4 rounded-xl bg-[#1b2721] p-4 shadow-[0_0_4px_rgba(0,0,0,0.1)]">
        <div className="flex flex-col gap-1 flex-[2_2_0px]">
          <p className="text-white text-base font-bold leading-tight">
            New Lead Assigned
          </p>
          <p className="text-[#9cbaaa] text-sm font-normal leading-normal">
            A new lead, Sophia Rodriguez, has been assigned to you.
          </p>
          <p className="text-[#9cbaaa] text-sm font-normal leading-normal text-right">
            2023-09-20 10:00 AM
          </p>
        </div>
      </div>
    </div>
  );
}
