"use client";
import EventItem from "@/components/EventItem";
import pageStyles from "@/styles/page.module.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function EventsPage() {
  const [events, setEvents] = useState([]);

  async function fetchEvents() {
    try {
      let response = await axios.get("http://localhost:3000/api/events");
      setEvents(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  // RESOLVE THE ISSUE OF NO DATA BEING DISPLAYED
  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <section className={pageStyles.container}>
      <h1>My Events</h1>
      {events.length ? (
        events.map((evt) => {
          return <EventItem key={evt.id} evt={evt} />;
        })
      ) : (
        <h3>No events to show</h3>
      )}
    </section>
  );
}
