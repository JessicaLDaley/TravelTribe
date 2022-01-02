import React from "react";

function Dashboard() {
  return (
    <div>
      <h2>Welcome! Johnny</h2>
      <div>
        <h3>Number of trips: 69</h3>
        <div>
          <h3>Most recent trips</h3>
          <ul>
            <li>trip 1</li>
            <li>trip 2</li>
            <li>trip 3</li>
            <li>trip 4</li>
            <li>trip 5</li>
          </ul>
          <a href="/">Show more</a>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;