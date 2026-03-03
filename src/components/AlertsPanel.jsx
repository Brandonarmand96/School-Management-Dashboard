const alerts = [
  {
    color: "bg-red-500",
    title: "Low Stock:",
    description: "Exercise books \u2014 12 classes need restock",
    meta: "Asset Management \u00B7 2 hrs ago",
  },
  {
    color: "bg-amber-400",
    title: "Leave Pending:",
    description: "Mr. Okafor (Biology) \u2014 3-day medical leave",
    meta: "HR \u00B7 Awaiting approval",
  },
  {
    color: "bg-amber-400",
    title: "Headcount Gap:",
    description: "JS3C reports 9 students absent today",
    meta: "Student Attendance \u00B7 This morning",
  },
  {
    color: "bg-emerald-500",
    title: "Fund Received:",
    description: "\u20A6480,000 Q1 state allocation credited",
    meta: "Funds (EdFMS) \u00B7 Yesterday",
  },
]

export default function AlertsPanel() {
  return (
    <div className="rounded-xl bg-white p-5 shadow-sm h-full">
      {/* Heading */}
      <div className="flex items-center justify-between">
        <h3 className="text-base font-bold text-[#1a1a2e]">
          Alerts & Actions
        </h3>
        <button className="text-sm font-semibold text-[#1e40af] hover:underline">
          All alerts
        </button>
      </div>

      {/* Alert list */}
      <div className="mt-4 flex flex-col divide-y divide-[#e5e7eb]">
        {alerts.map((alert, idx) => (
          <div key={idx} className="flex gap-3 py-4 first:pt-0 last:pb-0">
            {/* Dot */}
            <span
              className={`mt-1 h-3.5 w-3.5 shrink-0 rounded-full ${alert.color}`}
            />
            {/* Content */}
            <div>
              <p className="text-sm text-[#1a1a2e] leading-relaxed">
                <span className="font-bold">{alert.title}</span>{" "}
                {alert.description}
              </p>
              <p className="mt-0.5 text-xs text-[#6b7280]">{alert.meta}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

