import React from 'react'
import Header from './Header'
import StatsCards from './StatsCard'
import AttendanceChart from './AttendanceChart'
import AlertsPanel from './AlertsPanel'

const Dashboard = () => {
  return (
    <div className="flex-1 flex flex-col overflow-hidden bg-blue-50">
      <Header />
      <main className="flex-1 overflow-y-auto p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {"Good Morning, Mrs. Peterside 👋"}
          </h1>
          <p className="text-gray-600">Monday, 24 February 2026 • Week 6 of Term 2</p>
        </div>

        <StatsCards />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
          <div className="lg:col-span-2">
            <AttendanceChart />
          </div>
          <div>
            <AlertsPanel />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Dashboard