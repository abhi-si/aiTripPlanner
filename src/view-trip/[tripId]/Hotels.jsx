import { Link } from "react-router-dom";

function Hotels({ trip }) {
  // Log the trip data and Hotels array for debugging
  console.log("Trip Data Structure:", trip.tripData);
  console.log("Hotels Array:", trip.tripData?.Hotels);

  // Check if trip and tripData exist
  if (!trip || !trip.tripData) {
    return <p>Trip data is missing.</p>;
  }

  // Check if Hotels is an array and has entries
  if (
    !Array.isArray(trip.tripData.Hotels) ||
    trip.tripData.Hotels.length === 0
  ) {
    return <p>No hotel recommendations available.</p>;
  }

  return (
    <div>
      <h2 className="font-bold text-xl mt-5 mb-5">Hotel Recommendations</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
        {trip.tripData.Hotels.map((hotel, index) => (
          <Link key={index}
            to={
              "https://www.google.com/maps/search/?api=1&query=" +
              hotel.HotelName +
              " " +
                hotel["Hotel address"]
            }
            target="_blank"
          >
            <div
              key={index}
              className="hover:scale-105 transition-all cursor-pointer"
            >
              <img src="/download.png" />
              <div className="my-2 flex flex-col gap-2">
                <h2 className="font-medium text-lg">{hotel.HotelName}</h2>
                <h2 className="text-sm">{hotel.Price}</h2>
                <h2 className="text-sm">⭐{hotel.rating}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Hotels;
