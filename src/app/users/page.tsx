"use client";
import {
  CustomHeaderFilter,
  CustomPagination,
  CustomTable,
} from "@/components/index";

export default function UsersPage() {
  return (
    <div className="layout-content-container flex flex-col flex-1 pr-5">
      <CustomHeaderFilter
        title="Users"
        add_title="Add User"
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

      <CustomTable
        columns={[
          { header: "Name", accessor: "name" },
          { header: "Email", accessor: "email" },
          { header: "Role", accessor: "role" },
          { header: "Status", accessor: "status", widthClass: "w-[60px]" },
          { header: "Action", accessor: "actions", widthClass: "w-[60px]" },
        ]}
        data={[
          {
            name: "John Doe",
            email: "john@example.com",
            role: "Admin",
            status: (
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#2b3630] text-white text-sm font-medium leading-normal w-full">
                <span className="truncate">Active</span>
              </button>
            ),
            actions: (
              <span className="text-[#a1b5ab] font-bold">Edit/Delete</span>
            ),
          },
          {
            name: "Jane Smith",
            email: "jane@example.com",
            role: "User",
            status: (
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#2b3630] text-white text-sm font-medium leading-normal w-full">
                <span className="truncate">Active</span>
              </button>
            ),
            actions: (
              <span className="text-[#a1b5ab] font-bold">Edit/Delete</span>
            ),
          },
        ]}
        details_url={""}
      />

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
