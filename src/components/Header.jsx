
import { Search, Bell, Download, ArrowLeft } from "lucide-react"

export default function DashboardHeader() {
  return (
    <header className="bg-white border-b border-gray-200 py-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h2 className="text-lg font-bold text-[#1a1a2e]">Principal Dashboard</h2>
        <p className="text-sm text-[#6b7280]">
          Govt. Secondary School, Maitama &mdash; FCT
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6b7280]" />
          <input
            type="text"
            placeholder="Search staff, assets..."
            className="h-10 w-full rounded-lg border border-[#e5e7eb] bg-[#f0f2f5] pl-10 pr-4 text-sm text-[#1a1a2e] placeholder-[#6b7280] focus:border-[#3b82f6] focus:outline-none focus:ring-1 focus:ring-[#3b82f6] sm:w-56"
          />
        </div>

        {/* Notification bell */}
        <button
          className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[#f0f2f5] text-[#1a1a2e] hover:bg-[#e5e7eb] transition-colors"
          aria-label="Notifications"
        >
          <Bell className="h-5 w-5" />
          <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
            !
          </span>
        </button>

        {/* Download HTML */}
        <button className="flex h-10 items-center gap-2 rounded-lg bg-[#1e40af] px-4 text-sm font-semibold text-white hover:bg-[#1e3a8a] transition-colors">
          <Download className="h-4 w-4" />
          <span className="hidden sm:inline">Download HTML</span>
        </button>

        {/* Back */}
        <button className="flex h-10 items-center gap-1.5 rounded-lg border border-[#e5e7eb] bg-white px-4 text-sm font-semibold text-[#1a1a2e] hover:bg-[#f0f2f5] transition-colors">
          <ArrowLeft className="h-4 w-4" />
          <span>Back</span>
        </button>
      </div>
    </header>
  )
}
