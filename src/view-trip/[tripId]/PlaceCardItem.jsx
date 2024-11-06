import { Link } from "react-router-dom";

function PlaceCardItem({place}) {
    return (
        <Link to={"https://www.google.com/maps/search/?api=1&query=" +
            place.PlaceName} target="_blank" className="">
            <div className="shadow-md mt-2 flex gap-5 hover:scale-105 transition-all shadow-md p-3 my-3 h-[180px] ">
          <img src="/download.png" className="w-[130px] h-[130px]" />
          <div>
              <h2 className="font-bold text-lg">{place.PlaceName}</h2>
              <p className="text-sm text-gray-400">{place['Place Deatils']}</p>
              <h2 className="mt-2">{place['Time travel'] }</h2>
          </div>
          
            </div>
        </Link>
  )
}

export default PlaceCardItem
