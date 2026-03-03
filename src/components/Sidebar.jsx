import { useState } from "react"
import {
  LayoutDashboard,
  ClipboardList,
  Users,
  Package,
  Wallet,
  Building2,
  GraduationCap,
  BarChart3,
  FileText,
  Menu,
  X,
} from "lucide-react"

const overviewItems = [
  { label: "Dashboard", icon: LayoutDashboard, active: true },
  { label: "Staff Attendance", icon: ClipboardList, active: false },
  { label: "Student Headcount", icon: Users, active: false },
]

const managementItems = [
  { label: "Assets", icon: Package, active: false, badge: 3 },
  { label: "Funds (EdFMS)", icon: Wallet, active: false },
  { label: "Infrastructure", icon: Building2, active: false },
]

const workforceItems = [
  { label: "Qualifications", icon: GraduationCap, active: false },
  { label: "Performance", icon: BarChart3, active: false },
  { label: "Leave Requests", icon: FileText, active: false, badge: 2 },
]

function NavItem({ icon: Icon, label, active, badge }) {
  return (
    <button
      className={`flex w-full items-center gap-3 rounded-lg px-3 py-1 text-sm font-medium transition-colors ${
        active
          ? "bg-[#2b55c4] text-white border-l-4 border-white"
          : "text-blue-200 hover:bg-[#2547a0] hover:text-white"
      }`}
    >
      <Icon className="h-5 w-5 shrink-0" />
      <span className="flex-1 text-left">{label}</span>
      {badge && (
        <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white px-1">
          {badge}
        </span>
      )}
    </button>
  )
}

function SectionLabel({ label }) {
  return (
    <p className="mb-2 mt-6 px-3 text-xs font-semibold uppercase tracking-wider text-blue-300">
      {label}
    </p>
  )
}

export default function Sidebar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setOpen(true)}
        className="fixed left-4 top-4 z-50 rounded-lg bg-[#1e3a8a] p-2 text-white shadow-lg lg:hidden"
        aria-label="Open sidebar"
      >
        <Menu className="h-6 w-6" />
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col bg-[#1e3a8a] transition-transform duration-300 lg:translate-x-0 lg:static lg:z-auto ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close button mobile */}
        <button
          onClick={() => setOpen(false)}
          className="absolute right-3 top-3 text-white lg:hidden"
          aria-label="Close sidebar"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Brand */}
        <div className="px-5 pt-6 pb-2">
          <h1 className="text-xl font-bold text-white">School Core</h1>
          <span className="mt-1 inline-block rounded-full bg-[#2b55c4] px-3 py-0.5 text-xs font-medium text-white">
            Tier 2 &middot; Principal
          </span>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-1 pb-4">
          <SectionLabel label="Overview" />
          <div className="flex flex-col gap-1 px-3 ">
            {overviewItems.map((item) => (
              <NavItem key={item.label} {...item} />
            ))}
          </div>

          <SectionLabel label="Management" />
          <div className="flex flex-col gap-1 px-3">
            {managementItems.map((item) => (
              <NavItem key={item.label} {...item} />
            ))}
          </div>

          <SectionLabel label="Workforce" />
          <div className="flex flex-col gap-1 px-3">
            {workforceItems.map((item) => (
              <NavItem key={item.label} {...item} />
            ))}
          </div>
        </nav>

        {/* User profile */}
        <div className="border-t border-blue-700 px-2 py-2">
          <div className="flex bg-[#2b55c4] py-2 px-2 rounded-lg items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#537df1] text-sm font-bold text-white">
              AP
            </div>
            <div>
              <p className="text-sm font-semibold text-white">A. Peterside</p>
              <p className="text-xs text-blue-300">Head Teacher</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}
