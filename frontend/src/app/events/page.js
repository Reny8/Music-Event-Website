'use client'
import EventItem from "@/components/EventItem";
import pageStyles from "@/styles/page.module.css";
import React, { useEffect, useState } from "react";
export default function EventsPage() {
  const [events, setEvents] = useState([
  ])
  useEffect(() => {
    fetchEvents('/api/events')
  })

  async function fetchEvents(url) {
    const res = await fetch(url).then(res => res.json())
    setEvents(res)
  }
  return (
    <section className={pageStyles.container}>
      <h1>My Events</h1>
      {events.map(evt => {
        return <EventItem key={evt.id} evt={evt} />
      })}
    </section>
  )
}
