import React, { useState } from "react";
import axios from "axios";
import "../components/bookingPage.css";
import pics from "../assets/bebeto_logo.png";

const BookingPage = () => {
  const [destination, setDestination] = useState("");
  const [buses, setBuses] = useState([]);
  const [selectedBus, setSelectedBus] = useState("");
  const [seats, setSeats] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");
  const [loading, setLoading] = useState(false);

  const API_BASE_URL = "http://localhost:8000";

  // Hardcoded data
  const destinations = ["Kampala", "Mbarara", "Jinja"];

  const busesByDestination = {
    Kampala: [
      { id: "1", name: "Bus 001", time: "08:00 AM" },
      { id: "2", name: "Bus 002", time: "10:00 AM" },
    ],
    Mbarara: [
      { id: "3", name: "Bus 003", time: "09:00 AM" },
      { id: "4", name: "Bus 004", time: "11:30 AM" },
    ],
    Jinja: [
      { id: "5", name: "Bus 005", time: "07:30 AM" },
    ],
  };

  const seatsByBusId = {
    "1": generateSeats(30),
    "2": generateSeats(30),
    "3": generateSeats(36),
    "4": generateSeats(40),
    "5": generateSeats(24),
  };

  function generateSeats(count) {
    const seatTypes = ["WINDOW", "MIDDLE", "AISLE"];
    return Array.from({ length: count }, (_, i) => ({
      id: (i + 1).toString(),
      seat_number: `S${i + 1}`,
      seat_type: seatTypes[i % seatTypes.length],
    }));
  }

  const handleDestinationChange = (e) => {
    const selectedDestination = e.target.value;
    setDestination(selectedDestination);
    const availableBuses = busesByDestination[selectedDestination] || [];
    setBuses(availableBuses);
    setSelectedBus("");
    setSeats([]);
  };

  const handleBusChange = (e) => {
    const busId = e.target.value;
    setSelectedBus(busId);
    setSeats(seatsByBusId[busId] || []);
    setSelectedSeats([]);
  };

  const handleSeatSelection = (seatId) => {
    setSelectedSeats((prev) =>
      prev.includes(seatId)
        ? prev.filter((id) => id !== seatId)
        : [...prev, seatId]
    );
  };

  const getSeatTypeInitial = (seatType) => {
    switch (seatType) {
      case "WINDOW":
        return "WS";
      case "MIDDLE":
        return "MS";
      case "AISLE":
        return "AS";
      default:
        return "";
    }
  };

  const handleConfirmBooking = async (e) => {
    e.preventDefault();
    if (selectedSeats.length === 0) {
      alert("Please select at least one seat.");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(`${API_BASE_URL}/bookings.php`, {
        seat_ids: selectedSeats,
        bus_id: selectedBus,
        name,
        phone,
        email,
        date,
        special_requests: specialRequests,
      });

      if (response.data.status === "success") {
        alert("Seats booked successfully!");
        handleBusChange({ target: { value: selectedBus } });
        setSelectedSeats([]);
      } else {
        alert(response.data.message || "Booking failed. Please try again.");
      }
    } catch (error) {
      console.error("Error booking seats:", error);
      alert("An error occurred. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="booking-page">
      <div className="booking-navbar">
        <div className="logo">
          <img src={pics} alt="Bebeto Coaches Logo" />
        </div>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
        <a href="/booking" className="booking-btn">Booking</a>
      </div>
      <br></br><br></br><br></br><br></br>
      <div className="booking-container">
        <br></br><br></br><br></br>
        <h2>Book Your Ticket</h2>
        <form className="booking-form" onSubmit={handleConfirmBooking}>
          <input type="text" placeholder="Name" required value={name} onChange={(e) => setName(e.target.value)} className="input-field" />
          <input type="tel" placeholder="Phone" required value={phone} onChange={(e) => setPhone(e.target.value)} className="input-field" />
          <input type="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} className="input-field" />

          <select className="input-field" value={destination} onChange={handleDestinationChange} required>
            <option value="">Select Destination</option>
            {destinations.map((dest, i) => (
              <option key={i} value={dest}>{dest}</option>
            ))}
          </select>

          {buses.length > 0 && (
            <select className="input-field" value={selectedBus} onChange={handleBusChange} required>
              <option value="">Choose a Bus</option>
              {buses.map((bus) => (
                <option key={bus.id} value={bus.id}>{bus.name} - {bus.time}</option>
              ))}
            </select>
          )}

          {seats.length > 0 && (
            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <h3>Select Seats:</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "center" }}>
                {Array.from({ length: Math.ceil(seats.length / 6) }, (_, rowIndex) => {
                  const start = rowIndex * 6;
                  const rowSeats = seats.slice(start, start + 6);
                  return (
                    <div key={rowIndex} style={{ display: "flex", gap: "10px" }}>
                      {rowSeats.map((seat) => (
                        <button
                          key={seat.id}
                          type="button"
                          onClick={() => handleSeatSelection(seat.id)}
                          style={{
                            padding: "10px",
                            backgroundColor: selectedSeats.includes(seat.id) ? "green" : "gray",
                            borderRadius: "5px",
                            width: "50px",
                            textAlign: "center",
                            fontSize: "12px",
                          }}
                        >
                          {seat.seat_number}-{getSeatTypeInitial(seat.seat_type)}
                        </button>
                      ))}
                    </div>
                  );
                })}
                <div style={{ marginTop: "20px" }}>
                  <p><strong>Key:</strong></p>
                  <p>MS - Middle Seat | AS - Aisle Seat | WS - Window Seat</p>
                </div>
              </div>
            </div>
          )}

          <input type="date" required className="input-field" value={date} onChange={(e) => setDate(e.target.value)} min={new Date().toISOString().split("T")[0]} />

          <textarea
            placeholder="Special Requests"
            value={specialRequests}
            onChange={(e) => setSpecialRequests(e.target.value)}
            className="message-box"
          ></textarea>

          <button type="submit" className="send-btn" disabled={loading}>
            {loading ? "Booking..." : "Confirm Booking"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingPage;





