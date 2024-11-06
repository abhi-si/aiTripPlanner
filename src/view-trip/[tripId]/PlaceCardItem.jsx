import { Link } from "react-router-dom";
import { GetPlaceDetails } from "@/service/GlobalApi";
import { useEffect, useState } from "react";
import { PHOTO_REF_URL } from "@/service/GlobalApi";

function PlaceCardItem({place}) {

  const [PhotoUrl, setPhotoUrl] = useState();
    useEffect(() => {
        place&&GetPlacePhoto();
    },[place])
    //! adding getplacedetails for google photo url
    const GetPlacePhoto = async () => {
        const data = {
            textQuery: place.PlaceName
        };

        try {
            const resp = await GetPlaceDetails(data); // Await the response here
            const photoName = resp.data.places[0].photos[3].name; // Access the response directly
            const PhotoUrl = PHOTO_REF_URL.replace('{NAME}', photoName);
            // console.log(PhotoUrl);
            setPhotoUrl(PhotoUrl);
        } catch (error) {
            console.error("Error fetching place details:", error);
        }
    };
    return (
        <Link to={"https://www.google.com/maps/search/?api=1&query=" +
            place.PlaceName} target="_blank" className="">
            <div className="shadow-md mt-2 flex gap-5 hover:scale-105 transition-all shadow-md p-3 my-3 h-[180px] ">
          <img src={PhotoUrl?PhotoUrl:'/download.png'} className="w-[130px] h-[130px] rounded-xl object-cover" />
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
