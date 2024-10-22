import { Input } from "../components/ui/input";
import { useEffect, useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { SelectBudgetOptions, SelectTravelList } from "../constants/options";
import { Button } from "../components/ui/button";

function CreateTrip() {
  const [place, setPlace] = useState();
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(""); // State for error message

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    // Optional: Log formData changes for debugging
    // console.log(formData);
  }, [formData]);

  const OnGenerateTrip = () => {
    // Check the number of days
    if (formData?.noOfDays > 5) {
      setErrorMessage("Number of days should be less than or equal to 5."); // Set error message
      return;
    }

    setErrorMessage(""); // Clear error message if validation passes
    console.log(formData); // Proceed with generating the trip
  };

  return (
    <div className="px-5 mt-10 sm:px-10 md:px-32 lg:px-56">
      <h1 className="font-bold text-3xl">Tell us your travel preferences 🏕️🌴</h1>
      <p className="mt-3 text-gray-500 text-xl">
        Just provide some basic information, and our trip planner will generate a customized itinerary based on your preferences.
      </p>

      <div className="mt-20 flex flex-col gap-10">
        {/* Destination Input */}
        <div>
          <h2 className="text-xl my-3 font-medium">What is your destination of choice?</h2>
          <GooglePlacesAutocomplete
            apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
            selectProps={{
              place,
              onChange: (v) => {
                setPlace(v);
                handleInputChange('location', v);
                console.log(v);
              },
            }}
          />
        </div>

        {/* Number of Days Input */}
        <div>
          <h2 className="text-xl my-3 font-medium">How many days are you planning your trip?</h2>
          <Input placeholder={'Ex. 3'} type="number" onChange={(e) => handleInputChange('noOfDays', e.target.value)} />
        </div>

        {/* Budget Options */}
        <div>
          <h2 className="text-xl my-3 font-medium">What is Your Budget?</h2>
          <div className="grid grid-cols-3 gap-5">
            {SelectBudgetOptions.map((item, index) => (
              <div key={index}
                onClick={() => handleInputChange('budget', item.title)}
                className={`p-4 border cursor-pointer rounded-lg hover:shadow-lg ${formData?.budget === item.title ? 'shadow-lg border-black' : ''}`}>
                <h2 className="text-4xl">{item.icon}</h2>
                <h2 className="font-extrabold">{item.title}</h2>
                <h2 className="text-sm text-gray-500">{item.desc}</h2>
              </div>
            ))}
          </div>
        </div>

        {/* Traveler Options */}
        <div>
          <h2 className="text-xl my-3 font-medium">Who do you plan on traveling with on your next adventure?</h2>
          <div className="grid grid-cols-3 gap-5">
            {SelectTravelList.map((item, index) => (
              <div key={index}
                onClick={() => handleInputChange('traveler', item.title)}
                className={`p-4 border cursor-pointer rounded-lg hover:shadow-lg ${formData?.traveler === item.title ? 'shadow-lg border-black' : ''}`}>
                <h2 className="text-4xl">{item.icon}</h2>
                <h2 className="font-extrabold">{item.title}</h2>
                <h2 className="text-sm text-gray-500">{item.desc}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Error Message Display */}
      {errorMessage && (
        <div className="mt-5 text-red-500 font-bold">{errorMessage}</div>
      )}

      {/* Generate Trip Button */}
      <div className="my-10 flex justify-end">
        <Button onClick={OnGenerateTrip}>Generate Trip</Button>
      </div>
    </div>
  );
}

export default CreateTrip;