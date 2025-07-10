"use client";
import { CustomHeaderFilter, CustomPagination } from "@/components/index";
import LeadCard from "./components/lead_card";
import AddLeadModal from "./components/add_lead";
import { useEffect, useState } from "react";
import { Form } from "antd";
import dayjs from "dayjs";

interface Lead {
  id: string | number;
  image: string;
  name: string;
  email: string;
  status: string;
  phone: string;
  address: string;
  assigned_agent_name: string;
  leadSource: string;
  leadType: string;
  nextReminder: string;
}

export default function LeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [visibleAdd, setVisibleAdd] = useState(false);
  const [loading, setLoading] = useState(false);

  const [filters, setFilters] = useState({
    search_name: "",
    status: "",
    agent: "",
    startDate: "",
    endDate: "",
  });

  const [form] = Form.useForm();
  const [editingLead, setEditingLead] = useState<Lead | null>(null);

  const buildQuery = () => {
    const params = new URLSearchParams();
    params.append("page", currentPage.toString());
    params.append("pageSize", "7");

    Object.entries(filters).forEach(([key, value]) => {
      if (value) params.append(key, value);
    });

    return params.toString();
  };

  const fetchLeads = async () => {
    try {
      setLoading(true);
      const query = buildQuery();
      const res = await fetch(`/api/leads?${query}`, { cache: "no-store" });
      if (!res.ok) throw new Error("Failed to fetch leads");
      const json = await res.json();
      setLeads(json.data || []);
      setTotalPages(json.totalPages || 1);
    } catch (error) {
      console.error("Error fetching leads:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, [currentPage, filters]);

  const closeModal = () => {
    setVisibleAdd(false);
    form.resetFields();
    setEditingLead(null);
  };

  const onSubmit = async (values: any) => {
    try {
      const payload = {
        ...values,
        createdById: "admin", // Hardcoded creator
        nextReminder: values.nextReminder
          ? values.nextReminder.toISOString()
          : null,
      };
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Failed to add lead");
      closeModal();
      fetchLeads(); // Refresh list
    } catch (error) {
      console.error("Error adding lead:", error);
    }
  };

  const onSubmitUpdate = async (values: any) => {
    try {
      if (!editingLead) return;
      const payload = {
        ...values,
        nextReminder: values.nextReminder
          ? values.nextReminder.toISOString()
          : null,
      };
      const res = await fetch(`/api/leads/${editingLead.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Failed to update lead");
      closeModal();
      fetchLeads();
    } catch (error) {
      console.error("Error updating lead:", error);
    }
  };

  const onSubmitDelete = async (lead: Lead) => {
    try {
      const res = await fetch(`/api/leads/${lead.id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
      if (!res.ok) throw new Error("Failed to delete lead");
      fetchLeads(); // Refresh
    } catch (error) {
      console.error("Error deleting lead:", error);
    }
  };

  return (
    <div className="layout-content-container flex flex-col flex-1 pr-5">
      <CustomHeaderFilter
        title="Leads"
        search_name={filters.search_name}
        onChange={(value) =>
          setFilters((prev) => ({ ...prev, search_name: value }))
        }
        onAdd={() => setVisibleAdd(true)}
        add_title="Add Lead"
        exportData={(format) => {
          window.location.href = `/api/leads/export?format=${format}`;
        }}
        is_filter={true}
        selectBoxes={[
          {
            options: [
              { label: "Status", value: "" },
              { label: "Active", value: "Active" },
              { label: "Inactive", value: "Inactive" },
            ],
            selectedOption: filters.status,
            onChange: (value) =>
              setFilters((prev) => ({ ...prev, status: value })),
          },
          {
            options: [
              { label: "Agent", value: "" },
              { label: "Admin", value: "Admin" },
              { label: "Agent1", value: "Agent1" },
              { label: "Agent2", value: "Agent2" },
            ],
            selectedOption: filters.agent,
            onChange: (value) =>
              setFilters((prev) => ({ ...prev, agent: value })),
          },
        ]}
      />

      {loading ? (
        <div className="text-center py-4 text-gray-500">Loading leads...</div>
      ) : leads.length === 0 ? (
        <div className="text-center py-8 text-gray-400 text-lg">
          No leads found.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 ml-5">
          {leads.map((lead) => (
            <LeadCard
              key={lead.id}
              lead={lead}
              onEdit={(leadObj) => {
                setEditingLead(leadObj);
                form.resetFields();
                form.setFieldsValue({
                  ...leadObj,
                  nextReminder: leadObj.nextReminder
                    ? dayjs(leadObj.nextReminder)
                    : null,
                });
                setVisibleAdd(true);
              }}
              onDelete={onSubmitDelete}
            />
          ))}
        </div>
      )}

      <CustomPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />

      <AddLeadModal
        title={editingLead ? "Edit Lead" : "Add Lead"}
        button_title={editingLead ? "Update Lead" : "Add Lead"}
        form={form}
        visible={visibleAdd}
        onCancel={closeModal}
        onAdd={(values) => {
          if (editingLead) {
            onSubmitUpdate(values);
          } else {
            onSubmit(values);
          }
        }}
      />
    </div>
  );
}
