import React, { useState, useEffect } from 'react';

function App() {
  // Create the count state.
  const [count, setCount] = useState(0);
  // Update the count (+1 every second).
  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  }, [count, setCount]);
  // Return the App component.
  return (
    <div className="h-screen bg-red-800"> 
      <div className="">
        <p className="text-3xl"> 
          Page has been open for <code>{count}</code> seconds.
        </p>
        <p className="text-blue-800 text-5xl">
          Thank you for watching
        </p>
      </div>
      
    </div>
  );
}
// Happy Days 
export default App;