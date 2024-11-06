import { IoMdSend } from "react-icons/io";
import { Button } from "@/components/ui/button";
import { GetPlaceDetails } from "@/service/GlobalApi";
import { useEffect, useState } from "react";
import { PHOTO_REF_URL } from "@/service/GlobalApi";

function InfoSection({ trip }) {

    const [PhotoUrl, setPhotoUrl] = useState();
    useEffect(() => {
        trip&&GetPlacePhoto();
    },[trip])
    //! adding getplacedetails for google photo url
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
        <div>
            <img src={PhotoUrl} className="h-[300px] w-full" alt="Trip" />
            <div className="flex justify-between items-center">
                <div className="my-5 flex flex-col gap-2">
                    <h2 className="font-bold text-2xl">{trip?.userSelection?.location?.label}</h2>

                    <div className="flex gap-5">
                        <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md">
                            📅 {trip?.userSelection?.noOfDays} Day
                        </h2>
                        <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md">
                            💰 {trip?.userSelection?.budget} Budget
                        </h2>
                        <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md">
                            🧑 No. of traveler: {trip?.userSelection?.traveler}
                        </h2>
                    </div>
                </div>
                <Button>
                    <IoMdSend />
                </Button>
            </div>

        
        </div>
    );
}

export default InfoSection;
