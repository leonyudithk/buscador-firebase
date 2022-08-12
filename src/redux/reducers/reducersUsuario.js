//No se esta usando porque la manejamos desde el reducersLogin
//esto es una alternativa para trabajar el mismo caso de registrar Usuario

import { typesUsuario } from "../types/types"

const initialState={
    user: []
}

export const reducersUsuario=(state=initialState, action)=>{
    switch (action.type) {
        case typesUsuario.register:
            return {
                user: [action.payload]
            }
    
        default:
            return state
    }
}