const initialState = {
    cardetails :[
        {
            "id" : 1,
            "name" : "Renault ZOE ZE50 R135 GT Line (rapid) 52kWh",
            "speed" : "20km",
            "image" : 1,
            "Efficiency" : "17kWh",
            "Price" :  450,
            "Rent" : "6 months",
        },
        {
            "id" : 2,
            "name" : "Renault ZOE ZE50 R135 GT Line (rapid) 52kWh",
            "speed" : "20km",
            "image" : 3,
            "Efficiency" : "17kWh",
            "Price" :  460,
            "Rent" : "6 months",
        },
        {
            "id" : 3,
            "name" : "Renault ZOE ZE50 R135 GT Line (rapid) 52kWh",
            "speed" : "20km",
            "image" : 2,
            "Efficiency" : "17kWh",
            "Price" :  470,
            "Rent" : "6 months",
        },
        {
            "id" : 4,
            "name" : "Renault ZOE ZE50 R135 GT Line (rapid) 52kWh",
            "speed" : "20km",
            "image" : 3,
            "Efficiency" : "17kWh",
            "Price" :  480,
            "Rent" : "6 months",
        },
        {
            "id" : 5,
            "name" : "Renault ZOE ZE50 R135 GT Line (rapid) 52kWh",
            "speed" : "20km",
            "image" : 2,
            "Efficiency" : "17kWh",
            "Price" :  490,
            "Rent" : "6 months",
        },
        {
            "id" : 6,
            "name" : "Renault ZOE ZE50 R135 GT Line (rapid) 52kWh",
            "speed" : "20km",
            "image" : 1,
            "Efficiency" : "17kWh",
            "Price" :  590,
            "Rent" : "6 months",
        },
        {
            "id" : 7,
            "name" : "Renault ZOE ZE50 R135 GT Line (rapid) 52kWh",
            "speed" : "20km",
            "image" : 2,
            "Efficiency" : "17kWh",
            "Price" :  500,
            "Rent" : "6 months",
        },
        {
            "id" : 8,
            "name" : "Renault ZOE ZE50 R135 GT Line (rapid) 52kWh",
            "speed" : "20km",
            "image" : 3,
            "Efficiency" : "17kWh",
            "Price" :  510,
            "Rent" : "6 months",
        },
        {
            "id" : 9,
            "name" : "Renault ZOE ZE50 R135 GT Line (rapid) 52kWh",
            "speed" : "20km",
            "image" : 1,
            "Efficiency" : "17kWh",
            "Price" :  520,
            "Rent" : "6 months",
        },
        {
            "id" : 10,
            "name" : "Renault ZOE ZE50 R135 GT Line (rapid) 52kWh",
            "speed" : "20km",
            "image" : 3,
            "Efficiency" : "17kWh",
            "Price" :  530,
            "Rent" : "6 months",
        },
        
    ],
    carBooked :[]
}

export const carReducer = (state : any = initialState,action : any) => {
    switch(action.type){
        case "AddCart":
            return {
                ...state,
                carBooked : [action.payload,...state.carBooked]
            };
        default:
        return state;
    }
}
