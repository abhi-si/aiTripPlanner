import { IoMdSend } from "react-icons/io";
import { Button } from "@/components/ui/button";

function InfoSection({ trip }) {
    return (
        <div>
            <img src="/download.png" className="h-[300px] w-full" alt="Trip" />
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
