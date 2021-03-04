import { createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension'

const initialState = {
    cardetails :[
        {
            "name" : "Renault ZOE ZE50 R135 GT Line (rapid) 52kWh",
            "speed" : "20km",
            "image" : 1,
            "Efficiency" : "17kWh",
            "Price" :  450,
            "Rent" : "6 months",
        },
        {
            "name" : "Renault ZOE ZE50 R135 GT Line (rapid) 52kWh",
            "speed" : "20km",
            "image" : 3,
            "Efficiency" : "17kWh",
            "Price" :  460,
            "Rent" : "6 months",
        },
        {
            "name" : "Renault ZOE ZE50 R135 GT Line (rapid) 52kWh",
            "speed" : "20km",
            "image" : 2,
            "Efficiency" : "17kWh",
            "Price" :  470,
            "Rent" : "6 months",
        },
        {
            "name" : "Renault ZOE ZE50 R135 GT Line (rapid) 52kWh",
            "speed" : "20km",
            "image" : 3,
            "Efficiency" : "17kWh",
            "Price" :  480,
            "Rent" : "6 months",
        },
        {
            "name" : "Renault ZOE ZE50 R135 GT Line (rapid) 52kWh",
            "speed" : "20km",
            "image" : 2,
            "Efficiency" : "17kWh",
            "Price" :  490,
            "Rent" : "6 months",
        },
        {
            "name" : "Renault ZOE ZE50 R135 GT Line (rapid) 52kWh",
            "speed" : "20km",
            "image" : 1,
            "Efficiency" : "17kWh",
            "Price" :  590,
            "Rent" : "6 months",
        },
        {
            "name" : "Renault ZOE ZE50 R135 GT Line (rapid) 52kWh",
            "speed" : "20km",
            "image" : 2,
            "Efficiency" : "17kWh",
            "Price" :  500,
            "Rent" : "6 months",
        },
        {
            "name" : "Renault ZOE ZE50 R135 GT Line (rapid) 52kWh",
            "speed" : "20km",
            "image" : 3,
            "Efficiency" : "17kWh",
            "Price" :  510,
            "Rent" : "6 months",
        },
        {
            "name" : "Renault ZOE ZE50 R135 GT Line (rapid) 52kWh",
            "speed" : "20km",
            "image" : 1,
            "Efficiency" : "17kWh",
            "Price" :  520,
            "Rent" : "6 months",
        },
        {
            "name" : "Renault ZOE ZE50 R135 GT Line (rapid) 52kWh",
            "speed" : "20km",
            "image" : 3,
            "Efficiency" : "17kWh",
            "Price" :  530,
            "Rent" : "6 months",
        },
        
    ]
}
const carReducer = (state : any = initialState,action : any) => {
    switch(action.type){
        default:
        return state;
    }
}

const carstore = createStore(carReducer,composeWithDevTools());
export default carstore;

