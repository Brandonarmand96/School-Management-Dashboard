
import { GraduationCap, Pencil, AlertTriangle, Users, } from "lucide-react"

const stats = [
  {
    label: "TEACHING STAFF PRESENT",
    value: "32",
    sub: (
      <span className="text-sm font-medium text-emerald-600">
        {"↑ 94% of 34 teachers"}
      </span>
    ),
    borderColor: "border-t-[#3b82f6]",
    // icon: <Users className="h-5 w-5 text-[#6b7280]" />,
    icon: null,
  },
  {
    label: "NON-TEACHING STAFF",
    value: "6",
    sub: (
      <span className="text-sm font-medium text-emerald-600">
        {"↑ 100% of 6 staff"}
      </span>
    ),
    borderColor: "border-t-emerald-500",
    icon: <Pencil className="h-5 w-5 text-[#6b7280]" />,
  },
  {
    label: "STUDENTS — TODAY",
    value: "1,183",
    sub: (
      <span className="text-sm font-medium">95% of 1,240 enrolled</span>
    ),
    borderColor: "border-t-amber-500",
    icon: <GraduationCap className="h-5 w-5 text-amber-500" />,
  },
  {
    label: "PENDING ACTIONS",
    value: "5",
    sub: (
      <span className="text-sm font-medium text-red-500">
        {"2 leave \u00B7 3 asset alerts"}
      </span>
    ),
    borderColor: "border-t-red-500",
    icon: <AlertTriangle className="h-5 w-5 text-red-500" />,
  },
]

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className={`rounded-xl border-t-4 ${stat.borderColor} bg-white p-5 shadow-sm`}
        >
          <div className="flex items-start justify-between h-7">
            <p className="text-xs font-bold uppercase tracking-wide text-[#1e40af]">
              {stat.label}
            </p>
            {stat.icon && <span>{stat.icon}</span>}
          </div>
          <p className="mt-2 text-4xl font-extrabold text-[#1a1a2e]">
            {stat.value}
          </p>
          <div className="mt-1">{stat.sub}</div>
        </div>
      ))}
    </div>
  )
}
