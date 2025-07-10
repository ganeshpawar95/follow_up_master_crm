"use client";
import React, { useState } from "react";
import ChatCard from "../../components/chat_card";
import { DatePicker } from "antd";
import { CustomTable, ChatInput } from "@/components";

const TABS = [
  { label: "Lead Info" },
  { label: "Conversation History" },
  { label: "Reminders" },
];

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

export default function LeadDetailsPage() {
  const [activeTab, setActiveTab] = useState(0);

  function renderTabContent() {
    switch (activeTab) {
      case 0:
        return (
          <div className="flex items-stretch justify-between gap-4 rounded-xl pt-4 p-4">
            <div className="flex flex-col gap-1 flex-[2_2_0px]">
              <p className="text-white text-base font-bold leading-tight">
                Ethan Carter
              </p>
              <p className="leading-tight text-white font-bold my-2">
                Email:{" "}
                <span className=" text-[#a1b5ab] text-sm font-normal leading-normal">
                  ethan.carter@email.com
                </span>
              </p>
              <p className="text-[#a1b5ab] text-sm font-normal leading-normal my-2">
                <span className="leading-tight font-bold text-white ">
                  Phone:
                </span>{" "}
                (555) 123-4567
              </p>
              <p className="text-[#a1b5ab] text-sm font-normal leading-normal my-2">
                <span className="leading-tight font-bold text-white ">
                  Status:
                </span>{" "}
                New
              </p>
              <p className="text-[#a1b5ab] text-sm font-normal leading-normal my-2">
                <span className="leading-tight font-bold text-white ">
                  Agent:
                </span>{" "}
                Agent 1
              </p>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="flex flex-col h-full p-4">
            {/* User type select and chat input in one row */}
            {/* Filter by date */}
            {/* Chat list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {leadUsers.map((user) => (
                <ChatCard key={user.id} user={user} />
              ))}
            </div>
          </div>
        );
      case 2:
        return (
          <div className="flex flex-col h-full">
            <CustomTable
              columns={[
                { header: "Reminder", accessor: "reminder" },
                {
                  header: "Reminder Description",
                  accessor: "reminder_description",
                },

                { header: "Lead Name", accessor: "lead_name" },

                { header: "Assigned Agent", accessor: "assigned_agent" },
                { header: "Reminder Type", accessor: "reminder_type" },
                { header: "Reminder Date", accessor: "reminder_date" },
                { header: "Reminder Time", accessor: "reminder_time" },
                {
                  header: "Reminder Status",
                  accessor: "reminder_status",
                  widthClass: "w-[60px]",
                },

                {
                  header: "Action",
                  accessor: "actions",
                  widthClass: "w-[60px]",
                },
              ]}
              data={[
                {
                  reminder: "Reminder 1",
                  reminder_description: "Reminder 1",
                  lead_name: "John Doe",
                  assigned_agent: "Ganesh Pawar",
                  reminder_type: "Email",
                  reminder_date: "2023-09-15",
                  reminder_time: "10:00 AM",
                  reminder_status: (
                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#2b3630] text-white text-sm font-medium leading-normal w-full">
                      <span className="truncate">Pending</span>
                    </button>
                  ),
                  actions: (
                    <span className="text-[#a1b5ab] font-bold">
                      Edit/Delete
                    </span>
                  ),
                },
                {
                  reminder: "meetting with client",
                  reminder_description: "Reminder 1",
                  lead_name: "Jane Smith",
                  assigned_agent: "Ganesh Pawar",
                  reminder_type: "Email",
                  reminder_date: "2023-09-15",
                  reminder_time: "10:00 AM",
                  reminder_status: (
                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#2b3630] text-white text-sm font-medium leading-normal w-full">
                      <span className="truncate">Completed</span>
                    </button>
                  ),
                  actions: (
                    <span className="text-[#a1b5ab] font-bold">
                      Edit/Delete
                    </span>
                  ),
                },
              ]}
              details_url={"leads/details"}
            />
          </div>
        );
      default:
        return null;
    }
  }

  return (
    <div className="layout-content-container flex flex-col  flex-1  px-3 pr-5">
      <div className="flex flex-wrap gap-2 p-4">
        <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 bg-[#d2f3e2] text-[#121714] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
          <div
            className="text-[#121714]"
            data-icon="ArrowLeft"
            data-size="20px"
            data-weight="fill"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              height="20px"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M224,128a8,8,0,0,1-8,8H120v64a8,8,0,0,1-13.66,5.66l-72-72a8,8,0,0,1,0-11.32l72-72A8,8,0,0,1,120,56v64h96A8,8,0,0,1,224,128Z"></path>
            </svg>
          </div>
        </button>

        <a
          className="text-[#a1b5ab] text-base font-medium leading-normal  self-center"
          href="#"
        >
          Leads
        </a>
        <span className="text-[#a1b5ab] text-base font-medium leading-normal self-center">
          /
        </span>
        <span className="text-white text-base font-medium leading-normal self-center">
          Lead Details
        </span>
      </div>
      <div className="flex flex-wrap justify-between gap-3 p-4">
        <div className="flex min-w-72 flex-col gap-3">
          <p className="text-white tracking-light text-[32px] font-bold leading-tight">
            Lead: Ethan Carter
          </p>
          <p className="text-[#a1b5ab] text-sm font-normal leading-normal">
            Lead ID: 1234567890
          </p>
        </div>
      </div>
      <div className="pb-3">
        <div className="flex border-b border-[#3f5047] px-4 gap-8">
          {TABS.map((tab, idx) => (
            <>
              <button
                key={tab.label}
                className={`flex flex-col items-center cursor-pointer justify-center  border-b-[3px] pb-[13px] pt-4 bg-transparent ${
                  activeTab === idx
                    ? "border-b-white text-white"
                    : "border-b-transparent text-[#a1b5ab]"
                }`}
                onClick={() => setActiveTab(idx)}
                type="button"
              >
                <p
                  className={`text-sm font-bold leading-normal tracking-[0.015em] ${
                    activeTab === idx ? "text-white" : "text-[#a1b5ab]"
                  }`}
                >
                  {tab.label}
                </p>
              </button>
            </>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap justify-between gap-3 pt-4 pr-5">
        <h2 className="text-white text-[22px] min-w-72 font-bold leading-tight tracking-[-0.015em] px-4 pb-3 ">
          {TABS[activeTab].label === "Lead Info"
            ? "Lead Information"
            : TABS[activeTab].label}
        </h2>
        {["Reminders", "Conversation History"].includes(
          TABS[activeTab].label
        ) && (
          <button
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#283930] text-white text-sm font-medium leading-normal"
            // onClick={onAdd}
          >
            <span className="truncate">{"Add " + TABS[activeTab].label}</span>
          </button>
        )}
      </div>
      {renderTabContent()}
    </div>
  );
}
