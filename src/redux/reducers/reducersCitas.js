import { typesCitas } from "../types/types"

const initialState={
    Cita : []
}

export const reducersCitas =(state = initialState, action)=>{
    switch (action.type) {
        case typesCitas.add:
            return{
                     Cita : [action.payload]
            }
         case typesCitas.list:
                return{
                         Cita : [...action.payload]
                }  
                  
    
        default:
           return state
    }
}

