import React from "react";
import "./../style.css";

function Venues() {
  const venues = [
    {
      id: 1,
      name: "JW Marriott Hotel",
      location: "Mumbai, India",
      capacity: "500 - 2000 Guests",
      image: "https://source.unsplash.com/800x500/?luxury,hotel"
    },
    {
      id: 2,
      name: "Bangalore International Convention Centre",
      location: "Bangalore, India",
      capacity: "1000 - 5000 Guests",
      image: "https://source.unsplash.com/800x500/?convention,centre"
    },
    {
      id: 3,
      name: "Pragati Maidan",
      location: "Delhi, India",
      capacity: "2000 - 10000 Guests",
      image: "https://source.unsplash.com/800x500/?auditorium,conference"
    },
    {
      id: 4,
      name: "Taj Palace Hotel",
      location: "Delhi, India",
      capacity: "300 - 1500 Guests",
      image: "https://source.unsplash.com/800x500/?banquet,hall"
    },
    {
      id: 5,
      name: "Beachside Resort",
      location: "Goa, India",
      capacity: "200 - 800 Guests",
      image: "https://source.unsplash.com/800x500/?beach,resort"
    },
    {
      id: 6,
      name: "Hyderabad Expo Centre",
      location: "Hyderabad, India",
      capacity: "1000 - 7000 Guests",
      image: "https://source.unsplash.com/800x500/?expo,centre"
    }
  ];

  return (
    <section className="venues-section">
      <h2 className="section-title">🏛 Popular Venues</h2>
      <div className="venues-grid">
        {venues.map((venue) => (
          <div key={venue.id} className="venue-card">
            <img src={venue.image} alt={venue.name} className="venue-img" />
            <div className="venue-info">
              <h3>{venue.name}</h3>
              <p>{venue.location}</p>
              <p><strong>Capacity:</strong> {venue.capacity}</p>
              <button className="venue-btn">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Venues;
