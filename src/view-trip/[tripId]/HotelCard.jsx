import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { GetPlaceDetails } from "@/service/GlobalApi";
import { PHOTO_REF_URL } from "@/service/GlobalApi";

function HotelCard({ hotel }) {
    const [photoUrl, setPhotoUrl] = useState('');

    useEffect(() => {
        if (hotel) {
            GetPlacePhoto();
        }
    }, [hotel]);

    const GetPlacePhoto = async () => {
        const data = {
            textQuery: hotel.HotelName,
        };

        try {
            const resp = await GetPlaceDetails(data);
            if (resp.data.places.length > 0 && resp.data.places[0].photos.length > 0) {
                const photoName = resp.data.places[0].photos[0].name; // Access the first photo
                const newPhotoUrl = PHOTO_REF_URL.replace('{NAME}', photoName);
                console.log(newPhotoUrl);
                setPhotoUrl(newPhotoUrl);
            } else {
                console.warn("No photos available for this hotel.");
            }
        } catch (error) {
            console.error("Error fetching place details:", error);
        }
    };

    return (
        <Link 
            to={`https://www.google.com/maps/search/?api=1&query=${hotel.HotelName} ${hotel["Hotel address"]}`}
            target="_blank"
        >
            <div className="hover:scale-105 transition-all cursor-pointer">
                {photoUrl ? (
                    <img src={photoUrl} alt={`Photo of ${hotel.HotelName}`} className="h-[200px] w-full object-cover"/>
                ) : (
                    <div className="bg-gray-200 h-48 w-full flex items-center justify-center">
                        <span className="text-gray-500">No image available</span>
                    </div>
                )}
                <div className="my-2 flex flex-col gap-2">
                    <h2 className="font-medium text-lg">{hotel.HotelName}</h2>
                    <h2 className="text-sm">{hotel.Price}</h2>
                    <h2 className="text-sm">⭐{hotel.rating}</h2>
                </div>
            </div>
        </Link>
    );
}

export default HotelCard;