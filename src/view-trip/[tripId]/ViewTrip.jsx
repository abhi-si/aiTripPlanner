import { useParams } from "react-router-dom";
import { db } from "@/service/firebaseConfig";
import { getDoc, doc } from "firebase/firestore";
import { useEffect, useState } from "react";
import InfoSection from "./InfoSection";
import Hotels from "./Hotels";

function ViewTrip() {
    const { tripId } = useParams();
    const [trip, setTrip] = useState([]); // Initialize as an object
    const [loading, setLoading] = useState(true); // Loading state

    useEffect(() => {
        if (tripId) {
            GetTripData();
        }
    }, [tripId]);

    const GetTripData = async () => {
        const docRef = doc(db, 'AITrips', tripId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            setTrip(docSnap.data());
        } else {
            console.log("No such document!");
        }
        setLoading(false); // Set loading to false after fetching data
    };

    if (loading) {
        return <div>Loading...</div>; // Show a loading message while fetching data
    }

    return (
        <div className="p-10 md:px-20 lg:px-44 xl:px-56">
            <InfoSection trip={trip} />
            <Hotels trip={trip} />
            {/* daily plans */}
            {/* footer */}
        </div>
    );
}

export default ViewTrip;