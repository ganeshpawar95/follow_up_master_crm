import Link from "next/link";

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

export default function LeadCard({
  lead,
  onEdit,
  onDelete,
}: {
  lead: Lead;
  onEdit: (lead: Lead) => void;
  onDelete: (lead: Lead) => void;
}) {
  return (
    <div
      key={lead.id}
      className="bg-gradient-to-b from-[#1e2d24] to-[#22332a] border-2 border-[#3f5047] rounded-xl shadow-lg p-6 flex flex-col gap-3"
    >
      <Link
        className="flex items-center gap-4"
        href={`/leads/details/${lead.id}`}
      >
        <img
          src="/default_avatar.png"
          alt={lead.name}
          className="w-14 h-14 rounded-full border-2 border-green-400 object-cover"
        />
        <div>
          <div className="text-lg font-semibold text-white">{lead.name}</div>
          <div className="text-xs text-green-400">{lead.email}</div>
        </div>
        <span className="ml-auto px-3 py-1 rounded-full text-xs font-medium bg-green-200/20 text-green-300 border border-green-400">
          {lead.status}
        </span>
      </Link>
      <div className="grid grid-cols-2 gap-4 text-sm text-gray-200">
        <div>
          <span className="font-medium text-gray-400">Phone:</span> {lead.phone}
        </div>
        <div>
          <span className="font-medium text-gray-400">Assigned Agent:</span>{" "}
          {lead.assigned_agent_name}
        </div>
        <div>
          <span className="font-medium text-gray-400">Source:</span>{" "}
          {lead.leadSource}
        </div>
        {/* <div>
          <span className="font-medium text-gray-400">Lead Type:</span>{" "}
          {lead.leadType}
        </div> */}
        <div>
          <span className="font-medium text-gray-400">Follow-up Date:</span>{" "}
          {lead.nextReminder
            ? new Date(lead.nextReminder).toLocaleDateString()
            : ""}
        </div>

        <div>
          <span className="font-medium text-gray-400">Address:</span>{" "}
          {lead.address}
        </div>
      </div>

      <div className="flex justify-end gap-3 mt-2">
        <button
          className="px-4 py-1 rounded-full bg-blue-900/30 text-blue-200 font-medium text-xs hover:bg-blue-800/50 transition border border-blue-700"
          onClick={() => onEdit(lead)}
        >
          Edit
        </button>
        <button
          className="px-4 py-1 rounded-full bg-red-900/30 text-red-200 font-medium text-xs hover:bg-red-800/50 transition border border-red-700"
          onClick={() => onDelete(lead)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
