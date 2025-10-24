import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-[color:var(--neutral)] text-[color:var(--text)]">
      <Header />
      <main className="flex-1"> 
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}


