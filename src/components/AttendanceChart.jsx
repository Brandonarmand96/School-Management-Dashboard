
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Cell,
} from "recharts"

const weeklyData = [
  { day: "Mon", value: 30 },
  { day: "Tue", value: 34 },
  { day: "Wed", value: 28 },
  { day: "Thu", value: 26 },
  { day: "Today", value: 38 },
]

const teachingDepartments = [
  { name: "Sciences", pct: 96 },
  { name: "Arts & Humanities", pct: 91, color:"#1e40af" },
  { name: "Mathematics", pct: 88, color:"#1e40af" },
]

const nonTeachingDepartments = [
  { name: "Admin / Clerical", pct: 100 },
]

function ProgressBar({ pct, color = "#10b981" }) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-3 flex-1 overflow-hidden rounded-full bg-[#e5e7eb]">
        <div
          className="h-full rounded-full bg-emerald-500 transition-all duration-500"
          
          style={{ width: `${pct}%`, backgroundColor: color }}
        />
      </div>
      <span className="w-10 text-right text-sm font-semibold text-[#1a1a2e]">
        {pct}%
      </span>
    </div>
  )
}

export default function AttendanceSection() {
  return (
    <div className="rounded-xl bg-white p-5 shadow-sm">
      {/* Heading */}
      <div className="flex items-center justify-between">
        <h3 className="text-base font-bold text-[#1a1a2e]">
          Staff Attendance &mdash; Teaching & Non-Teaching
        </h3>
        <button className="text-sm font-semibold text-[#1e40af] hover:underline">
          {"View full log →"}
        </button>
      </div>

      {/* Bar chart */}
      <div className="mt-4 h-44 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={weeklyData} barCategoryGap="1%">
            <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis
              dataKey="day"
              tick={{ fill: "#6b7280", fontSize: 13 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis hide />
            <Bar dataKey="value" radius={[4, 4, 0, 0]}>
              {weeklyData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={index === weeklyData.length - 1 ? "#1e40af" : "#bfdbfe"}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Teaching Staff */}
      <div className="mt-6">
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-[#6b7280]">
          Teaching Staff
        </p>
        <div className="flex flex-col gap-3">
          {teachingDepartments.map((dept) => (
            <div key={dept.name} className="grid grid-cols-[140px_1fr] items-center gap-2 sm:grid-cols-[180px_1fr]">
              <span className="text-sm font-medium text-[#1a1a2e]">{dept.name}</span>
              <ProgressBar pct={dept.pct} color={dept.color} />
            </div>
          ))}
        </div>
      </div>

      {/* Non-Teaching Staff */}
      <div className="mt-6">
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-[#6b7280]">
          Non-Teaching Staff
        </p>
        <div className="flex flex-col gap-3">
          {nonTeachingDepartments.map((dept) => (
            <div key={dept.name} className="grid grid-cols-[140px_1fr] items-center gap-2 sm:grid-cols-[180px_1fr]">
              <span className="text-sm font-medium text-[#1a1a2e]">{dept.name}</span>
              <ProgressBar pct={dept.pct} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

