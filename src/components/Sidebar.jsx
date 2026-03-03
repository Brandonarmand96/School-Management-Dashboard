import React from 'react'

const Sidebar = () => {
  const menuItems = [
    { name: 'Dashboard', icon: '■', active: true },
    { name: 'Staff Attendance', icon: '■' },
    { name: 'Student Headcount', icon: '■' }
  ]

  const managementItems = [
    { name: 'Assets', icon: '🏷️', badge: '3' },
    { name: 'Funds (EdFMS)', icon: '💰' },
    { name: 'Infrastructure', icon: '🏗️' }
  ]

  const workforceItems = [
    { name: 'Qualifications', icon: '🎓' },
    { name: 'Performance', icon: '📊' },
    { name: 'Leave Requests', icon: '📋', badge: '2' }
  ]

  return (
    <div className="w-72 bg-blue-600 text-white flex flex-col">
      <div className="p-6">
        <h1 className="text-2xl font-bold">School Core</h1>
        <p className="text-blue-200 text-sm">Tier 2 • Principal</p>
      </div>

      <nav className="flex-1 px-4">
        <div className="mb-8">
          <h3 className="text-blue-200 text-xs uppercase tracking-wider mb-4 px-2">Overview</h3>
          <ul className="space-y-1">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className={`flex items-center px-3 py-2 rounded-lg text-sm ${
                    item.active 
                      ? 'bg-blue-700 text-white' 
                      : 'text-blue-100 hover:bg-blue-700'
                  }`}
                >
                  <span className="mr-3">{item.icon}</span>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-blue-200 text-xs uppercase tracking-wider mb-4 px-2">Management</h3>
          <ul className="space-y-1">
            {managementItems.map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="flex items-center justify-between px-3 py-2 rounded-lg text-sm text-blue-100 hover:bg-blue-700"
                >
                  <div className="flex items-center">
                    <span className="mr-3">{item.icon}</span>
                    {item.name}
                  </div>
                  {item.badge && (
                    <span className="bg-red-500 text-white text-xs rounded-full px-2 py-1">
                      {item.badge}
                    </span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-blue-200 text-xs uppercase tracking-wider mb-4 px-2">Workforce</h3>
          <ul className="space-y-1">
            {workforceItems.map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="flex items-center justify-between px-3 py-2 rounded-lg text-sm text-blue-100 hover:bg-blue-700"
                >
                  <div className="flex items-center">
                    <span className="mr-3">{item.icon}</span>
                    {item.name}
                  </div>
                  {item.badge && (
                    <span className="bg-red-500 text-white text-xs rounded-full px-2 py-1">
                      {item.badge}
                    </span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div className="p-4 border-t border-blue-500">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-sm font-bold">
            AP
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium">A. Peterside</p>
            <p className="text-xs text-blue-200">Head Teacher</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
