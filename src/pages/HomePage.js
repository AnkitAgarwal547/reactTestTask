import React from 'react'
import SideBar from '../components/Sidebar'
import Orders from '../components/MyOrders'

export default function HomePage() {
    return (
        <section className="mainSection">
            <div className="row">
            <SideBar/>
            <Orders/>
            </div>
      </section>
    )
}
