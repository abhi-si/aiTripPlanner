import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore"; 
import { db } from "../service/firebaseConfig";
import UserTripCardItem from "./UserTripCardItem";

function MyTrips() {
    const navigate = useNavigate(); 
    const [userTrips, setUserTrips] = useState([]);
    useEffect(() => {
        GetUserTrips();
    }, []);

    const GetUserTrips = async () => {
        const user = JSON.parse(localStorage.getItem('user')); // Parse user from localStorage
        if (!user) {
            navigate('/'); 
            return;
        }

        
        const q = query(collection(db, 'AITrips'), where('userEmail', '==', user.email));
        const querySnapshot = await getDocs(q); 
        setUserTrips([]);
        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
            setUserTrips((prevTrips) => [...prevTrips, doc.data()]);
        });
    }

    return (
        <div className="px-5 mt-10 sm:px-10 md:px-32 lg:px-56">
            <h2 className="font-bold text-3xl">My Trips</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-10">
                {userTrips.map((trip,index) =>(
                    < UserTripCardItem trip={trip} key={index} />
                ))}
            </div>
        </div>
    );
}

export default MyTrips;