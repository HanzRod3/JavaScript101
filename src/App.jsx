// Import the useState hook from the React library
import { useState } from "react";
// Import the CSS file for styling
import "./App.css";
// Import the BoxForm and BoxDisplay components
import BoxForm from "./components/BoxForm";
import BoxDisplay from "./component/BoxDisplay";

// Define the main App component
function App() {
  // Set up state for the list of boxes, starting as an empty array
  const [boxes, setBoxes] = useState([]);

  // Function to add a newbox to the list of boxes
  const addBox = (newBox) => {
    // Update the boxes state with the new box added to the existing list
    setBoxes([...boxes, newBox]);
  };

  // Function to delete a box from the list of boxes
  const deleteBox = (index) => {
    // Update the boxes state, filtering out the box at the specified index
    setBoxes(boxes.filter((box, i) => i !== index));
  };

  // Return the JSX that defines what the component renders
  return (
    <div className="App">
      <h1>Box Generator</h1>
      {/* Render the BoxForm component, passing the addBox function as a prop */}
      <BoxForm onAddBox={addBox} />
      {/* Render the BoxDisplay component, passing the boxes list and deleteBox function as props */}
      <BoxDisplay boxes={boxes} onDeleteBox={deleteBox} />
    </div>
  );
}

// Export the App component as the default export of this module
export default App;
