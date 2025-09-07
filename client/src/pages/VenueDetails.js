import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../style.css";

function VenueDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Venue data (duplicate from Venues.js for demonstration, should be fetched from an API in a real app)
  const venues = [
    {
      id: 1,
      name: "JW Marriott Hotel",
      location: "Mumbai, India",
      capacity: "500 - 2000 Guests",
      description: "A luxurious 5-star hotel offering world-class services and state-of-the-art facilities for grand events and conferences. Located in the heart of the city, it provides an elegant setting with multiple banquet halls and a rooftop terrace.",
      amenities: ["Free Wi-Fi", "In-house Catering", "Projector & Screen", "Valet Parking", "Audio/Visual Equipment"],
      images: [
        "https://cache.marriott.com/content/dam/marriott-renditions/IXCJW/ixcjw-reception-1613-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1336px:*",
        "https://cache.marriott.com/content/dam/marriott-renditions/IXCJW/ixcjw-twin-executive-1635-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1336px:*",
        "https://cache.marriott.com/content/dam/marriott-renditions/IXCJW/ixcjw-suite-0016-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1336px:*"
      ]
    },
    {
      id: 2,
      name: "Bangalore International Convention Centre",
      location: "Bangalore, India",
      capacity: "1000 - 5000 Guests",
      description: "A sprawling convention center with flexible spaces, perfect for large-scale exhibitions, trade shows, and corporate events. It boasts high-tech infrastructure and customizable floor plans to suit any event's needs.",
      amenities: ["High-speed Internet", "Event Planning Staff", "On-site Restaurants", "Exhibition Booths", "Security Services"],
      images: [
        "https://www.biec.in/images/Biec-slide1.webp",
        "https://bangaloreinternationalcentre.org/wp-content/uploads/Hundred-Hand-IBC-19-03-14-%C2%A9-andre-fanthome-374-1-592x444.jpg",
        "https://bangaloreinternationalcentre.org/wp-content/uploads/Hundred-Hand-IBC-19-03-13-%C2%A9-andre-fanthome-072-592x444.jpg"
      ]
    },
    {
      id: 3,
      name: "Pragati Maidan",
      location: "Delhi, India",
      capacity: "2000 - 10000 Guests",
      description: "One of the largest exhibition and convention centers in India, known for hosting major international trade fairs and public events. Its vast open grounds and multiple halls can accommodate events of massive scale.",
      amenities: ["Multiple Halls", "Open Grounds", "Parking Facilities", "Food Courts", "Exhibition Services"],
      images: [
        "https://vajiramandravi.com/current-affairs/wp-content/uploads/2025/03/pragati_maidan.jpg",
        "https://media.gettyimages.com/id/547489328/photo/new-delhi-india-september-11-aalishan-pakistan-exhibition-at-pragati-maidan-on-september-11.jpg?s=612x612&w=0&k=20&c=w35l97Y7Ue8y9YoVuztvgZiVeajPnIYYYfqDNytJd1s=",
        "https://media.gettyimages.com/id/547489288/photo/new-delhi-india-september-11-aalishan-pakistan-exhibition-at-pragati-maidan-on-september-11.jpg?s=612x612&w=0&k=20&c=RnpmEhBuzc2Uts7k1AXjdmJ-o2ivPwC68jv8FoUM7rQ="
      ]
    },
    {
      id: 4,
      name: "Taj Palace Hotel",
      location: "Delhi, India",
      capacity: "300 - 1500 Guests",
      description: "A symbol of classic elegance and hospitality, the Taj Palace offers a regal setting for weddings, banquets, and corporate gatherings. Its grand ballrooms and lush gardens provide a truly memorable experience.",
      amenities: ["Luxurious Suites", "Fine Dining", "Swimming Pool", "Event Staffing", "On-site Parking"],
      images: [
        "https://cdn.tajhotels.com/images/ocl5w36p/prod5/7861c900ca889b3adf9fdeb292e6da2f8871a743-3840x1860.jpg?w=1280",
        "https://cdn.tajhotels.com/images/ocl5w36p/prod5/659bf896fc962eb6ca0221690a45e7d649a8dd0c-1720x1112.jpg?w=1280",
        "https://cdn.tajhotels.com/images/ocl5w36p/prod5/52004a513213e944ecf01b890808b2edf24ebd5c-3632x2560.jpg?w=480"
      ]
    },
    {
      id: 5,
      name: "Beachside Resort",
      location: "Goa, India",
      capacity: "200 - 800 Guests",
      description: "Experience the perfect blend of scenic beauty and modern comfort. This resort is ideal for destination weddings, team retreats, and relaxing corporate getaways. The private beach access is a unique highlight.",
      amenities: ["Private Beach", "Accommodation", "Swimming Pool", "Bar & Grill", "Outdoor Event Space"],
      images: [
        "https://beachsideresortgulfshores.com/wp-content/uploads/2024/02/36-scaled.jpg",
        "https://beachsideresortgulfshores.com/wp-content/uploads/2024/02/17-scaled.jpg",
        "https://beachsideresortgulfshores.com/wp-content/uploads/2024/02/05-scaled.jpg"
      ]
    },
    {
      id: 6,
      name: "Hyderabad Expo Centre",
      location: "Hyderabad, India",
      capacity: "1000 - 7000 Guests",
      description: "A modern and versatile space for exhibitions, product launches, and large conferences. The venue features multiple interconnected halls and is equipped with cutting-edge technology for all your event needs.",
      amenities: ["Large Exhibition Halls", "Conference Rooms", "Parking", "Catering Services", "Security"],
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuEti-xpn7PCcGev8PmOyuNoq8xiB_WcJnsw&s",
        "https://hitex.co.in/assets/images/facility/venue/indoor-event.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE3rxRhmVoRpXCvIFLDHW9c-kMKEnEAfVGpz6vnjUbNU1SSqdB1ijykeqkd50nXppN8cQ&usqp=CAU"
      ]
    }
  ];

  // Find the venue with the matching ID
  const venue = venues.find((v) => v.id === parseInt(id));

  // fallback placeholder if image fails
  const placeholder =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='500'%3E%3Crect width='100%25' height='100%25' fill='%23f1f5f9'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%2394a3b8' font-size='24'%3ENo Image%3C/text%3E%3C/svg%3E";


  if (!venue) {
    return (
      <div className="venue-details-container">
        <h2 className="section-title">Venue Not Found</h2>
        <p className="not-found-text">The venue you are looking for does not exist.</p>
        <button className="venue-btn" onClick={() => navigate("/venues")}>
          Back to Venues
        </button>
      </div>
    );
  }

  return (
    <section className="venue-details-section">
      <div className="venue-details-card">
        {/* Main image display */}
        <div className="main-image-container">
          <img
            src={venue.images[currentImageIndex]}
            alt={venue.name}
            className="venue-details-img"
            onError={(e) => {
              e.currentTarget.src = placeholder;
            }}
          />
        </div>

        {/* Gallery thumbnails */}
        <div className="image-gallery mt-8">
          <div className="gallery-column-grid"> {/* Changed class name */}
            {venue.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${venue.name} thumbnail ${index + 1}`}
                className={`gallery-img ${index === currentImageIndex ? 'active-thumbnail' : ''}`}
                onClick={() => setCurrentImageIndex(index)}
                onError={(e) => {
                  e.currentTarget.src = placeholder;
                }}
              />
            ))}
          </div>
        </div>

        {/* Information box */}
        <div className="venue-info-box"> {/* Added a new wrapper for information */}
          <div className="venue-details-info">
            <h2 className="section-title">{venue.name}</h2>
            <p>
              <strong>Location:</strong> {venue.location}
            </p>
            <p>
              <strong>Capacity:</strong> {venue.capacity}
            </p>
            <p className="venue-description">{venue.description}</p>
            <div className="amenities-list">
              <h4 className="font-bold mb-2">Key Amenities:</h4>
              <ul>
                {venue.amenities.map((amenity, index) => (
                  <li key={index}>{amenity}</li>
                ))}
              </ul>
            </div>
            <button className="venue-btn mt-4" onClick={() => navigate("/venues")}>
              Back to Venues
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VenueDetails;
