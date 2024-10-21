import { Input } from "../components/ui/input";
import { useState } from "react"
import GooglePlacesAutocomplete from "react-google-places-autocomplete"
import { SelectBudgetOptions } from "../constants/options";
import { SelectTravelList } from "../constants/options";

function CreateTrip() {

  const [place, setPlace] = useState();
  return (
    <div className="px-5 mt-10 sm:px-10 md:px-32 lg:px-56">
      <h1 className="font-bold text-3xl">Tell us your travel preferences 🏕️🌴</h1>
      <p className="mt-3 text-gray-500 text-xl">Just provide some basic information, and our trip planner will generate a customized itinerary based on your preferences.</p>

      <div className="mt-20 flex flex-col gap-10">
        <div>
          <h2 className="text-xl my-3 font-medium">
            What is destination of choice?
          </h2>
          <GooglePlacesAutocomplete
            apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
            selectProps={{
              place,
              onChange: (v) => { setPlace(v); console.log(v);}
              
            }}
    />
        </div>
        <div>
          <h2 className="text-xl my-3 font-medium">How many days are you planning your trip?</h2>
          <Input placeholder={'Ex.3' }  type="number"/>
        </div>
        <div>
          <h2 className="text-xl my-3 font-medium">What is Your Budget?</h2>
          <div className="grid grid-cols-3 gap-5">
            {SelectBudgetOptions.map((item, index) => (
              <div key={index} className="p-4 border cursor-pointer rounded-lg hover:shadow">
                <h2 className="text-4xl">{item.icon}</h2>
                <h2 className="font-extrabold">{item.title}</h2>
                <h2 className="text-sm text-gray-500">{item.desc}</h2>

              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-xl my-3 font-medium">Who do you plan on traveling with on your next adventure?</h2>
          <div className="grid grid-cols-3 gap-5">
            {SelectTravelList.map((item, index) => (
              <div key={index} className="p-4 border cursor-pointer rounded-lg hover:shadow">
                <h2 className="text-4xl">{item.icon}</h2>
                <h2 className="font-extrabold">{item.title}</h2>
                <h2 className="text-sm text-gray-500">{item.desc}</h2>

              </div>
            ))}
          </div>
      </div>
      
      </div>
    </div>
  )
}

export default CreateTrip
