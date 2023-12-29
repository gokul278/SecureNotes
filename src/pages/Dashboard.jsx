import React from 'react'
import { DashboardMenu } from './components/DashboardMenu'
import { DashboardContent } from './components/DashboardContent'

export const Dashboard = () => {
  document.title = "Notes"
  return (
    <div className='dashboard flex w-[100vw] h-[100vh]'>
      <div className='w-[25%] bg-[#4B4453]'>
        <DashboardMenu />
      </div>
      <div className='w-[75%] bg-[#B0A8B9]'>
        <DashboardContent/>
      </div>
    </div>
  )
}
