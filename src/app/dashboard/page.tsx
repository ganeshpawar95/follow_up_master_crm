export default function DashboardPage() {
  return (
    <div className="layout-content-container flex flex-col flex-1">
      <div className="flex flex-wrap justify-between gap-3 p-4">
        <p className="text-white tracking-light text-[32px] font-bold leading-tight min-w-72">
          Dashboard
        </p>
      </div>
      <div className="flex flex-wrap gap-4 p-4">
        <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-lg p-6 bg-[#283930]">
          <p className="text-white text-base font-medium leading-normal">
            Total Leads
          </p>
          <p className="text-white tracking-light text-2xl font-bold leading-tight">
            1,234
          </p>
        </div>
        <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-lg p-6 bg-[#283930]">
          <p className="text-white text-base font-medium leading-normal">
            Pending Reminders
          </p>
          <p className="text-white tracking-light text-2xl font-bold leading-tight">
            56
          </p>
        </div>
        <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-lg p-6 bg-[#283930]">
          <p className="text-white text-base font-medium leading-normal">
            Conversion Rate
          </p>
          <p className="text-white tracking-light text-2xl font-bold leading-tight">
            15%
          </p>
        </div>
      </div>
      <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Leads by Status
      </h2>
      <div className="flex flex-wrap gap-4 px-4 py-6">
        <div className="flex min-w-72 flex-1 flex-col gap-2">
          <p className="text-white text-base font-medium leading-normal">
            Leads by Status
          </p>
          <div className="grid min-h-[180px] grid-flow-col gap-6 grid-rows-[1fr_auto] items-end justify-items-center px-3">
            <div className="border-[#9cbaab] bg-[#283930] border-t-2 w-full h-[20%]"></div>
            <p className="text-[#9cbaab] text-[13px] font-bold leading-normal tracking-[0.015em]">
              New
            </p>
            <div className="border-[#9cbaab] bg-[#283930] border-t-2 w-full h-full"></div>
            <p className="text-[#9cbaab] text-[13px] font-bold leading-normal tracking-[0.015em]">
              Contacted
            </p>
            <div className="border-[#9cbaab] bg-[#283930] border-t-2 w-full h-[80%]"></div>
            <p className="text-[#9cbaab] text-[13px] font-bold leading-normal tracking-[0.015em]">
              Qualified
            </p>
            <div className="border-[#9cbaab] bg-[#283930] border-t-2 w-full h-full"></div>
            <p className="text-[#9cbaab] text-[13px] font-bold leading-normal tracking-[0.015em]">
              Proposal Sent
            </p>
            <div className="border-[#9cbaab] bg-[#283930] border-t-2 w-full h-[30%]"></div>
            <p className="text-[#9cbaab] text-[13px] font-bold leading-normal tracking-[0.015em]">
              Closed
            </p>
          </div>
        </div>
        <div className="flex min-w-72 flex-1 flex-col gap-2">
          <p className="text-white text-base font-medium leading-normal">
            User Activity Over Time
          </p>
          <div className="flex min-h-[180px] flex-1 flex-col gap-8 py-4">
            <svg
              width="100%"
              height="148"
              viewBox="-3 0 478 150"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25V149H326.769H0V109Z"
                fill="url(#paint0_linear_1131_5935)"
              ></path>
              <path
                d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25"
                stroke="#9cbaab"
                stroke-width="3"
                stroke-linecap="round"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear_1131_5935"
                  x1="236"
                  y1="1"
                  x2="236"
                  y2="149"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#283930"></stop>
                  <stop offset="1" stop-color="#283930" stop-opacity="0"></stop>
                </linearGradient>
              </defs>
            </svg>
            <div className="flex justify-around">
              <p className="text-[#9cbaab] text-[13px] font-bold leading-normal tracking-[0.015em]">
                Jan
              </p>
              <p className="text-[#9cbaab] text-[13px] font-bold leading-normal tracking-[0.015em]">
                Feb
              </p>
              <p className="text-[#9cbaab] text-[13px] font-bold leading-normal tracking-[0.015em]">
                Mar
              </p>
              <p className="text-[#9cbaab] text-[13px] font-bold leading-normal tracking-[0.015em]">
                Apr
              </p>
              <p className="text-[#9cbaab] text-[13px] font-bold leading-normal tracking-[0.015em]">
                May
              </p>
              <p className="text-[#9cbaab] text-[13px] font-bold leading-normal tracking-[0.015em]">
                Jun
              </p>
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Today's Follow-ups
      </h2>
      <div className="px-4 py-3 @container">
        <div className="flex overflow-hidden rounded-lg border border-[#3b5447] bg-[#111814]">
          <table className="flex-1">
            <thead>
              <tr className="bg-[#1b2721]">
                <th className="table-8832b490-2268-402e-b64b-767cf26444ec-column-120 px-4 py-3 text-left text-white w-[400px] text-sm font-medium leading-normal">
                  Name
                </th>
                <th className="table-8832b490-2268-402e-b64b-767cf26444ec-column-240 px-4 py-3 text-left text-white w-[400px] text-sm font-medium leading-normal">
                  Company
                </th>
                <th className="table-8832b490-2268-402e-b64b-767cf26444ec-column-360 px-4 py-3 text-left text-white w-60 text-sm font-medium leading-normal">
                  Status
                </th>
                <th className="table-8832b490-2268-402e-b64b-767cf26444ec-column-480 px-4 py-3 text-left text-white w-[400px] text-sm font-medium leading-normal">
                  Next Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-t-[#3b5447]">
                <td className="table-8832b490-2268-402e-b64b-767cf26444ec-column-120 h-[72px] px-4 py-2 w-[400px] text-white text-sm font-normal leading-normal">
                  Ethan Harper
                </td>
                <td className="table-8832b490-2268-402e-b64b-767cf26444ec-column-240 h-[72px] px-4 py-2 w-[400px] text-[#9cbaab] text-sm font-normal leading-normal">
                  Tech Solutions Inc.
                </td>
                <td className="table-8832b490-2268-402e-b64b-767cf26444ec-column-360 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                  <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#283930] text-white text-sm font-medium leading-normal w-full">
                    <span className="truncate">Contacted</span>
                  </button>
                </td>
                <td className="table-8832b490-2268-402e-b64b-767cf26444ec-column-480 h-[72px] px-4 py-2 w-[400px] text-[#9cbaab] text-sm font-normal leading-normal">
                  Call at 2 PM
                </td>
              </tr>
              <tr className="border-t border-t-[#3b5447]">
                <td className="table-8832b490-2268-402e-b64b-767cf26444ec-column-120 h-[72px] px-4 py-2 w-[400px] text-white text-sm font-normal leading-normal">
                  Olivia Bennett
                </td>
                <td className="table-8832b490-2268-402e-b64b-767cf26444ec-column-240 h-[72px] px-4 py-2 w-[400px] text-[#9cbaab] text-sm font-normal leading-normal">
                  Global Innovations
                </td>
                <td className="table-8832b490-2268-402e-b64b-767cf26444ec-column-360 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                  <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#283930] text-white text-sm font-medium leading-normal w-full">
                    <span className="truncate">Qualified</span>
                  </button>
                </td>
                <td className="table-8832b490-2268-402e-b64b-767cf26444ec-column-480 h-[72px] px-4 py-2 w-[400px] text-[#9cbaab] text-sm font-normal leading-normal">
                  Send Proposal
                </td>
              </tr>
              <tr className="border-t border-t-[#3b5447]">
                <td className="table-8832b490-2268-402e-b64b-767cf26444ec-column-120 h-[72px] px-4 py-2 w-[400px] text-white text-sm font-normal leading-normal">
                  Liam Foster
                </td>
                <td className="table-8832b490-2268-402e-b64b-767cf26444ec-column-240 h-[72px] px-4 py-2 w-[400px] text-[#9cbaab] text-sm font-normal leading-normal">
                  Future Dynamics
                </td>
                <td className="table-8832b490-2268-402e-b64b-767cf26444ec-column-360 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                  <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#283930] text-white text-sm font-medium leading-normal w-full">
                    <span className="truncate">New</span>
                  </button>
                </td>
                <td className="table-8832b490-2268-402e-b64b-767cf26444ec-column-480 h-[72px] px-4 py-2 w-[400px] text-[#9cbaab] text-sm font-normal leading-normal">
                  Initial Contact
                </td>
              </tr>
              <tr className="border-t border-t-[#3b5447]">
                <td className="table-8832b490-2268-402e-b64b-767cf26444ec-column-120 h-[72px] px-4 py-2 w-[400px] text-white text-sm font-normal leading-normal">
                  Ava Morgan
                </td>
                <td className="table-8832b490-2268-402e-b64b-767cf26444ec-column-240 h-[72px] px-4 py-2 w-[400px] text-[#9cbaab] text-sm font-normal leading-normal">
                  Strategic Ventures
                </td>
                <td className="table-8832b490-2268-402e-b64b-767cf26444ec-column-360 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                  <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#283930] text-white text-sm font-medium leading-normal w-full">
                    <span className="truncate">Proposal Sent</span>
                  </button>
                </td>
                <td className="table-8832b490-2268-402e-b64b-767cf26444ec-column-480 h-[72px] px-4 py-2 w-[400px] text-[#9cbaab] text-sm font-normal leading-normal">
                  Follow-up Review
                </td>
              </tr>
              <tr className="border-t border-t-[#3b5447]">
                <td className="table-8832b490-2268-402e-b64b-767cf26444ec-column-120 h-[72px] px-4 py-2 w-[400px] text-white text-sm font-normal leading-normal">
                  Noah Carter
                </td>
                <td className="table-8832b490-2268-402e-b64b-767cf26444ec-column-240 h-[72px] px-4 py-2 w-[400px] text-[#9cbaab] text-sm font-normal leading-normal">
                  Pinnacle Enterprises
                </td>
                <td className="table-8832b490-2268-402e-b64b-767cf26444ec-column-360 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                  <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#283930] text-white text-sm font-medium leading-normal w-full">
                    <span className="truncate">Closed</span>
                  </button>
                </td>
                <td className="table-8832b490-2268-402e-b64b-767cf26444ec-column-480 h-[72px] px-4 py-2 w-[400px] text-[#9cbaab] text-sm font-normal leading-normal">
                  Contract Signing
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
