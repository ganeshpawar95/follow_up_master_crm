"use client";
import {
  CustomHeaderFilter,
  CustomPagination,
  CustomTable,
} from "@/components/index";
import NotificationsCard from "./components/not_card";

export default function NotificationPage() {
  return (
    <div className="layout-content-container flex flex-col flex-1 pr-5">
      <CustomHeaderFilter
        title="Notifications Center"
        is_filter={false}
        is_add={false}
        is_search={false}
      />
      <NotificationsCard />
      <NotificationsCard />
      <NotificationsCard />
      <NotificationsCard />

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
