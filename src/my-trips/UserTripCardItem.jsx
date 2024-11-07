import { GetPlaceDetails } from "@/service/GlobalApi";
import { useEffect, useState } from "react";
import { PHOTO_REF_URL } from "@/service/GlobalApi";
import { Link } from "react-router-dom";

function UserTripCardItem({ trip }) {
    const [PhotoUrl, setPhotoUrl] = useState();
    useEffect(() => {
        trip && GetPlacePhoto();
    }, [trip])
    //! adding get place details for google photo url
    const GetPlacePhoto = async () => {
        const data = {
            textQuery: trip?.userSelection?.location?.label
        };

        try {
            const resp = await GetPlaceDetails(data); // Await the response here
            const photoName = resp.data.places[0].photos[3].name; // Access the response directly
            const PhotoUrl = PHOTO_REF_URL.replace('{NAME}', photoName);
            console.log(PhotoUrl);
            setPhotoUrl(PhotoUrl);
        } catch (error) {
            console.error("Error fetching place details:", error);
        }
    };
    return (
        <Link to={'/view-trip/'+trip?.id}>
    <div className="hover:scale-105 transition-all">
          <img src={PhotoUrl ? PhotoUrl : '/download.png'} className="object-cover rounded-xl w-64 h-64 mb-3" />
          <div>
              <h2 className="font-bold text-sm truncate max-w-32 ">
                  {trip?.userSelection?.location?.label}
              </h2>
              <h2 className="text-sm text-gray-500">{trip?.userSelection?.noOfDays} Days trip with {trip?.userSelection?.budget} Budget</h2>
          </div>
            </div>
        </Link>
  )
}

export default UserTripCardItem
