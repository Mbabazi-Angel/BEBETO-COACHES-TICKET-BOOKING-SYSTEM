import React, { useEffect, useState } from "react";
import axios from "axios";

const BookingList = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchDate, setSearchDate] = useState("");
    const [searchBus, setSearchBus] = useState("");
    const [bookings, setBookings] = useState([]);

    // Define the API base URL as a relative path
    const API_BASE_URL = "http://localhost:8000";

    const fetchAllBookings = async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/get_bookings.php`);
            if (response.data.length > 0) {
                setBookings(response.data);
            }
        } catch (error) {
            console.log(error || "Error: Failed to fetch bookings");
        }
    };

    useEffect(() => {
        fetchAllBookings();
    }, []);

    const handleSearch = async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/search_bookings.php?query=${searchQuery}`);
            setBookings(response.data);
        } catch (error) {
            console.error("Error searching bookings:", error);
        }
    };

    const handleSearchByDate = async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/search_by_date.php?date=${searchDate}`);
            setBookings(response.data);
        } catch (error) {
            console.error("Error searching bookings by date:", error);
        }
    };

    // Search by Bus
    const handleSearchByBus = async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/search_by_bus.php?bus=${searchBus}`);
            setBookings(response.data);
        } catch (error) {
            console.error("Error searching bookings by bus:", error);
        }
    };

    return (
        <div className="booking-list-container">
            <h2>Search Customer Bookings</h2>
            <div className="table-filters">
                <div className="name-search">
                    <input
                        type="text"
                        placeholder="Search by Name or Ticket #"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button onClick={handleSearch}>Search</button>
                </div>

                <div className="search-date">
                    <input
                        type="date"
                        value={searchDate}
                        onChange={(e) => setSearchDate(e.target.value)}
                    />
                    <button onClick={handleSearchByDate}>Search by Date</button>
                </div>

                <div className="search-bus">
                    <input
                        type="text"
                        placeholder="Search by Bus ID"
                        value={searchBus}
                        onChange={(e) => setSearchBus(e.target.value)}
                    />
                    <button onClick={handleSearchByBus}>Search by Bus</button>
                </div>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>Ticket #</th>
                        <th>Name</th>
                        <th>Seat</th>
                        <th>Bus</th>
                        <th>Date</th>
                        <th>Special Requests</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(bookings) && bookings.length > 0 ? (
                        bookings.map((booking) => (
                            <tr key={booking.id}>
                                <td>{booking.id}</td>
                                <td>{booking.name}</td>
                                <td>{booking.seat_id}</td>
                                <td>{booking.bus_id}</td>
                                <td>{booking.date}</td>
                                <td>{booking.special_requests}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="6">No bookings available</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default BookingList;