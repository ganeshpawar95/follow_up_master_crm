"use client";

import Link from "next/link";
import React from "react";

export interface TableColumn {
  header: string;
  accessor: string;
  widthClass?: string;
}

export interface CustomTableProps {
  columns: TableColumn[];
  details_url: string;
  data: Record<string, React.ReactNode>[];
}

export default function CustomTable({
  columns,
  details_url = "",
  data,
}: CustomTableProps) {
  return (
    <div className="px-4 py-3">
      <div className="flex overflow-hidden rounded-xl border border-[#3f5047] bg-[#121714]">
        <table className="flex-1">
          <thead>
            <tr className="bg-[#1d2521]">
              {columns.map((col, index) => (
                <th
                  key={index}
                  className={`px-4 py-3 text-left text-white text-sm font-medium leading-normal ${
                    col.widthClass || "w-[200px]"
                  }`}
                >
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex} className="border-t border-t-[#3f5047]">
                {columns.map((col, colIndex) => (
                  <td
                    key={colIndex}
                    className={`px-4 py-4 text-sm font-normal leading-normal ${
                      col.widthClass || "w-[200px]"
                    } text-white`}
                  >
                    {col.accessor === "name" ? (
                      <Link
                        href={
                          details_url.length != 0
                            ? `/${details_url}/${row.id}`
                            : ""
                        }
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <img
                          src="/default_avatar.png" // Correct path
                          alt="profile"
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <span>{row[col.accessor]}</span>
                      </Link>
                    ) : (
                      row[col.accessor]
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
