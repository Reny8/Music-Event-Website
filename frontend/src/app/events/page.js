"use client";
import EventItem from "@/components/EventItem";
import pageStyles from "@/styles/page.module.css";
import { useEffect, useState } from "react";

export default function EventsPage() {
  const [events, setEvents] = useState([]);

  async function fetchEvents() {
    try {
      const response = await fetch("http://localhost:3000/api/events").then(
        (res) => res.json()
      );
      if (response) {
        setEvents(response);
      }
      return response;
    } catch (error) {
      console.error(error);
    }
  }

  // RESOLVE THE ISSUE OF NO DATA BEING DISPLAYED
  useEffect(() => {
    fetchEvents();
  }, []);
  fetchEvents();
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
