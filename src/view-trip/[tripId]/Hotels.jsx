function Hotels({ trip }) {
    // Log the trip data and Hotels array for debugging
    console.log("Trip Data Structure:", trip.tripData);
    console.log("Hotels Array:", trip.tripData?.Hotels);

    // Check if trip and tripData exist
    if (!trip || !trip.tripData) {
        return <p>Trip data is missing.</p>;
    }

    // Check if Hotels is an array and has entries
    if (!Array.isArray(trip.tripData.Hotels) || trip.tripData.Hotels.length === 0) {
        return <p>No hotel recommendations available.</p>;
    }

    return (
        <div>
            <h2 className="font-bold text-xl mt-5">Hotel Recommendations</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
                {trip.tripData.Hotels.map((hotel, index) => (
                    <div key={index} className="border rounded-lg shadow-md p-4">
                        <img
                            src={hotel['hotel image url']}
                            alt={hotel.HotelName}
                            className="w-full h-40 object-cover rounded-md mb-2"
                        />
                        <h2 className="font-medium text-lg">{hotel.HotelName}</h2>
                        {/* <p className="text-sm text-gray-600">{hotel.decriptions}</p> */}
                        {/* <p className="font-semibold mt-2">Address:</p>
                        <p className="text-sm">{hotel['Hotel address']}</p> */}
                        <p className="font-semibold mt-2">Price:</p>
                        <p className="text-sm">{hotel.Price}</p>
                        <p className="font-semibold mt-2">Rating:</p>
                        <p className="text-sm">{hotel.rating}</p>
                        {/* <p className="font-semibold mt-2">Coordinates:</p>
                        <p className="text-sm">{hotel['geo cordinates']}</p> */}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Hotels;
