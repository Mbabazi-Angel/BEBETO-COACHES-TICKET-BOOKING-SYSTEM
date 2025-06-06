import React, { useState, useEffect } from "react";
import axios from "axios";
import "./schedules.css";

const ManageSchedules = () => {
  const [buses, setBuses] = useState([]);
  const [busId, setBusId] = useState("");
  const [busName, setBusName] = useState("");
  const [departureTime, setDepartureTime] = useState("");
  const [destination, setDestination] = useState("");
  const [updatedTimes, setUpdatedTimes] = useState({});

  // Define the API base URL as a relative path
  const API_BASE_URL = "http://localhost:8000";

  // Fetch buses scheduled for today
  const fetchBuses = () => {
    axios
      .get(`${API_BASE_URL}/view_buses.php`)
      .then((response) => {
        console.log("Buses Response:", response.data);
        if (Array.isArray(response.data)) {
          setBuses(response.data);
        } else {
          setBuses([]);
        }
      })
      .catch((error) => {
        alert("Error fetching bus schedules.");
        console.error("Error fetching bus schedules:", error);
      });
  };

  // Handle add new bus
  const handleAddBus = (e) => {
    e.preventDefault();

    axios
      .post(
        `${API_BASE_URL}/add_bus.php`,
        {
          bus_id: busId,
          bus_name: busName,
          departure_time: departureTime,
          destination: destination,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((response) => {
        alert(response.data.message);
        fetchBuses();
        // Reset form
        setBusId("");
        setBusName("");
        setDepartureTime("");
        setDestination("");
      })
      .catch((error) => {
        console.error("Error adding bus:", error);
        alert("Failed to add bus.");
      });
  };

  // Handle delete bus
  const handleDeleteBus = (busId) => {
    axios
      .delete(`${API_BASE_URL}/delete_bus.php`, { data: { bus_id: busId } })
      .then((response) => {
        alert("Bus deleted successfully!");
        fetchBuses();
      })
      .catch((error) => alert("Failed to delete bus."));
  };

  // Handle update bus time
  const handleTimeChange = (busId, newTime) => {
    setUpdatedTimes((prevTimes) => ({
      ...prevTimes,
      [busId]: newTime,
    }));
  };

  const handleUpdateBusTime = (busId) => {
    if (!updatedTimes[busId]) {
      alert("Please enter a valid departure time.");
      return;
    }
    axios
      .put(`${API_BASE_URL}/update_bus_time.php`, {
        bus_id: busId,
        departure_time: updatedTimes[busId],
      })
      .then((response) => {
        alert("Bus departure time updated successfully!");
        fetchBuses();
      })
      .catch((error) => alert("Failed to update bus time."));
  };

  // Handle hide bus
  const handleHideBus = (busId) => {
    axios
      .put(`${API_BASE_URL}/hide_bus.php`, { bus_id: busId })
      .then((response) => {
        alert("Bus hidden successfully!");
        fetchBuses();
      })
      .catch((error) => alert("Failed to hide bus."));
  };

  useEffect(() => {
    fetchBuses();
  }, []);

  // Format departure_time for datetime-local input
  const formatDateTimeForInput = (dateTimeString) => {
    const date = new Date(dateTimeString);
    if (isNaN(date.getTime())) {
      // Fallback to current date-time if invalid
      return new Date().toISOString().slice(0, 16);
    }
    return date.toISOString().slice(0, 16); // Format as "YYYY-MM-DDThh:mm"
  };

  return (
    <div className="bus-schedules-container">
      <h2 style={{ color: "#F0801A" }}>Manage Bus Schedules</h2>

      {/* Add Bus Form */}
      <h3>Add New Bus</h3>
      <form className="bus-form" onSubmit={handleAddBus}>
        <div className="top-inputs">
          <input
            type="number"
            className="bus-form-input"
            placeholder="Bus ID"
            value={busId}
            onChange={(e) => setBusId(e.target.value)}
            required
          />
          <input
            type="text"
            className="bus-form-input"
            placeholder="Bus Name (e.g. Bus 004)"
            value={busName}
            onChange={(e) => setBusName(e.target.value)}
            required
          />
          <input
            type="datetime-local"
            className="bus-form-input"
            value={departureTime}
            onChange={(e) => setDepartureTime(e.target.value)}
            required
          />
          <input
            type="text"
            className="bus-form-input"
            placeholder="Destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Bus</button>
      </form>

      <br />
      <br />

      {/* Bus Schedule Table */}
      <h3>Current Bus Schedules</h3>
      <table>
        <thead>
          <tr>
            <th>Bus ID</th>
            <th>Bus Name</th>
            <th>Departure Time</th>
            <th>Destination</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {buses.length > 0 ? (
            buses.map((bus) => (
              <tr key={bus.id}>
                <td>{bus.bus_id}</td>
                <td>{bus.bus_name}</td>
                <td>
                  <input
                    type="datetime-local"
                    value={
                      updatedTimes[bus.bus_id] ||
                      formatDateTimeForInput(bus.departure_time)
                    }
                    onChange={(e) => handleTimeChange(bus.bus_id, e.target.value)}
                  />
                </td>
                <td>{bus.destination}</td>
                <td>{bus.status}</td>
                <td>
                  <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                    <button className="time-btn" onClick={() => handleUpdateBusTime(bus.bus_id)}>
                      Update Time
                    </button>
                    <button className="hide-btn" onClick={() => handleHideBus(bus.bus_id)}>
                      Hide
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => handleDeleteBus(bus.bus_id)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No buses scheduled</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ManageSchedules;