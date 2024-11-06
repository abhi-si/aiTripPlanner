import { Link } from "react-router-dom";
import HotelCard from "./HotelCard.jsx"; 

function Hotels({ trip }) {
  // Log the trip data and Hotels array for debugging
  console.log("Trip Data Structure:", trip.tripData);
  console.log("Hotels Array:", trip.tripData?.Hotels);

  // Check if trip and tripData exist
  if (!trip || !trip.tripData) {
    return <p className="text-red-500">Trip data is missing.</p>;
  }

  // Destructure Hotels from tripData
  const { Hotels } = trip.tripData;

  // Check if Hotels is an array and has entries
  if (!Array.isArray(Hotels) || Hotels.length === 0) {
    return <p className="text-yellow-500">No hotel recommendations available.</p>;
  }

  return (
    <div>
      <h2 className="font-bold text-xl mt-5 mb-5">Hotel Recommendations</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
        {Hotels.map((hotel, index) => (
          <HotelCard key={hotel.id || index} hotel={hotel} /> // Use a unique key
        ))}
      </div>
    </div>
  );
}

export default Hotels;