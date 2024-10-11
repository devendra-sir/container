import React, { useState } from "react";
import "./pennale.css"; // Import CSS for the Pennale component

function Pennale() {
  const [location, setLocation] = useState("dantewada");
  const [checkinDate, setCheckinDate] = useState("");
  const [checkoutDate, setCheckoutDate] = useState("");
  const [result, setResult] = useState("");
  
  const handleLocationChange = (event) => {
    setLocation(event.target.value); // Update the state with selected value
    console.log("Selected location:", event.target.value); // Debugging purpose
  };
  const checkAvailability = () => {
    if (checkinDate && checkoutDate) {
      setResult(`Checking availability for ${location} from ${checkinDate} to ${checkoutDate}...`);
    } else {
      setResult("Please select both Check-In and Check-Out dates.");
    }
  };

  const bookRoom = () => {
    if (checkinDate && checkoutDate) {
      setResult(`Booking room in ${location} from ${checkinDate} to ${checkoutDate}...`);
    } else {
      setResult("Please select both Check-In and Check-Out dates.");
    }
  };

  return (
    <div className="pennale-container">
      <h2>RESTHOUSE</h2> {/* Add "RESTHOUSE" text here */}
      
      {/* Location Dropdown */}
      <div className="input-group">
        <label htmlFor="location">Location:</label>
        <select id="location" value={location} onChange={handleLocationChange}>
          <option value="dantewada">Dantewada</option>
          <option value="geedam">Geedam</option>
          <option value="barsur">Barsur</option>
        </select>
      </div>

      {/* Check-In and Check-Out Fields */}
      <div className="input-group dates">
        <div>
          <label htmlFor="checkin">Check-In:</label>
          <input type="date" id="checkin" value={checkinDate} onChange={(e) => setCheckinDate(e.target.value)} />
        </div>
        <div>
          <label htmlFor="checkout">Check-Out:</label>
          <input type="date" id="checkout" value={checkoutDate} onChange={(e) => setCheckoutDate(e.target.value)} />
        </div>
      </div>

      {/* Buttons */}
      <div className="buttons">
        <button onClick={checkAvailability}>Check</button>
        <button onClick={bookRoom}>Book</button>
      </div>

      {/* Result Message */}
      <div id="result">{result}</div>
    </div>
  );
}

export default Pennale;
