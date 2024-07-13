// Import React library
import React from "react";

// Define the BoxDisplay functional component
// This component receives a list of boxes and a function to delete a box as props
function BoxDisplay({ boxes, onDeleteBox }) {
  return (
    // Style the container div to use flexbox and wrap its content
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {/* Loop through the boxes array and create a div for each box */}
      {boxes.map((box, index) => (
        <div
          key={index} // Each child in a list should have a unique "key" prop
          style={{
            width: `${box.width}px`, // Set the width of the box
            height: `${box.height}px`, // Set the height of the box
            backgroundColor: box.color, // Set the background color of the box
            margin: "10px", // Add some margin around each box
          }}
        >
          {/* Button to delete the box, calls onDeleteBox with the index of the box to be deleted */}
          <button onClick={() => onDeleteBox(index)}>X</button>
        </div>
      ))}
    </div>
  );
}

// Export the BoxDisplay component so it can be used in other parts of the app
export default BoxDisplay;
