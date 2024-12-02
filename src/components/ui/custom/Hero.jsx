import { Link } from "react-router-dom"
import { Button } from "../button"


function Hero() {
  return (
    <div className="flex flex-col items-center  mx-56 gap-9 ">
          <h1 className="font-bold text-[30px] text-center mt-16">
              <span className="text-red-500">Discover Your Next Adventure with AI:</span> Personalized Recommendations, Tailored Itineraries, and Unforgettable Experiences</h1>
          <p className="text-xl text-red-500 text-center">Your Personal Trip Planner and Travel Companion: Powered by AI</p>
          <Link to={'/create-trip'}>
              <Button>Get Started</Button>
          </Link>
          
         {/* <img src="/landing.png" className="-mt-20"/> */}
    </div>
  )
}

export default Hero
