export const SelectBudgetOptions = [
    {
        id: 1,
        title: 'Cheap',
        desc: 'Stay conscious of costs',
        icon:'💵',
    },
    {
        id: 2,
        title: 'Moderate',
        desc: 'Keep cost on the average side',
        icon:'💰',
    },
    {
        id: 3,
        title: 'Luxry',
        desc: 'Dont worry about cost',
        icon:'💸',
    }
]

export const SelectTravelList = [
    {
        id: 1,
        title: 'Solo Traveler',
        desc: 'Embark on a personal journey of discovery.',
        icon: '✈️',
        people: '1'
    },
    {
        id: 2,
        title: 'Couple',
        desc: 'Share unforgettable moments with a partner.',
        icon: '🥂',
        people: '2'
    },
    {
        id: 3,
        title: 'Family',
        desc: 'Create cherished memories with your loved ones.',
        icon: '🏡',
        people: '3+'
    },
    {
        id: 4,
        title: 'Friends',
        desc: 'Embark on an adventurous trip with your closest companions.',
        icon: '⛵',
        people: '3+'
    },
];

export const AI_PROMPT = 'Generate Travel Plan for location : {location}, for {totalDays}  Days for {traveler} with {budget} budget ,Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo cordinates, rating, decriptions and suggest itinerary with placeName, Place Deatils, Place Image Url,, Geo Cordinates, ticket Pricing, rating, Time travel each of the location for {totalDays} days with each day plan with best time to visit in JSON format'
