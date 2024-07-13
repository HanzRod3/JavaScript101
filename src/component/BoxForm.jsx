// Import React and the useState hook from the React library
import React, { useState } from "react";
import BoxDisplay from "./BoxDisplay";

// Define the BoxForm functional component
// This component receives a function to add a new box as a prop
function BoxForm({ onAddBox }) {
  // Set up state variables for color, height, and width inputs
  const [color, setColor] = useState("");
  const [height, setHeight] = useState("");
  const [width, setWidth] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    // Prevent the default form submission behavior (which would refresh the page)
    e.preventDefault();
    // Call the onAddBox function with the new box details
    onAddBox({ color, height, width });
    // Reset the form fields to empty strings
    setColor("");
    setHeight("");
    setWidth("");
  };

  return (
    // Form element with an onSubmit handler
    <form onSubmit={handleSubmit}>
      <label htmlFor="color">Color:</label>
      {/* Input field for color with value and onChange handler */}
      <input
        id="color"
        type="text"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <label htmlFor="height">Height (pixels):</label>
      {/* Input field for height with value and onChange handler */}
      <input
        id="height"
        type="text"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />
      <label htmlFor="width">Width (pixels):</label>
      {/* Input field for width with value and onChange handler */}
      <input
        id="width"
        type="text"
        value={width}
        onChange={(e) => setWidth(e.target.value)}
      />
      {/* Submit button to add a new box */}
      <button type="submit">Add</button>
    </form>
  );
}

// Export the BoxForm component so it can be used in other parts of the app
export default BoxForm;
