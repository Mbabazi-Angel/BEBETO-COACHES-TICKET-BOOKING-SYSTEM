import React, { useState, useEffect } from "react";
import axios from "axios";
import "../components/bookingPage.css";
import pics from "../assets/bebeto_logo.png";

const BookingPage = () => {
  const [destination, setDestination] = useState("");
  const [buses, setBuses] = useState([]);
  const [selectedBus, setSelectedBus] = useState("");
  const [seats, setSeats] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [destinations, setDestinations] = useState([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");
  const [loading, setLoading] = useState(false);

 
  const API_BASE_URL = "http://mbabaziangel-001-site1.ktempurl.com/api";

  // Fetch Destinations from PHP backend
  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/get_destinations.php`)
      .then((response) => setDestinations(response.data))
      .catch((error) => console.error("Error fetching destinations:", error));
  }, []);

  // Fetch Buses for a Selected Destination
  const handleDestinationChange = async (e) => {
    const selectedDestination = e.target.value;
    setDestination(selectedDestination);
    setBuses([]);
    setSelectedBus("");
    setSeats([]);

    if (!selectedDestination) return;

    try {
      const response = await axios.get(
        `${API_BASE_URL}/get_buses.php?destination_name=${selectedDestination}`
      );
      setBuses(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      console.error("Error fetching buses:", error);
      alert("Failed to fetch buses. Please try again.");
    }
  };

  // Fetch Seats for a Selected Bus
  const handleBusChange = async (e) => {
    const busId = e.target.value;
    setSelectedBus(busId);
    setSeats([]);
    setSelectedSeats([]); // Reset selected seats when bus changes

    try {
      const response = await axios.get(
        `${API_BASE_URL}/get_seats.php?bus_id=${busId}`
      );
      setSeats(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      console.error("Error fetching seats:", error);
    }
  };

  // Handle seat selection
  const handleSeatSelection = (seatId) => {
    setSelectedSeats((prevSeats) =>
      prevSeats.includes(seatId)
        ? prevSeats.filter((id) => id !== seatId)
        : [...prevSeats, seatId]
    );
  };

  // Map seat_type to initials for display
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

  // Handle booking confirmation
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

      console.log(response.data);

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
      {/* Navbar */}
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
      <br />
      <br />
      <br />
      <br />

      {/* Booking Form */}
      <div className="booking-container">
        <h2>Book Your Ticket</h2>
        <form className="booking-form" onSubmit={handleConfirmBooking}>
          <input
            type="text"
            placeholder="Name"
            className="input-field"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="tel"
            placeholder="Phone"
            className="input-field"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="input-field"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <select
            className="input-field"
            value={destination}
            onChange={handleDestinationChange}
            required
          >
            <option value="">Select Destination</option>
            {destinations.map((dest, index) => (
              <option key={index} value={dest}>
                {dest}
              </option>
            ))}
          </select>

          {buses.length > 0 && (
            <select
              className="input-field"
              value={selectedBus}
              onChange={handleBusChange}
              required
            >
              <option value="">Choose a Bus</option>
              {buses.map((bus, index) => (
                <option key={index} value={bus.id}>
                  {bus.name} - {bus.time}
                </option>
              ))}
            </select>
          )}

          {/* Seat Selection */}
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h3>Select Seats:</h3>
            {seats.length > 0 ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  alignItems: "center",
                }}
              >
                {Array.from(
                  { length: Math.ceil(seats.length / 6) },
                  (_, rowIndex) => {
                    const start = rowIndex * 6;
                    const rowSeats = seats.slice(start, start + 6);

                    return (
                      <div
                        key={rowIndex}
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          gap: "10px",
                          alignItems: "center",
                        }}
                      >
                        {/* Left side seats */}
                        {rowSeats.slice(0, 3).map((seats) => (
                          <button
                            key={seats.id}
                            onClick={() => handleSeatSelection(seats.id)}
                            style={{
                              padding: "10px",
                              backgroundColor: selectedSeats.includes(seats.id)
                                ? "green"
                                : "gray",
                              borderRadius: "5px",
                              width: "50px",
                              textAlign: "center",
                              fontSize: "12px",
                            }}
                          >
                            {seats.seat_number}-{getSeatTypeInitial(seats.seat_type)}
                          </button>
                        ))}

                        {/* Right side seats */}
                        {rowSeats.slice(3, 6).map((seats) => (
                          <button
                            key={seats.id}
                            onClick={() => handleSeatSelection(seats.id)}
                            style={{
                              padding: "10px",
                              backgroundColor: selectedSeats.includes(seats.id)
                                ? "green"
                                : "gray",
                              borderRadius: "5px",
                              width: "50px",
                              textAlign: "center",
                              fontSize: "12px",
                            }}
                          >
                            {seats.seat_number}-{getSeatTypeInitial(seats.seat_type)}
                          </button>
                        ))}
                      </div>
                    );
                  }
                )}
                {/* Seat Type Key */}
                <div style={{ marginTop: "20px", textAlign: "center" }}>
                  <p>
                    <strong>Key:</strong>
                  </p>
                  <p>MS - Middle Seat | AS - Aisle Seat | WS - Window Seat</p>
                </div>
              </div>
            ) : (
              <p>No seats available.</p>
            )}
          </div>

          <input
            type="date"
            className="input-field"
            required
            value={date}
            onChange={(e) => setDate(e.target.value)}
            min={new Date().toISOString().split("T")[0]}
          />

          <textarea
            placeholder="Special Requests"
            value={specialRequests}
            onChange={(e) => setSpecialRequests(e.target.value)}
            className="message-box"
          ></textarea>

          {/* Confirm Booking button */}
          <button type="submit" className="send-btn" disabled={loading}>
            {loading ? "Booking..." : "Confirm Booking"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingPage;



