import PlaceCardItem from "./PlaceCardItem"


function DailyPlans({trip}) {
  return (
    <div>
          <h2 className="font-bold text-xl mt-5 mb-5">Places to visit</h2>
          <div>
              {trip.tripData?.Itinerary.map((item, index) => (
                  
                  <div key={index} >
                      <h2 className="font-bold text-lg mb-2">{item.Day}</h2>
                      <div className="grid md:grid-cols-2 gap-5">
                      {item.Plan.map((place,index) => (
                          <div key={index}  >
                              <h2 className="font-medium text-sm text-orange-600">{place["Best Time to Visit"] }</h2>
                              <PlaceCardItem place={place} />
                          </div>
                      ))}
                          </div>
                  </div>
              ))}
          </div>
    </div>
  )
}

export default DailyPlans
