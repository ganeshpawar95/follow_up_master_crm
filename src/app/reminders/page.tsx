"use client";
import {
  CustomHeaderFilter,
  CustomPagination,
  CustomTable,
} from "@/components/index";
import ReminderCard from "./components/reminder_card";

export default function RemindersPage() {
  return (
    <div className="layout-content-container flex flex-col flex-1 pr-5">
      <CustomHeaderFilter
        title="Reminders"
        add_title="Add Reminder"
        selectBoxes={[
          {
            options: [
              { label: "Roles", value: "Roles" },
              { label: "New", value: "new" },
            ],
            selectedOption: "Roles",
            onChange: (value) => console.log("Selected:", value),
          },
          {
            options: [
              { label: "Status", value: "Status" },
              { label: "New", value: "new" },
            ],
            selectedOption: "Status",
            onChange: (value) => console.log("Selected:", value),
          },
        ]}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 p-2 pl-5">
        {[
          {
            reminder: "Reminder 1",
            reminder_description: "Reminder 1",
            lead_name: "John Doe",
            lead_image: "https://randomuser.me/api/portraits/men/32.jpg",
            assigned_agent: "Ganesh Pawar",
            reminder_type: "Email",
            reminder_date: "2023-09-15",
            reminder_time: "10:00 AM",
            reminder_status: "Pending",
          },
          {
            reminder: "Meeting with client",
            reminder_description: "Reminder 1",
            lead_name: "Jane Smith",
            lead_image: "https://randomuser.me/api/portraits/women/44.jpg",
            assigned_agent: "Ganesh Pawar",
            reminder_type: "Email",
            reminder_date: "2023-09-15",
            reminder_time: "10:00 AM",
            reminder_status: "Completed",
          },
        ].map((item, idx) => (
          <ReminderCard key={idx} item={item} />
        ))}
      </div>

      <CustomPagination
        currentPage={1}
        totalPages={10}
        onPageChange={(page: number) => {
          console.log("Page changed to:", page);
        }}
      />
    </div>
  );
}
